import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { COLORS } from "../../../../styles/color";
import { getDonutBgColor } from "../../../../utils/getBgColor";

const DonutGraph = ({ data }) => {
  const scale = useRef(new Animated.Value(0.5)).current; // 크기
  const opacity = useRef(new Animated.Value(0)).current; // 투명도

  useEffect(() => {
    Animated.parallel([
      // 크기 0.5 -> 1로 부드럽게 커짐
      Animated.timing(scale, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      // 투명도 0 -> 1로 부드럽게 변화
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scale, opacity]);

  // rank -> color 매핑
  const pieData = data.map((item) => ({
    value: item.value,
    color: getDonutBgColor(item.rank),
  }));

  // legend 표시
  const renderDot = (color) => <View style={styles.dot(color)} />;
  const renderLegend = () => (
    <View style={styles.legendContainer}>
      {data.map((item) => (
        <View key={item.rank} style={styles.legendItem}>
          {renderDot(getDonutBgColor(item.rank))}
          <Text style={styles.legendText}>{item.label}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {renderLegend()}
      <Animated.View
        style={[
          styles.chartContainer,
          {
            transform: [{ scale: scale }],
            opacity: opacity,
          },
        ]}
      >
        <PieChart donut data={pieData} radius={46} innerRadius={18} />
        <View style={styles.centerCircle} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 13,
  },
  chartContainer: {
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
  dot: (color) => ({
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: color,
    marginRight: 1,
  }),
  legendContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  legendText: {
    fontSize: 8,
    fontFamily: "PretendardMedium",
    color: COLORS.BLACK,
  },
});

export default DonutGraph;
