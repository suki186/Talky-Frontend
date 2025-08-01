import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../../styles/color";
import { getRankBgColor } from "../../../../utils/getBgColor";

const UsingTopItem = ({ rank = 1, text = "내용" }) => {
  const backgroundColor = getRankBgColor(rank); // 배경색 투명도

  return (
    <View style={[styles.container, { backgroundColor }]}>
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
    </View>
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
