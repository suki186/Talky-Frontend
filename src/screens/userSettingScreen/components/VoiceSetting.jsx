import React, { useState, useEffect } from "react";
import SettingBox from "../../../components/setting/SettingBox";
import { COLORS } from "../../../styles/color";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SpeedSlider from "./SpeedSlider";
import Selector from "../../../components/Selector";

const LANGUAGE_MAP = { ko: "한국어", en: "영어", zh: "중국어", ja: "일본어" };
const GENDER_MAP = { male: "남성", female: "여성" };

const VoiceSetting = ({ ttsSettings = {}, onSave }) => {
  const {
    ttsSpeed = 1.0,
    ttsLanguage = "ko",
    ttsGender = "male",
  } = ttsSettings;

  const languages = ["한국어", "영어", "중국어", "일본어"];
  const genders = ["남성", "여성"];

  const [speedValue, setSpeedValue] = useState(ttsSpeed);
  const [languageValue, setLanguageValue] = useState(LANGUAGE_MAP[ttsLanguage]);
  const [genderValue, setGenderValue] = useState(GENDER_MAP[ttsGender]);

  // ttsSettings 변경 시 state 동기화
  useEffect(() => {
    setSpeedValue(ttsSettings.ttsSpeed ?? 1.0);
    setLanguageValue(LANGUAGE_MAP[ttsSettings.ttsLanguage] ?? "한국어");
    setGenderValue(GENDER_MAP[ttsSettings.ttsGender] ?? "남성");
  }, [ttsSettings]);

  // UI → 서버 코드 변환
  const getLanguageCode = (label) =>
    Object.keys(LANGUAGE_MAP).find((key) => LANGUAGE_MAP[key] === label);
  const getGenderCode = (label) =>
    Object.keys(GENDER_MAP).find((key) => GENDER_MAP[key] === label);

  return (
    <SettingBox height={278} title="음성 설정" bgColor={COLORS.MAIN_YELLOW1}>
      {/* 속도 */}
      <SpeedSlider value={speedValue} onValueChange={setSpeedValue} />
      <View style={{ height: 8 }} />

      {/* 언어, 성별 */}
      <View style={styles.selectors}>
        <View style={styles.selectorBox}>
          <Text style={styles.labelText}>언어</Text>
          <Selector
            width="112"
            items={languages}
            selectedValue={languageValue}
            onSelect={setLanguageValue}
            variant="setting"
          />
        </View>
        <View style={styles.selectorBox}>
          <Text style={styles.labelText}>성별</Text>
          <Selector
            width="112"
            items={genders}
            selectedValue={genderValue}
            onSelect={setGenderValue}
            variant="setting"
          />
        </View>
      </View>
      <View style={{ height: 70 }} />

      {/* 저장 버튼 */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() =>
          onSave({
            ttsSpeed: speedValue,
            ttsLanguage: getLanguageCode(languageValue),
            ttsGender: getGenderCode(genderValue),
          })
        }
      >
        <Text style={styles.editText}>저장</Text>
      </TouchableOpacity>
    </SettingBox>
  );
};

const styles = StyleSheet.create({
  selectors: { width: "100%", flexDirection: "row", gap: 43 },
  selectorBox: { flexDirection: "column", gap: 3 },
  labelText: {
    fontSize: 10,
    fontFamily: "PretendardMedium",
    marginLeft: 8,
    color: COLORS.SUB_BLACK,
  },
  editButton: {
    width: 50,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.MAIN_YELLOW2,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  editText: { fontSize: 10, fontWeight: "400", color: COLORS.SUB_BLACK },
});

export default VoiceSetting;
