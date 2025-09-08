import { StyleSheet, TextInput, View } from "react-native";
import { InputLeft } from "./InputLeft";
import { InputRight } from "./InputRight";
import { useCallback, useEffect, useState } from "react";
import { Toast } from "./Toast";
import { useInput } from "../../hooks/useInput";
import { COLORS } from "../../styles/color";
import createFavoriteApi from "../../apis/favorite/createFavoriteApi";

export const TalkInput = () => {
  const {
    text,
    status,
    rightPressed,
    showToast,
    setShowToast,
    getPlaceholderColor,
    getInputBorderColor,
    onFocus,
    onBlur,
    onChangeText,
    onSubmit,
    handleRightPress,
  } = useInput();

  const [favLoading, setFavLoading] = useState(false);
  const [favSelected, setFavSelected] = useState(false);

  const canFavorite = !!text?.trim(); // 빈 입력 방지

  // 텍스트 변경 시 별 상태
  useEffect(() => {
    setFavSelected(false);
  }, [text]);

  // 즐겨찾기 등록
  const handleFavorite = useCallback(async () => {
    if (!canFavorite || favLoading) return; // 비어있거나 처리중이면 무시
    try {
      setFavLoading(true);
      const res = await createFavoriteApi(text.trim());
      if (res) {
        // 성공하면 노란별, 토스트메세지 보이기
        setFavSelected(true);
        setShowToast(true);
      } else {
        console.warn("즐겨찾기 등록 실패");
      }
    } catch (e) {
      console.error("handleFavorite Error:", e);
    } finally {
      setFavLoading(false);
    }
  }, [canFavorite, favLoading, text, setShowToast]);

  return (
    <View
      style={[
        styles.container,
        status === "focused" && styles.focusContainer,
        status === "typing" && styles.typingContainer,
        status === "submitted" && styles.submitContainer,
        rightPressed && styles.rightPressedContainer,
      ]}
    >
      <InputLeft
        selected={favSelected}
        onFavoriteToggle={handleFavorite}
        disabled={!canFavorite || favLoading}
      />
      <TextInput
        placeholder="표현하고 싶은 문장을 적어 봐!"
        placeholderTextColor={getPlaceholderColor()}
        style={[
          styles.input,
          { borderColor: getInputBorderColor() },
          rightPressed && styles.inputRightPressed,
        ]}
        value={text}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        returnKeyType="done"
        blurOnSubmit={false}
      />
      <InputRight status={status} onPress={handleRightPress} />
      {showToast && (
        <Toast message="즐겨찾기 완료!" onHide={() => setShowToast(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 334.667,
    height: 54,
    borderWidth: 1.667,
    borderColor: COLORS.MAIN_YELLOW3,
    borderRadius: 20,
    gap: 5,
    backgroundColor: "transparent",
  },

  focusContainer: {
    backgroundColor: "#FFEC9F33",
    borderColor: "transparent",
    opacity: 1,
  },

  typingContainer: {
    backgroundColor: COLORS.MAIN_YELLOW2,
  },

  submitContainer: {
    backgroundColor: "#FFE890",
  },

  rightPressedContainer: {
    backgroundColor: COLORS.MAIN_YELLOW3,
  },

  inputRightPressed: {
    backgroundColor: COLORS.WHITE,
  },

  input: {
    width: 243.333,
    height: 40.668,
    paddingLeft: 12,
    borderRadius: 33.333,
    borderWidth: 1.668,
    backgroundColor: "transparent",
  },
});
