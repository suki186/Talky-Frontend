import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import UserInfo from "./components/UserInfo";
import userData from "../../datas/userDummy.json";
import EmergencyContact from "./components/EmergencyContact";
import VoiceSetting from "./components/VoiceSetting";
import LogoutButton from "../../components/auth/LogoutButton";
import { COLORS } from "../../styles/color";

const UserSettingScreen = () => {
  const user = userData[0];
  const [name, setName] = useState(user.name);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 사용자 정보 */}
      {/* 유저 정보 연결 예정 */}
      <UserInfo
        name={name}
        onChange={setName}
        id={user.id}
        unique={user.unique}
      />

      {/* 긴급 연락처 */}
      {/* 보호자 이름 연결 예정 */}
      <EmergencyContact />

      {/* 음성 설정 */}
      <VoiceSetting />

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
