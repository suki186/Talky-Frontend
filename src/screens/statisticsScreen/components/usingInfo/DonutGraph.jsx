import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";
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
  }, []);

  const pieData = data.map((item) => ({
    value: item.value,
    color: getDonutBgColor(item.rank),
  }));

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ scale: scale }],
          opacity: opacity,
        },
      ]}
    >
      <PieChart donut data={pieData} radius={46} innerRadius={18} />
      <View style={styles.centerCircle} />
    </Animated.View>
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
