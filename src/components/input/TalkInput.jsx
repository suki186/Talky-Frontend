import { StyleSheet, TextInput, View } from "react-native";
import { InputLeft } from "./InputLeft";
import { InputRight } from "./InputRight";
import { Toast } from "./Toast";
import { useInput } from "../../hooks/useInput";
import { COLORS } from "../../styles/color";
import useFavorite from "../../hooks/useFavorite";
import { useTTS } from "../../hooks/useTTS";

export const TalkInput = () => {
  // input 관련 훅
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

  // 즐겨찾기 관련 훅
  const { favLoading, favSelected, canFavorite, handleFavorite } = useFavorite({
    text,
    setShowToast,
  });

  // TTS 관련 훅
  const { speaking, speak, stop } = useTTS();

  // handleRightPress + TTS
  const handleRightTTS = () => {
    try {
      handleRightPress();
    } catch (e) {
      console.warn("handleRightPress Error:", e);
    }

    // 텍스트 없으면 return
    if (!text || text.trim().length === 0) return;

    // 이미 말하고 있으면 중복 호출 방지
    if (speaking) {
      stop()
        .then(() => {
          speak(text, {
            onError: (e) => console.log("TTS 에러:", e),
            onDone: () => console.log("TTS 완료"),
          });
        })
        .catch(() => {
          speak(text, {
            onError: (e) => console.log("TTS 에러:", e),
            onDone: () => console.log("TTS 완료"),
          });
        });
      return;
    }

    // TTS 시작
    speak(text, {
      onError: (e) => console.log("TTS 에러:", e),
      onDone: () => console.log("TTS 완료"),
    });
  };

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
      <InputRight status={status} onPress={handleRightTTS} />
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
    fontFamily: "PretendardRegular",
  },
});
