import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useState } from "react";
import { BeforeLocationComponent } from "./BeforeLocationComponent";
import { COLORS } from "../../../styles/color";

export const BeforeMainBox = ({ onStart }) => {
  const [stateText, setStateText] = useState(""); // 입력 상태 저장
  const [selectedLocations, setSelectedLocations] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.BoxTitle}>
          <Text style={styles.TitleText}>현재 상황을 설명해 주세요!</Text>
        </View>
      </View>
      <TextInput
        placeholder="장소, 현재 상태를 간단하게 입력해 주세요.(선택)"
        placeholderTextColor={COLORS.PLACE_HOLDER}
        style={styles.input}
        onChangeText={setStateText} // 입력 상태 업데이트
      />
      <BeforeLocationComponent
        selected={selectedLocations}
        onSelect={(location) => {
          setSelectedLocations([location]);
        }}
      />
      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => {
          if (!selectedLocations.length) return; // 필수
          onStart({ selectedLocations, stateText });
        }}
      >
        <Text style={styles.buttonText}>시작</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 327.33,
    height: 256,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.MAIN_YELLOW2,
    borderRadius: 33.33,
    padding: 12,
    gap: 13,
  },

  titleContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  BoxTitle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.MAIN_YELLOW3,
    borderRadius: 16.67,
    paddingHorizontal: 10,
    paddingVertical: 6.67,
  },

  TitleText: {
    fontFamily: "PretendardSemiBold",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "center",
  },

  input: {
    width: 302.67,
    height: 40,
    borderRadius: 26.67,
    backgroundColor: COLORS.WHITE,
    color: "black",
    paddingLeft: 10,
    fontSize: 12,
    fontFamily: "PretendardMedium",
  },

  startBtn: {
    width: 116,
    height: 39.21,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.MAIN_YELLOW3,
    borderRadius: 27.23,
  },

  buttonText: {
    color: COLORS.BLACK,
    fontSize: 22,
    fontFamily: "PretendardSemiBold",
    lineHeight: 30,
  },
});
