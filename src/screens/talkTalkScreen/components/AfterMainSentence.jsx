import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../../styles/color";
import { useTTS } from "../../../hooks/useTTS";

export const AfterMainSentence = ({ onPress, isSelected, text, pressed }) => {
  const { speaking, speak, stop } = useTTS({
    language: "ko",
    pitch: 1.0,
    rate: 0.8,
  });

  // TTS 실행 함수
  const handlePress = async () => {
    if (onPress) onPress();

    // 이미 말하고 있으면 -> 다시 재생
    if (speaking) await stop();

    // TTS 실행
    speak(text, {
      onDone: () => console.log("TTS 완료"),
      onError: (e) => console.warn("TTS 에러:", e),
    });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={1}
      style={[
        styles.button,
        {
          opacity:
            pressed !== undefined ? (pressed ? 1 : 0.5) : isSelected ? 1 : 0.5,
        },
      ]}
    >
      <Text style={styles.recomText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 302.67,
    height: 40,
    backgroundColor: COLORS.WHITE,
    borderRadius: 26.67,
    paddingHorizontal: 13,
    paddingVertical: 10,
    justifyContent: "center",
  },

  recomText: {
    fontSize: 12,
    fontFamily: "PretendardMedium",
  },
});
