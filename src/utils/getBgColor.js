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
