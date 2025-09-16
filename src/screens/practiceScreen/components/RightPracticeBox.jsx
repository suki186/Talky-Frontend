import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../styles/color";
import { useState } from "react";

export const RightPracticeBox = ({ options, onPress }) => {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      {options.map((opt, idx) => (
        <TouchableOpacity
          key={idx}
          style={[
            styles.choiceContainer,
            selected === idx && styles.selectContainer,
          ]}
          onPress={() => {
            // 새로운 옵션 클릭 -> 선택 상태 변경
            if (selected !== idx) {
              setSelected(idx);
            }
            // 클릭할 때마다 TTS
            if (onPress) onPress(opt);
          }}
        >
          <Text style={styles.text}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 214,
    height: 88,
    borderRadius: 20,
    backgroundColor: COLORS.MAIN_YELLOW1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    gap: 6,
    marginBottom: 22,
  },

  choiceContainer: {
    width: 200,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.BACKGROUND,
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },

  selectContainer: {
    backgroundColor: "#FFD32199",
  },

  text: {
    fontSize: 10,
    fontFamily: "PretendardRegular",
    lineHeight: 10,
  },
});
