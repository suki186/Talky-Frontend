import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../../components/Logo";
import LoginForm from "./components/LoginForm";
import SignButton from "../../components/auth/SignButton";
import { COLORS } from "../../styles/color";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* 로고 */}
      <Logo width="140" height="43.73" />
      <View style={{ height: 63 }} />
      {/* 로그인 폼 */}
      <LoginForm />
      <View style={{ height: 50.67 }} />
      <GradientLine />
      <View style={{ height: 56.67 }} />
      <Text style={styles.signText}>Talky에 처음 오셨나요?</Text>
      <View style={{ height: 7 }} />
      {/* 회원가입 버튼 */}
      <SignButton
        title="회원가입"
        onPress={() => navigation.navigate("Signup")}
        disabled={false}
      />
    </View>
  );
};

// 그라데이션 라인
const GradientLine = () => {
  return (
    <LinearGradient
      colors={["#FFFFFF00", "#FFEC9F80", "#FFFFFF00"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{
        width: 360,
        height: 1.67,
        borderRadius: 0.83,
      }}
    />
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
    // fontWeight: 500,
    fontFamily: "PretendardMedium",
    color: COLORS.BLACK,
  },
});

export default LoginScreen;
