import { ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect, useMemo } from "react";
import UserInfo from "./components/UserInfo";
import EmergencyContact from "./components/EmergencyContact";
import VoiceSetting from "./components/VoiceSetting";
import LogoutButton from "../../components/auth/LogoutButton";
import { COLORS } from "../../styles/color";
import getUserInfoApi from "../../apis/userSetting/getUserInfoApi";
import { buildUserSettingHandlers } from "./userSettingHandlers";

const UserSettingScreen = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 사용자 정보 조회
  useEffect(() => {
    let isMounted = true; // 언마운트 후 setState 방지

    const fetchUser = async () => {
      setLoading(true);
      try {
        const data = await getUserInfoApi();
        if (!isMounted) return;
        if (data) {
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (e) {
        if (!isMounted) return;
        setUser(null);
        console.error("UserSettingScreen useEffect Error:", e);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUser();
    return () => {
      isMounted = false;
    };
  }, []);

  const { handleUserNameChange, handleUserIntroChange } = useMemo(
    () => buildUserSettingHandlers(setUser),
    [setUser]
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 사용자 정보 */}
      <UserInfo
        userName={user?.username ?? "이름을 입력해 주세요"}
        loginId={user?.loginId ?? "-"}
        connectionCode={user?.connectionCode ?? "-"}
        introduction={
          user?.introduction ??
          "저는 언어 표현이 어려운 상황입니다. 양해 부탁드립니다."
        }
        onChangeName={handleUserNameChange}
        onChangeIntro={handleUserIntroChange}
      />

      {/* 긴급 연락처 */}
      <EmergencyContact
        guardName={user?.guardianInfo?.username ?? "이름을 입력해 주세요"}
        phone={user?.guardianInfo?.phoneNumber ?? "010-0000-0000"}
      />

      {/* 음성 설정 */}
      <VoiceSetting
        speed={user?.ttsSettings?.speed ?? 1}
        language={user?.ttsSettings?.language ?? "ko"}
        gender={user?.ttsSettings?.gender ?? "male"}
      />

      {/* 로그아웃 버튼 */}
      <LogoutButton />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 33,
    paddingBottom: 18,
    backgroundColor: COLORS.BACKGROUND,
    alignItems: "center",
    gap: 24,
  },
});

export default UserSettingScreen;
