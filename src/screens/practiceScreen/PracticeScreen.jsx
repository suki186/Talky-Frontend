import React, { useState } from "react";
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

import Dialog from "../../components/dialog/Dialog";

import HOSPITALWH from "../../assets/images/practice/wh-hospital.png";
import RESTAURANTWH from "../../assets/images/practice/wh-restaurant.png";
import SCHOOLWH from "../../assets/images/practice/wh-school.png";
import MARTWH from "../../assets/images/practice/wh-mart.png";
import MOVEWH from "../../assets/images/practice/wh-move.png";
import BANKWH from "../../assets/images/practice/wh-bank.png";
import DRUGWH from "../../assets/images/practice/wh-drug.png";
import STARWH from "../../assets/images/practice/wh-star.png";

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
  const {
    isSpeaking,
    setIsSpeaking,
    isAnswered,
    setIsAnswered,
    showToast,
    toastMessage,
    toastImage,
    handleSpeakToggle,
    handleSelectAnswer,
    handleNext,
    hideToast,
    resetState,
  } = useToast();

  const [practiceSentence, setPracticeSentence] = useState([
    {
      left: "몇 명이세요?",
      rightOptions: ["한 명이에요", "두 명이에요", "잠시만요"],
    },
    {
      left: "드시고 가시나요?",
      rightOptions: ["네", "아니요", "잠시만요"],
    },
    {
      left: "주문하시겠어요?",
      rightOptions: ["네 할게요", "조금만 더 볼게요", "추천 메뉴 있나요?"],
    },
  ]);

  const [currentSentence, setCurrentSentence] = useState(0);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <View style={styles.container}>
      {selectedLocation === null ? (
        <PracticeState onSelect={setSelectedLocation} />
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
            <ScrollView>
              {practiceSentence.slice(0, currentSentence + 1).map((d, idx) => (
                <View key={idx}>
                  <LeftPracticeBox
                    practiceText={d.left}
                    isSpeaking={isSpeaking}
                    onPress={handleSpeakToggle}
                  />
                  <RightPracticeBox
                    options={d.rightOptions}
                    onPress={handleSelectAnswer}
                  />
                </View>
              ))}
            </ScrollView>

            <View>
              {isAnswered && currentSentence < practiceSentence.length - 1 && (
                <TouchableOpacity
                  style={styles.nextBox}
                  onPress={() => {
                    setCurrentSentence((prev) => prev + 1);
                    handleNext();
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
              setCurrentSentence(0);
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
    // fontWeight: 600,
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
    fontWeight: 400,
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
