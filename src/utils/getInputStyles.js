import { COLORS } from "../styles/color";

// Input창과 Selector 배경색, 아이콘 색상
export const getInputStyles = (
  isFocused,
  text,
  hasError,
  variant = "default"
) => {
  // 공통 기본값
  const baseStyle = {
    borderWidth: 0,
    borderColor: "transparent",
  };

  switch (variant) {
    // 기본 스타일
    case "default":
      if (hasError) {
        // 유효성 에러
        return {
          ...baseStyle,
          backgroundColor: COLORS.ERROR_NORMAL,
          iconColor: COLORS.WHITE,
        };
      }
      if (isFocused) {
        // 입력 중
        return {
          ...baseStyle,
          backgroundColor: "#FFD32180",
          iconColor: COLORS.MAIN_YELLOW3,
        };
      }
      if (text.length > 0) {
        // 입력 완료
        return {
          ...baseStyle,
          backgroundColor: COLORS.MAIN_YELLOW3,
          iconColor: COLORS.WHITE,
        };
      }
      // 입력 전
      return {
        ...baseStyle,
        backgroundColor: COLORS.MAIN_YELLOW1,
        iconColor: COLORS.MAIN_YELLOW3,
      };

    // 설정(언어, 성별) 스타일
    case "setting":
      return {
        ...baseStyle,
        backgroundColor: COLORS.BACKGROUND,
        iconColor: isFocused ? COLORS.MAIN_YELLOW1 : COLORS.MAIN_YELLOW3,
      };

    // 보호자 통계의 연결계정 목록 스타일
    case "user":
      const borderStyle = isFocused
        ? { borderWidth: 0, borderColor: "transparent" }
        : { borderWidth: 1, borderColor: COLORS.MAIN_YELLOW3 };

      return {
        backgroundColor: isFocused ? COLORS.MAIN_YELLOW2 : COLORS.BACKGROUND,
        iconColor: isFocused ? COLORS.BACKGROUND : COLORS.MAIN_YELLOW3,
        ...borderStyle,
      };

    // fallback
    default:
      return {
        ...baseStyle,
        backgroundColor: COLORS.MAIN_YELLOW3,
        iconColor: COLORS.WHITE,
      };
  }
};
