import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import SettingBox from "../../../components/setting/SettingBox";
import NameIdGroup from "../../../components/setting/NameIdGroup";
import ReadOnlyField from "../../../components/setting/ReadOnlyField";
import EditableField from "../../../components/setting/EditableField";
import SPEAK from "../../../assets/images/intro_speak.png";
import { useTTS } from "../../../hooks/useTTS";

const UserInfo = ({
  userName,
  loginId,
  connectionCode,
  introduction,
  onChangeName,
  onChangeIntro,
}) => {
  // TTS 관련 훅
  const { speaking, speak, stop } = useTTS();

  const handleIntroTTS = ({ text }) => {
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
    <SettingBox height={216} title="사용자 정보">
      {/* 이름, 아이디 */}
      <View style={styles.item}>
        <NameIdGroup name={userName} id={loginId} onComplete={onChangeName} />
      </View>
      {/* 고유번호 */}
      <View style={styles.item}>
        <ReadOnlyField
          label="고유번호 (보호자 계정에 입력해 주세요)"
          width={267}
          value={connectionCode}
        />
      </View>
      {/* 소개글 */}
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => handleIntroTTS({ text: introduction })}
        >
          <Image source={SPEAK} style={styles.speakImg} />
        </TouchableOpacity>
        <EditableField
          label="소개글"
          width={250}
          value={introduction} // 받아올 예정
          placeholder="저는 언어 표현이 어려운 상황입니다. 양해 부탁드립니다."
          onComplete={onChangeIntro}
        />
      </View>
    </SettingBox>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 8,
    marginBottom: 8,
    display: "flex",
    flexDirection: "row",
  },
  speakImg: {
    width: 18,
    height: 15,
  },
});

export default UserInfo;
