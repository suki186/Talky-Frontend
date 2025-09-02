import { COLORS } from "../styles/color";

// Selector의 dropdown 배경색
export const getDropdownBgColor = (variant) => {
  if (variant === "setting") {
    return COLORS.MAIN_YELLOW2;
  }
  return COLORS.MAIN_YELLOW1; // 기본값
};

// UsingTopItem의 배경색 투명도
export const getRankBgColor = (rank) => {
  const opacityMap = {
    1: 1,
    2: 0.9,
    3: 0.8,
    4: 0.7,
    5: 0.6,
  };
  const opacity = opacityMap[rank] ?? 0.5;
  return `rgba(255,255,255,${opacity})`;
};

// DonutGraph의 항목별 배경색
export const getDonutBgColor = (rank) => {
  const rankColors = [
    "#FFD321FF", // 1위
    "#FFD321A6", // 2위
    "#FFD32159", // 3위
    "#FFD32126", // 4위
    "#FFD32110", // 5위
  ];

  if (typeof rank !== "number" || rank < 1 || rank > 5) {
    return "#FFD32110"; // 기본
  }

  return rankColors[rank - 1];
};
