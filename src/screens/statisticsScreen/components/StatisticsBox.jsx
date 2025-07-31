// 보호자 통계 기본 박스
import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../../styles/color";

const StatisticsBox = ({
  height = 200,
  bgColor = COLORS.WHITE,
  borderColor,
  children,
}) => {
  return (
    <View
      style={[
        styles.box,
        {
          height,
          backgroundColor: bgColor,
          borderColor: borderColor,
          borderWidth: borderColor ? 2 : 0,
        },
        styles.shadow,
      ]}
    >
      {/* Content */}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 328,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  shadow: {
    shadowColor: COLORS.SUB_BLACK,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
});

export default StatisticsBox;
