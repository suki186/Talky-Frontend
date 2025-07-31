import React from "react";
import { Text, StyleSheet } from "react-native";
import LineGraph from "./LineGraph";
import StatisticsBox from "../StatisticsBox";

const UsingCount = ({ data }) => {
  return (
    <StatisticsBox>
      <Text style={styles.countTitle}>발화 기능 사용 횟수</Text>
      <LineGraph data={data} />
    </StatisticsBox>
  );
};

const styles = StyleSheet.create({
  countTitle: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default UsingCount;
