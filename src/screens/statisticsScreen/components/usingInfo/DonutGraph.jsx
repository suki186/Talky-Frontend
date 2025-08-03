import React from "react";
import { View, StyleSheet } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { COLORS } from "../../../../styles/color";

const rankColors = [
  "#FFD321FF", // 1위
  "#FFD321A6", // 2위
  "#FFD32159", // 3위
  "#FFD32126", // 4위
];

const DonutGraph = ({ data }) => {
  const pieData = data.map((item) => ({
    value: item.value,
    color: rankColors[item.rank - 1] ?? "#FFD32110",
  }));

  return (
    <View style={styles.container}>
      <PieChart donut data={pieData} radius={46} innerRadius={18} />
      <View style={styles.centerCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 92,
    height: 92,
    justifyContent: "center",
    alignItems: "center",
  },
  centerCircle: {
    position: "absolute",
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: COLORS.BACKGROUND,
  },
});

export default DonutGraph;
