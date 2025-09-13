// 수정 불가능한 필드
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SettingLabel from "./SettingLabel";
import { COLORS } from "../../styles/color";

const ReadOnlyField = ({ label, value, width = 118 }) => {
  return (
    <View style={{ width }}>
      <SettingLabel>{label}</SettingLabel>
      <View style={styles.field}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    height: 25,
    borderRadius: 14,
    backgroundColor: COLORS.BACKGROUND,
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  value: {
    fontSize: 12,
    fontFamily: "PretendardRegular",
    color: COLORS.BLACK,
  },
});

export default ReadOnlyField;
