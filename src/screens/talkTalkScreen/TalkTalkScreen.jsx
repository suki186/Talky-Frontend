import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import CurrentTime from "./components/CurrentTime";
import CurrentLocation from "./components/CurrentLocation";
import { TalkInput } from "../../components/input/TalkInput";
import { AfterMainBox } from "./components/AfterMainBox";
import { StarMenuBox } from "./components/StarMenuBox";
import { AfterLocationBox } from "./components/AfterLocationBox";
import { BeforeMainBox } from "./components/BeforeMainBox";
import { COLORS } from "../../styles/color";
import createContextApi from "../../apis/createContextApi";
import LoadingSpinner from "../../components/LoadingSpinner";

const TalkTalkScreen = () => {
  const [started, setStarted] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [stateText, setStateText] = useState("");
  const [recommendedSentences, setRecommendedSentences] = useState([]);
  const [lastRecordedFile, setLastRecordedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // 처음 시작: 키워드, 장소 -> 추천문장
  const handleStart = async ({ selectedLocations, stateText }) => {
    setLoading(true);
    const data = await createContextApi({
      file: null, // 아직 녹음 파일 없음
      keywords: selectedLocations,
      context: stateText,
      choose: null,
    });
    setLoading(false);

    if (data) {
      setRecommendedSentences(data.recommended_sentences || []);
      setSelectedLocations(selectedLocations);
      setStateText(stateText);
      setStarted(true);
    }
  };

  // 문장 선택 후 TTS -> 녹음 -> 추천문장
  const handleNext = async ({ ttsSentence, recordedFile }) => {
    setLoading(true);
    setLastRecordedFile(recordedFile);

    const fileObj = {
      uri: recordedFile,
      type: "audio/m4a",
      name: "recording.m4a",
    };

    const data = await createContextApi({
      file: fileObj, // 녹음 파일
      keywords: selectedLocations,
      context: stateText,
      choose: ttsSentence, // 선택한 문장
    });
    setLoading(false);

    console.log("[TalkTalkScreen] handleNext 결과", data);
    if (data) {
      setRecommendedSentences(data.recommended_sentences || []);
      console.log("[TalkTalkScreen] 추천문장 상태 업데이트 완료");
    }
  };

  // 문장 새로고침
  const handleReset = async () => {
    // file이 없으면 null, 있으면 객체 생성
    setLoading(true);
    const fileObj = lastRecordedFile
      ? {
          uri: lastRecordedFile,
          type: "audio/m4a",
          name: "recording.m4a",
        }
      : null;

    const data = await createContextApi({
      file: fileObj,
      keywords: selectedLocations,
      context: stateText,
      choose: null,
    });
    setLoading(false);

    console.log("[TalkTalkScreen] handleReset 결과", data);
    if (data) {
      setRecommendedSentences(data.recommended_sentences || []);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.current}>
          <CurrentTime />
          <CurrentLocation />
        </View>

        <TalkInput />

        {loading ? (
          <LoadingSpinner />
        ) : !started ? (
          <BeforeMainBox onStart={handleStart} />
        ) : (
          <>
            <AfterLocationBox
              location={selectedLocations}
              mystate={stateText}
            />
            <AfterMainBox
              recommendedSentences={recommendedSentences}
              onSelectSentence={handleNext}
              onReset={handleReset}
            />
          </>
        )}

        <StarMenuBox />
      </View>
    </ScrollView>
  );
};

export default TalkTalkScreen;

const styles = StyleSheet.create({
  container: {
    height: 620,
    paddingTop: 20,
    backgroundColor: COLORS.BACKGROUND,
    alignItems: "center",
    gap: 18,
  },

  current: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 21,
  },
});
