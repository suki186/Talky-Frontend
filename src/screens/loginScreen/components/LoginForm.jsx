import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SignInput from "../../../components/auth/SignInput";
import SignButton from "../../../components/auth/SignButton";
import ErrorIcon from "../../../components/auth/ErrorIcon";
import { COLORS } from "../../../styles/color";
import loginUserApi from "../../../apis/auth/loginUserApi";
import { useAuth } from "../../../context/AuthContext";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setIsLoggedIn, setUserType } = useAuth();

  // 로그인 함수
  const handleLogin = async () => {
    const result = await loginUserApi(id, password);

    if (result) {
      console.log("로그인 성공");
      setIsLoggedIn(true);
      setUserType(result.userType);
    } else {
      console.error("로그인 실패");
    }
  };

  return (
    <View>
      <View style={styles.inputWithIcon}>
        <SignInput
          placeholder="아이디를 입력해 주세요"
          value={id}
          onChangeText={(text) => {
            setId(text);
            if (error) setError("");
          }}
          hasError={!!error}
        />
        {error && <ErrorIcon />}
      </View>
      <View style={{ height: 19.67 }} />

      <View style={styles.inputWithIcon}>
        <SignInput
          placeholder="비밀번호를 입력해 주세요"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (error) setError("");
          }}
          hasError={!!error}
        />
        {error && <ErrorIcon />}
      </View>
      <Text style={styles.error}>{error}</Text>

      <View style={{ height: 35 }} />
      <SignButton
        title="로그인"
        disabled={!(id.length > 0 && password.length > 0)}
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 7.33,
    fontWeight: "400",
    color: COLORS.ERROR_MESSAGE,
    textAlign: "center",
    marginTop: 3,
  },
  inputWithIcon: {
    width: 242.67,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default LoginForm;
