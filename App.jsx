import React, { useState, useEffect } from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import SplashScreen from "./src/screens/SplashScreen";
import { Text } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const isLoggedIn = true;

  // Pretendard 폰트 불러오기
  const [fontsLoaded] = useFonts({
    Pretendard: require("./assets/fonts/Pretendard-Bold.otf"),
  });

  // 전역으로 Text에 폰트 적용
  useEffect(() => {
    if (fontsLoaded) {
      const oldRender = Text.render;
      Text.render = function (...args) {
        const origin = oldRender.apply(this, args);
        return React.cloneElement(origin, {
          style: [{ fontFamily: "Pretendard" }, origin.props.style],
        });
      };
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  if (!splashDone) {
    return (
      <SplashScreen
        isLoggedIn={isLoggedIn}
        onFinish={() => setSplashDone(true)}
      />
    );
  }

  return <RootNavigator />;
}
