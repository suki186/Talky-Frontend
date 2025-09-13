// 일반, 보호자 설정 기본박스
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../styles/color";

const SettingBox = ({
  height = 200,
  bgColor = COLORS.MAIN_YELLOW2,
  titleBgColor = COLORS.MAIN_YELLOW3,
  title = "",
  children,
}) => {
  return (
    <View style={[styles.box, { height, backgroundColor: bgColor }]}>
      {/* Title */}
      <View style={[styles.titleBox, { backgroundColor: titleBgColor }]}>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 327,
    borderRadius: 33.33,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  titleBox: {
    position: "absolute",
    top: 13,
    left: 114,
    width: 100,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 12,
    fontFamily: "PretendardMedium",
    color: COLORS.BLACK,
  },
  content: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SettingBox;
