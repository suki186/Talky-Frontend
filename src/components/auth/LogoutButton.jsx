import React from "react";
import { Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { COLORS } from "../../styles/color";
import { useAuth } from "../../hooks/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogoutButton = () => {
  const { setIsLoggedIn, setUserType } = useAuth();

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();

      setIsLoggedIn(false);
      setUserType(null);

      console.log("로그아웃 성공");
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.text}>로그아웃</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 85,
    height: 28,
    backgroundColor: COLORS.MAIN_YELLOW2,
    borderRadius: 33.33,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    color: "#9F9F9F",
  },
});

export default LogoutButton;
