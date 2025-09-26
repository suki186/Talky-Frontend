import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../../styles/color";

const SosTable = ({ rows = [], onPressPlace }) => {
  const colWidths = [38, 39, 190, 61];
  const minRows = 5; // 항상 보여줄 최소 행 개수
  const totalRows = Math.max(rows.length, minRows);
  const rowHeight = 120 / (totalRows + 1); // +1은 헤더 포함

  const headerRow = ["날짜", "시간", "장소 (클릭시 상세조회)", "대상"];

  // 데이터가 부족하면 빈 배열 채우기
  const displayRows = [...rows];
  while (displayRows.length < minRows) {
    displayRows.push(["", "", "", ""]);
  }

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
            <Text style={styles.text} numberOfLines={1}>
              {cell}
            </Text>
          </View>
        ))}
      </View>

      {/* 본문 */}
      {displayRows.map((row, r) => (
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
                style={[
                  styles.cell,
                  {
                    width: colWidths[c],
                    borderRightColor: COLORS.BACKGROUND,
                    borderBottomColor: COLORS.BACKGROUND,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.text,
                    isPlaceCol && hasText && styles.placeText,
                    !hasText && isPlaceCol
                      ? { color: COLORS.SUB_BLACK, fontSize: 12 }
                      : {},
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
    fontFamily: "PretendardRegular",
    fontSize: 8,
    textAlign: "center",
  },
  placeText: {
    fontFamily: "PretendardMedium",
    textDecorationLine: "underline",
  },
});

export default SosTable;
