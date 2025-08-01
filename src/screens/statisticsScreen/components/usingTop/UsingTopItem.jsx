import React, { useEffect, useRef } from "react";
import { Animated, View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../../styles/color";
import { getRankBgColor } from "../../../../utils/getBgColor";

const UsingTopItem = ({ rank = 1, text = "내용", delay = 0 }) => {
  const opacity = useRef(new Animated.Value(0)).current; // 초기 투명도
  const translateY = useRef(new Animated.Value(10)).current; // y축 이동

  const backgroundColor = getRankBgColor(rank); // 배경색 투명도

  // 부드러운 애니메이션
  useEffect(() => {
    // 투명도 0 -> 1로 부드럽게 변화
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      delay,
      useNativeDriver: true,
    }).start();
    // y축 10 -> 0으로 부드럽게 이동
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      delay,
      useNativeDriver: true,
    }).start();
  }, [delay, opacity, translateY]);

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor, opacity, transform: [{ translateY }] },
      ]}
    >
      {/* 왼쪽: 순위 */}
      <View style={styles.left}>
        <Text style={styles.rankText}>{rank}위</Text>
      </View>

      {/* 가운데 선 */}
      <View style={styles.divider} />

      {/* 오른쪽: 내용 */}
      <View style={styles.right}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 311,
    height: 28,
    backgroundColor: COLORS.WHITE,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  left: {
    width: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    width: 2,
    height: "100%",
    backgroundColor: COLORS.MAIN_YELLOW2,
  },
  right: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 8,
    paddingRight: 8,
  },
  rankText: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.SUB_BLACK,
  },
  text: {
    fontSize: 12,
    fontWeight: "400",
    color: COLORS.SUB_BLACK,
  },
});

export default UsingTopItem;
