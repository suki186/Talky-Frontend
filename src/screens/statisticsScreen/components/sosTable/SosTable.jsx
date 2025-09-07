import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../../styles/color";

const SosTable = ({ rows = [], onPressPlace }) => {
  const numRows = rows.length + 1; // 헤더 포함 +1

  const colWidths = [38, 39, 190, 61]; // 컬럼 너비
  const rowHeight = 120 / numRows;

  const headerRow = ["날짜", "시간", "장소 (클릭시 상세조회)", "대상"];

  return (
    <View style={styles.table}>
      {/* 헤더 */}
      <View
        style={[
          styles.row,
          { height: rowHeight, backgroundColor: COLORS.MAIN_YELLOW2 },
        ]}
      >
        {headerRow.map((cell, c) => (
          <View
            key={`header-${c}`}
            style={[
              styles.cell,
              {
                width: colWidths[c],
                borderRightColor: COLORS.BACKGROUND,
                borderBottomColor: COLORS.BACKGROUND,
              },
            ]}
          >
            <Text style={[styles.text]} numberOfLines={1}>
              {cell}
            </Text>
          </View>
        ))}
      </View>

      {/* 본문 */}
      {rows.map((row, r) => (
        <View
          key={`row-${r}`}
          style={[
            styles.row,
            { height: rowHeight, backgroundColor: COLORS.MAIN_YELLOW1 },
          ]}
        >
          {row.map((cell, c) => {
            const isPlaceCol = c === 2; // 장소 컬럼
            const hasText = typeof cell === "string" && cell.trim().length > 0;

            return (
              <View
                key={`cell-${r}-${c}`}
                onPress={
                  isPlaceCol && onPressPlace
                    ? () => onPressPlace(row)
                    : undefined
                }
                style={[
                  styles.cell,
                  {
                    width: colWidths[c],
                    borderRightColor: COLORS.BACKGROUND,
                    borderBottomColor: COLORS.BACKGROUND,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.text,
                    isPlaceCol && hasText && styles.placeText,
                  ]}
                  numberOfLines={1}
                  onPress={
                    isPlaceCol && hasText && onPressPlace
                      ? () => onPressPlace(row)
                      : undefined
                  }
                >
                  {cell}
                </Text>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    width: 328,
    height: 120,
    borderRadius: 5,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  text: {
    color: COLORS.SUB_BLACK,
    fontWeight: "400",
    fontSize: 8,
  },
  placeText: {
    // fontWeight: "500",
    fontFamily: "PretendardMedium",
    textDecorationLine: "underline",
  },
});

export default SosTable;
