// 이름, 아이디, 고유번호 등의 라벨
import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../styles/color";

const Label = ({ children }) => {
  return <Text style={styles.label}>{children}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 10,
    // fontWeight: "500",
    fontFamily: "PretendardMedium",
    color: COLORS.SUB_BLACK,
    marginBottom: 2,
    marginLeft: 8,
  },
});

export default Label;
