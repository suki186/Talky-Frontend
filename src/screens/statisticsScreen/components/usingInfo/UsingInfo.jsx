import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StatisticsBox from "../StatisticsBox";
import { COLORS } from "../../../../styles/color";
import DonutGraph from "./DonutGraph";

const UsingInfo = ({ data1, data2 }) => {
  return (
    <StatisticsBox
      title="시간 · 장소별 사용 분포"
      height="181"
      bgColor={COLORS.BACKGROUND}
      borderColor={COLORS.MAIN_YELLOW1}
    >
      <View style={styles.container}>
        {data1.length > 0 || data2.length > 0 ? (
          <>
            <DonutGraph data={data1} />
            <DonutGraph data={data2} />
          </>
        ) : (
          <Text>아직 사용 내역이 없습니다!</Text>
        )}
      </View>
    </StatisticsBox>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 58,
    marginTop: 10,
  },
});

export default UsingInfo;
