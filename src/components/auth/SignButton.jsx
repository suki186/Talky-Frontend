import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../../styles/color";

const SignButton = ({ onPress, disabled, title }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled ? COLORS.MAIN_YELLOW1 : COLORS.MAIN_YELLOW3,
        },
        styles.shadow,
      ]}
      activeOpacity={disabled ? 1 : 0.7}
      onPress={disabled ? null : onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: COLORS.WHITE }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 242.67,
    height: 31.11,
    borderRadius: 16.67,
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    shadowColor: COLORS.SUB_BLACK,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2.67 },
    shadowRadius: 2.67,
    elevation: 3, // 그림자
  },
  text: {
    fontSize: 14,
    // fontWeight: "600",
    fontFamily: "PretendardSemiBold",
    color: COLORS.WHITE,
  },
});

export default SignButton;
