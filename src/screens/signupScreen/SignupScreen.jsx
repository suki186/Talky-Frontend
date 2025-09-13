import { View, StyleSheet } from "react-native";
import React from "react";
import Logo from "../../components/Logo";
import SignupForm from "./components/SignupForm";
import { COLORS } from "../../styles/color";

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      {/* 로고 */}
      <Logo width={140} height={43.73} />
      <View style={{ height: 63 }} />
      {/* 회원가입 폼 */}
      <SignupForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signText: {
    fontSize: 8,
    fontFamily: "PretendardMedium",
    color: COLORS.BLACK,
  },
});

export default SignupScreen;
