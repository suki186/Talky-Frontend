import React, { useEffect, useState, useRef } from "react";
import { PracticeState } from "./components/PracticeState";
import { LeftPracticeBox } from "./components/LeftPracticeBox";
import { RightPracticeBox } from "./components/RightPracticeBox";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { COLORS } from "../../styles/color";
import { Toast } from "../../components/input/Toast";
import { useToast } from "../../hooks/useToast";
import { useTTS } from "../../hooks/useTTS";

import Dialog from "../../components/dialog/Dialog";

import HOSPITALWH from "../../assets/images/practice/wh-hospital.png";
import RESTAURANTWH from "../../assets/images/practice/wh-restaurant.png";
import SCHOOLWH from "../../assets/images/practice/wh-school.png";
import MARTWH from "../../assets/images/practice/wh-mart.png";
import MOVEWH from "../../assets/images/practice/wh-move.png";
import BANKWH from "../../assets/images/practice/wh-bank.png";
import DRUGWH from "../../assets/images/practice/wh-drug.png";
import STARWH from "../../assets/images/practice/wh-star.png";
import sentencePracticeApi from "../../apis/practice/sentencePracticeApi";

const locationImages = {
  병원: HOSPITALWH,
  식당: RESTAURANTWH,
  학교: SCHOOLWH,
  마트: MARTWH,
  교통: MOVEWH,
  은행: BANKWH,
  약국: DRUGWH,
  즐겨찾기: STARWH,
};

