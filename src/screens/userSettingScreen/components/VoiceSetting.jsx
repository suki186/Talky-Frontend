import React, { useState } from "react";
import SettingBox from "../../../components/setting/SettingBox";
import { COLORS } from "../../../styles/color";
import { View, Text, StyleSheet } from "react-native";
import SpeedSlider from "./SpeedSlider";
import Selector from "../../../components/Selector";

const VoiceSetting = () => {
  const languages = ["한국어", "영어", "중국어", "일본어"]; // 언어 목록
  const genders = ["남성", "여성"]; // 성별 목록

  const [speed, setSpeed] = useState(1);
  const [language, setLanguage] = useState(languages[0]);
  const [gender, setGender] = useState(genders[0]);

  return (
    <SettingBox height={278} title="음성 설정" bgColor={COLORS.MAIN_YELLOW1}>
      {/* 속도 */}
      <SpeedSlider value={speed} onValueChange={setSpeed} />
      <View style={{ height: 8 }} />

      {/* 언어, 성별 */}
      <View style={styles.selectors}>
        <View style={styles.selectorBox}>
          <Text style={styles.labelText}>언어</Text>
          <Selector
            width="112"
            items={languages}
            selectedValue={language}
            onSelect={setLanguage}
            variant="setting"
          />
        </View>
        <View style={styles.selectorBox}>
          <Text style={styles.labelText}>성별</Text>
          <Selector
            width="112"
            items={genders}
            selectedValue={gender}
            onSelect={setGender}
            variant="setting"
          />
        </View>
      </View>
      <View style={{ height: 100 }} />
    </SettingBox>
  );
};

const styles = StyleSheet.create({
  selectors: {
    width: "100%",
    flexDirection: "row",
    gap: 43,
  },
  selectorBox: {
    flexDirection: "column",
    gap: 3,
  },
  labelText: {
    fontSize: 10,
    // fontWeight: "500",
    fontFamily: "PretendardMedium",
    marginLeft: 8,
    color: COLORS.SUB_BLACK,
  },
});

export default VoiceSetting;
