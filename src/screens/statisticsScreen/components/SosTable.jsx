import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../../styles/color";

const SosTable = ({ rows = [] }) => {
  const numRows = rows.length + 1; // 헤더 포함 +1

  const colWidths = [38, 39, 190, 61]; // 컬럼 너비
  const rowHeight = 120 / numRows;

  const headerRow = ["날짜", "시간", "장소 (클릭시 상세조회)", "대상"];
  const isLink = (r, c) => r === 1 && c === 2;

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
            const CellWrap = isLink(r, c) ? TouchableOpacity : View;
            const isPlaceCol = c === 2 && cell; // 장소 열

            return (
              <CellWrap
                key={`cell-${r}-${c}`}
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
                    isPlaceCol && styles.placeText, // 장소만 밑줄+볼드
                  ]}
                  numberOfLines={1}
                >
                  {cell}
                </Text>
              </CellWrap>
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
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});

export default SosTable;
