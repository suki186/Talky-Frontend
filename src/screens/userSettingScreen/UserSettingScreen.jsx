import { ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import UserInfo from "./components/UserInfo";
import EmergencyContact from "./components/EmergencyContact";
import VoiceSetting from "./components/VoiceSetting";
import LogoutButton from "../../components/auth/LogoutButton";
import { COLORS } from "../../styles/color";
import getUserInfoApi from "../../apis/userSetting/getUserInfoApi";

const UserSettingScreen = () => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
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
          setUserName(data?.username ?? "-");
        } else {
          setUser(null);
          setUserName("-");
        }
      } catch (e) {
        if (!isMounted) return;
        setUser(null);
        setUserName("-");
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 사용자 정보 */}
      <UserInfo
        userName={userName}
        onChange={setUserName}
        loginId={user?.loginId ?? "-"}
        connectionCode={user?.connectionCode ?? "-"}
        introduction={user?.introduction ?? "-"}
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
