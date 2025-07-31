import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../../../../styles/color";
import LineGraph from "./LineGraph";

const UsingCount = ({ data }) => {
  return (
    <View style={styles.countContainer}>
      <Text style={styles.countTitle}>발화 기능 사용 횟수</Text>
      <LineGraph data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  countContainer: {
    width: 328,
    height: 200,
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    alignItems: "center",
    padding: 16,
    gap: 20,
  },
  countTitle: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default UsingCount;
