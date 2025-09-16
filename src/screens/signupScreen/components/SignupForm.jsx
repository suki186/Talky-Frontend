import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SignInput from "../../../components/auth/SignInput";
import SignButton from "../../../components/auth/SignButton";
import ErrorIcon from "../../../components/auth/ErrorIcon";
import { COLORS } from "../../../styles/color";
import { validateSignup } from "../../../utils/validation";
import Selector from "../../../components/Selector";
import signupUserApi from "../../../apis/auth/signupUserApi";
import { useNavigation } from "@react-navigation/native";
import idCheckApi from "../../../apis/auth/idCheckApi";

const SignupForm = () => {
  const navigation = useNavigation();
  const roles = ["일반", "보호자"]; // 역할 목록

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(null);
  const [isIdChecked, setIsIdChecked] = useState(false);

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
  const handleSignup = async () => {
    // 회원가입 로직 구현 예정
    if (validate()) {
      const roleMapping = { 일반: "normal", 보호자: "guardian" };
      const mappedRole = roleMapping[role];

      const userId = await signupUserApi(name, id, password, mappedRole);

      if (userId) {
        console.log("회원가입 ", { name, id, password, mappedRole });
        navigation.goBack();
      } else {
        console.error("회원가입 실패");
      }
    }
  };

  const handleIdCheck = async () => {
    if (!id) {
      setErrors((prev) => ({ ...prev, id: "아이디를 입력해 주세요." }));
      setIsIdChecked(false);
      return;
    }

    try {
      const response = await idCheckApi(id);

      if (response === true) {
        console.log("사용 가능한 아이디");
        setErrors((prev) => ({ ...prev, id: "" }));
        setIsIdChecked(true);
        return true;
      } else {
        console.error("사용 불가능한 아이디");
        setErrors((prev) => ({ ...prev, id: "이미 사용 중인 아이디입니다." }));
        setIsIdChecked(false);
        return false;
      }
    } catch (error) {
      console.error("아이디 중복 확인 실패" + error);
      setIsIdChecked(false);
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
          onCheckPress={handleIdCheck}
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
          !(
            name.length > 0 &&
            id.length > 0 &&
            password.length > 0 &&
            role &&
            isIdChecked
          )
        }
        onPress={handleSignup}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 9.33,
    fontFamily: "PretendardMedium",
    color: COLORS.SUB_BLACK,
    marginBottom: 5,
    marginLeft: 10,
  },
  error: {
    fontSize: 7.33,
    fontFamily: "PretendardRegular",
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
