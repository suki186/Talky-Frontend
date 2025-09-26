import React, { useState, useEffect } from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import SplashScreen from "./src/screens/SplashScreen";
import { AuthProvider } from "./src/context/AuthContext";
import { VoiceSettingsProvider } from "./src/context/VoiceSettingsContext";
import { EmergencyContactProvider } from "./src/context/EmergencyContactContext";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import getUserInfoApi from "./src/apis/userSetting/getUserInfoApi";

export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [userSettings, setUserSettings] = useState(null);

  // 폰트 불러오기
  const [fontsLoaded] = useFonts({
    PretendardThin: require("./assets/fonts/Pretendard-Thin.otf"), // 100
    PretendardExtraLight: require("./assets/fonts/Pretendard-ExtraLight.otf"), // 200
    PretendardLight: require("./assets/fonts/Pretendard-Light.otf"), // 300
    PretendardRegular: require("./assets/fonts/Pretendard-Regular.otf"), // 400
    PretendardMedium: require("./assets/fonts/Pretendard-Medium.otf"), // 500
    PretendardSemiBold: require("./assets/fonts/Pretendard-SemiBold.otf"), // 600
    PretendardBold: require("./assets/fonts/Pretendard-Bold.otf"), // 700
    PretendardExtraBold: require("./assets/fonts/Pretendard-ExtraBold.otf"), // 800
    PretendardBlack: require("./assets/fonts/Pretendard-Black.otf"), // 900
  });

  // 전역으로 Text에 폰트 적용
  useEffect(() => {
    if (fontsLoaded) {
      const oldRender = Text.render;
      Text.render = function (...args) {
        const origin = oldRender.apply(this, args);
        return React.cloneElement(origin, {
          style: [{ fontFamily: "PretendardRegular" }, origin.props.style],
        });
      };
    }
  }, [fontsLoaded]);

  // Splash 완료 후 유저 TTS 설정 불러오기
  useEffect(() => {
    if (!splashDone) return;

    const fetchUserSettings = async () => {
      try {
        const data = await getUserInfoApi();
        setUserSettings(
          data?.ttsSettings || {
            ttsSpeed: 1.0,
            ttsLanguage: "ko",
            ttsGender: "male",
          }
        );
      } catch (e) {
        console.error("유저 TTS 설정 불러오기 실패", e);
        setUserSettings({
          ttsSpeed: 1.0,
          ttsLanguage: "ko",
          ttsGender: "male",
        });
      }
    };

    fetchUserSettings();
  }, [splashDone]);

  // 완료 대기
  if (!fontsLoaded) return null;
  if (!splashDone) {
    return <SplashScreen onFinish={() => setSplashDone(true)} />;
  }
  if (!userSettings) return null;

  return (
    <AuthProvider>
      <EmergencyContactProvider
        initialTarget={userSettings?.emergencyTarget || "119"}
      >
        <VoiceSettingsProvider initialSettings={userSettings}>
          <RootNavigator />
        </VoiceSettingsProvider>
      </EmergencyContactProvider>
    </AuthProvider>
  );
}
