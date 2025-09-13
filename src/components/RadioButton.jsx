import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../styles/color";

const RadioButton = ({ selected, onPress, label }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <MaterialIcons
        name={selected ? "radio-button-on" : "radio-button-off"}
        size={16}
        color={COLORS.MAIN_YELLOW3}
      />
      {label ? <Text style={styles.label}>{label}</Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 16,
  },
  label: {
    marginLeft: 4,
    fontSize: 10,
    fontFamily: "PretendardMedium",
    color: COLORS.BLACK,
  },
});

export default RadioButton;