const PracticeScreen = () => {
  const scrollViewRef = useRef(null); // 자동 하단 스크롤을 위한 ref

  const {
    isAnswered,
    setIsAnswered,
    showToast,
    toastMessage,
    toastImage,
    handleSelectAnswer,
    handleNext,
    hideToast,
    resetState,
  } = useToast();

  const { speaking, speak, stop } = useTTS({
    language: "ko",
    pitch: 1.0,
    rate: 0.8,
  });

  const [speakingId, setSpeakingId] = useState(null);

  const [practiceSentence, setPracticeSentence] = useState([]);

  const [shownQuestionIds, setShownQuestionIds] = useState([]);
  const [pendingNextId, setPendingNextId] = useState(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [pracId, setPracId] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // LeftPracticeBox, RightPracticeBox 클릭 핸들러
  const handlePractice = async (id, text) => {
    // 이미 같은 질문 말하는 중이면 멈춤
    if (speakingId === id && speaking) {
      await stop();
      setSpeakingId(null);
      return;
    }

    // 다른 질문 말하는 중이면 멈추고 새로 시작
    await stop();
    speak(text, {
      onDone: () => setSpeakingId(null),
      onError: (e) => {
        console.warn("TTS Error:", e);
        setSpeakingId(null);
      },
    });
    setSpeakingId(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (pracId !== null) {
        const data = await sentencePracticeApi(pracId);
        if (data && data.question) {
          setPracticeSentence(data.question);
          setShownQuestionIds([data.question[0].id]);
        }
      }
    };
    fetchData();
  }, [pracId]);

  // shownQuestionIds가 바뀔 때마다 하단 스크롤
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [shownQuestionIds]);

  return (
    <View style={styles.container}>
      {selectedLocation === null ? (
        <PracticeState
          onSelect={(id, label) => {
            setPracId(id);
            setSelectedLocation(label);
          }}
        />
      ) : (
        <>
          <View style={styles.practiceTop}>
            <View style={styles.locationBox}>
              <Image
                style={styles.locationImg}
                source={locationImages[selectedLocation]}
              />
              <Text style={styles.locationText}>{selectedLocation}</Text>
            </View>
            <Pressable
              style={styles.endBox}
              onPress={() => setIsDialogOpen(true)}
            >
              <Text style={styles.endText}>끝내기</Text>
            </Pressable>
          </View>

          <View style={styles.practiceChat}>
            <ScrollView ref={scrollViewRef}>
              {shownQuestionIds.map((id) => {
                const q = practiceSentence.find((item) => item.id === id);
                if (!q) return null;
                return (
                  <View key={q.id}>
                    <LeftPracticeBox
                      practiceText={q.content}
                      isSpeaking={speakingId === q.id}
                      onPress={() => handlePractice(q.id, q.content)}
                    />
                    <RightPracticeBox
                      options={q.answers.map((a) => a.answer)}
                      onPress={(answer) => {
                        handleSelectAnswer(answer);
                        handlePractice(`answer-${q.id}-${answer}`, answer);
                        const selected = q.answers.find(
                          (a) => a.answer === answer
                        );
                        if (selected) {
                          setPendingNextId(selected.nextQuestionId);
                          setIsAnswered(true);
                        }
                      }}
                    />
                  </View>
                );
              })}
            </ScrollView>
            <View>
              {isAnswered && (
                <TouchableOpacity
                  style={styles.nextBox}
                  onPress={() => {
                    if (pendingNextId === 0) {
                      setIsDialogOpen(true);
                    } else {
                      setShownQuestionIds((prev) => [...prev, pendingNextId]);
                      handleNext();
                    }
                    setPendingNextId(null);
                    setIsAnswered(false);
                  }}
                >
                  <Text style={styles.nextText}>다음</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          {showToast && (
            <>
              <View style={styles.toastOverlay} />
              <Toast
                style={styles.toast}
                textStyle={{ fontSize: 22, fontWeight: "500", lineHeight: 25 }}
                message={toastMessage}
                imageSource={toastImage}
                borderColor="#FFF3C7"
                onHide={hideToast}
              />
            </>
          )}

          <Dialog
            visible={isDialogOpen}
            title="연습 종료"
            message="대단해요!"
            subMessage="연습을 끝내고 메인으로 돌아갈까요?"
            cancelText="아니요"
            confirmText="연습 끝내기"
            onCancel={() => setIsDialogOpen(false)}
            onConfirm={() => {
              setIsDialogOpen(false);
              setSelectedLocation(null);
              resetState();
              setIsAnswered(false);
            }}
          />
        </>
      )}
    </View>
  );
};

export default PracticeScreen;

const styles = StyleSheet.create({
  container: {
    height: 780,
    backgroundColor: COLORS.BACKGROUND,
    alignItems: "center",
    paddingTop: 15,
    position: "relative",
  },

  practiceTop: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 128,
    gap: 77,
  },

  locationBox: {
    flexDirection: "row",
    paddingVertical: 7,
    paddingHorizontal: 13,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.MAIN_YELLOW3,
    borderRadius: 14,
    gap: 6,
  },

  locationImg: {
    width: 15,
    height: 19,
    resizeMode: "contain",
  },

  locationText: {
    color: COLORS.BLACK,
    fontSize: 14,
    fontFamily: "PretendardSemiBold",
    lineHeight: 16,
  },

  endBox: {
    width: 50,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.MAIN_YELLOW2,
    borderRadius: 10,
  },

  endText: {
    fontSize: 10,
    fontFamily: "PretendardRegular",
    lineHeight: 15,
  },

  practiceChat: {
    width: 328,
    height: 509,
    borderColor: COLORS.MAIN_YELLOW1,
    borderRadius: 14,
    borderWidth: 2,
    marginTop: 15,
    paddingVertical: 16,
    paddingHorizontal: 13,
    gap: 22,
  },

  nextBox: {
    width: 150,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: COLORS.MAIN_YELLOW2,
    borderRadius: 14,
  },

  nextText: {
    fontSize: 14,
    lineHeight: 20,
  },

  toastOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(139, 139, 139, 0.30)",
    dropFill: "blur(1.5px)",
    zIndex: 1,
  },

  toast: {
    position: "absolute",
    bottom: 450,
    alignSelf: "center",
    zIndex: 2,
  },
});
