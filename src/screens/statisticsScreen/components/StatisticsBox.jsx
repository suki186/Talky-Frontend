// 보호자 통계 기본 박스
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../styles/color";

const StatisticsBox = ({
  title,
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
      {/* title */}
      <Text style={styles.title}>{title}</Text>
      {/* Content */}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 328,
    borderRadius: 12,
    marginTop: 10,
    padding: 16,
  },
  title: {
    fontSize: 12,
    fontFamily: "PretendardSemiBold",
    alignSelf: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
