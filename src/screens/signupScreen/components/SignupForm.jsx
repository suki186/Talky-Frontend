import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SignInput from "../../../components/auth/SignInput";
import SignButton from "../../../components/auth/SignButton";
import ErrorIcon from "../../../components/auth/ErrorIcon";
import { COLORS } from "../../../styles/color";
import { validateSignup } from "../../../utils/validation";
import Selector from "../../../components/Selector";

const SignupForm = () => {
  const roles = ["일반", "보호자"]; // 역할 목록

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(null);

  // 오류 메시지 상태
  const [errors, setErrors] = useState({
    name: "",
    id: "",
    password: "",
  });

  // 유효성 조건
  const validate = () => {
    const { isValid, errors: newErrors } = validateSignup({
      name,
      id,
      password,
    });
    setErrors(newErrors);
    return isValid;
  };

  // 회원가입 함수
  const handleSignup = () => {
    // 회원가입 로직 구현 예정
    if (validate()) {
      console.log("회원가입 ", { name, id, password, role });
    }
  };

  return (
    <View>
      {/* 이름 */}
      <Text style={styles.text}>이름</Text>
      <View style={styles.inputWithIcon}>
        <SignInput
          placeholder="이름을 입력해 주세요"
          value={name}
          onChangeText={(text) => {
            setName(text);
            if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
          }}
          hasError={!!errors.name}
        />
        {errors.name && <ErrorIcon />}
      </View>
      <Text style={styles.error}>{errors.name}</Text>
      <View style={{ height: 1 }} />

      {/* 아이디 */}
      <Text style={styles.text}>아이디</Text>
      <View style={styles.inputWithIcon}>
        <SignInput
          placeholder="아이디를 입력해 주세요"
          value={id}
          onChangeText={(text) => {
            setId(text);
            if (errors.id) setErrors((prev) => ({ ...prev, id: "" }));
          }}
          hasError={!!errors.id}
          showCheckButton={true}
          checkButtonDisabled={false}
        />
        {errors.id && <ErrorIcon />}
      </View>
      <Text style={styles.error}>{errors.id}</Text>
      <View style={{ height: 1 }} />

      {/* 비밀번호 */}
      <Text style={styles.text}>비밀번호</Text>
      <View style={styles.inputWithIcon}>
        <SignInput
          placeholder="비밀번호를 입력해 주세요"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (errors.password)
              setErrors((prev) => ({ ...prev, password: "" }));
          }}
          hasError={!!errors.password}
        />
        {errors.password && <ErrorIcon />}
      </View>
      <Text style={styles.error}>{errors.password}</Text>
      <View style={{ height: 11 }} />

      {/* 역할 */}
      <Text style={styles.text}>역할</Text>

      <Selector
        items={roles}
        selectedValue={role}
        onSelect={setRole}
        placeholder="역할을 선택해 주세요"
      />
      <View style={{ height: 92.67 }} />
      <SignButton
        title="회원가입"
        disabled={
          !(name.length > 0 && id.length > 0 && password.length > 0 && role)
        }
        onPress={handleSignup}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 9.33,
    // fontWeight: "500",
    fontFamily: "PretendardMedium",
    color: COLORS.SUB_BLACK,
    marginBottom: 5,
    marginLeft: 10,
  },
  error: {
    fontSize: 7.33,
    fontWeight: "400",
    color: COLORS.ERROR_MESSAGE,
    marginTop: 3,
    textAlign: "center",
  },
  inputWithIcon: {
    width: 242.67,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SignupForm;
