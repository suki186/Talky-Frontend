import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { COLORS } from "../../../styles/color";

const labels = [
  { label: "0.5x", value: 0.5 },
  { label: "1.0x", value: 1.0 },
  { label: "1.5x", value: 1.5 },
];

export default function SpeedSlider({ value, onValueChange }) {
  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        {labels.map((item, index) => (
          <View key={index} style={styles.labelItem}>
            <Text style={styles.labelTitle}>속도</Text>
            <Text style={styles.labelValue}>{item.label}</Text>
          </View>
        ))}
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0.5}
        maximumValue={1.5}
        step={0.25}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor={COLORS.BACKGROUND}
        thumbTintColor={COLORS.MAIN_YELLOW3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 267,
    alignItems: "center",
  },
  slider: {
    width: 267,
    height: 24,
  },
  labels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 267,
  },
  labelItem: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 2,
  },
  labelTitle: {
    fontSize: 10,
    // fontWeight: "600",
    fontFamily: "PretendardSemiBold",
    color: COLORS.SUB_BLACK,
  },
  labelValue: {
    fontSize: 8,
    // fontWeight: "500",
    fontFamily: "PretendardMedium",
    color: COLORS.SUB_BLACK,
  },
});
