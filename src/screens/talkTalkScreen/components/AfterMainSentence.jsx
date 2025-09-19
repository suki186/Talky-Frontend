import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../../styles/color";
import { useTTS } from "../../../hooks/useTTS";
import { useRecorder } from "../../../hooks/useRecorder";

export const AfterMainSentence = ({ isSelected, text, pressed, onSelect }) => {
  const { speak, speaking, stop } = useTTS();
  const { start, stop: stopRec } = useRecorder();

  const recordForSeconds = (seconds) => {
    return new Promise(async (resolve, reject) => {
      try {
        await start(); // 녹음 시작
        setTimeout(async () => {
          try {
            const uri = await stopRec(); // 녹음 종료
            resolve(uri);
          } catch (err) {
            reject(err);
          }
        }, seconds * 1000);
      } catch (err) {
        reject(err);
      }
    });
  };

  const handlePress = () => {
    if (speaking) stop();

    speak(text, {
      onDone: async () => {
        console.log("[TTS 완료]", text);

        try {
          const recordedFile = await recordForSeconds(5);
          if (onSelect) onSelect(text, recordedFile);
        } catch (err) {
          console.error("녹음 처리 오류:", err);
        }
      },
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
