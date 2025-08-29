import React, { useState } from "react";
import { PracticeState } from "./components/PracticeState";
import { LeftPracticeBox } from "./components/LeftPracticeBox";
import { RightPracticeBox } from "./components/RightPracticeBox";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { COLORS } from "../../styles/color";
import { Toast } from "../../components/input/Toast";

// import RESTAURANT from "../../assets/images/practice/restaurant.png"
import REPEAT from "../../assets/images/practice/repeat.png"
import REPEATGOOD from "../../assets/images/practice/repeatGood.png"

const PracticeScreen = () => {
  const [practiceSentence, setPracticeSentence] = useState([
    {
      left: "몇 명이세요?",
      rightOptions: ["한 명이에요", "두 명이에요", "잠시만요"]
    },
    {
      left: "드시고 가시나요?",
      rightOptions: ["네", "아니요", "잠시만요"]
    },
    {
      left: "주문하시겠어요?",
      rightOptions: ["네 할게요", "조금만 더 볼게요", "추천 메뉴 있나요?"]
    }
  ])

  const [currentSentence, setCurrentSentence] = useState(0);

  const [isAnswered, setIsAnswered] = useState(false);

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastImage, setToastImage] = useState(null);

  const handleSpeakToggle = () => {
    setIsSpeaking(prev => {
      const next = !prev;
      if (next) {
        setToastMessage("따라 말해 보세요!");
        setToastImage(REPEAT);
        setShowToast(true);
      }
      return next;
    });
  };

  const handleSelect = () => {
    setToastMessage("대단해요!");
    setToastImage(REPEATGOOD);
    setShowToast(true);
    setIsAnswered(true);
  };

  return (
    <>
      {/* <PracticeState /> */}

      <View style = { styles.container }>
        <View style = { styles.practiceTop }>
          <View style = { styles.locationBox }>
            <Image 
              style = { styles.locationImg }
            />
            <Text style = { styles.locationText }>식당</Text>
          </View>
          <View style = { styles.endBox }>
            <Text style = { styles.endText }>끝내기</Text>
          </View>          
        </View>


        <View style =  { styles.practiceChat }>
          <ScrollView>
            { practiceSentence.slice(0, currentSentence + 1).map((d, idx) => (
              <View key = { idx }>
                <LeftPracticeBox 
                  practiceText = { d.left }
                  isSpeaking = { isSpeaking }
                  onPress = { handleSpeakToggle }
                />
                <RightPracticeBox 
                  options = { d.rightOptions }
                  onPress = { (opt) => handleSelect(opt) }
                />  
            </View>
          ))}
          </ScrollView>

          <View>
            { isAnswered && currentSentence < practiceSentence.length - 1 && (
            <TouchableOpacity 
              style = { styles.nextBox }
              onPress = { () => {
                setCurrentSentence(prev => prev + 1);
                setIsAnswered(false); 
              }}
            >
              <Text style = { styles.nextText }>다음</Text>
            </TouchableOpacity>   
            )}

          </View>
        </View>

        { showToast && (
          <Toast
            style = { styles.toast }
            textStyle = {{ fontSize: 22, fontWeight: "500", lineHeight: 25 }}
            message = { toastMessage }
            imageSource = { toastImage }
            borderColor = "#FFF3C7"
            onHide = { () => setShowToast(false) }
          />
        )}

      </View>    
    </>

    
  );
};

export default PracticeScreen;

const styles = StyleSheet.create({
  container: {
    height: 780,
    backgroundColor: COLORS.BACKGROUND,
    alignItems: "center",
    paddingTop: 15,
    position: "relative"
  },

  practiceTop: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 128,
    gap: 77
  },

  locationBox: {
    flexDirection: "row",
    paddingVertical: 7,
    paddingHorizontal: 13,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.MAIN_YELLOW3,
    borderRadius: 14,
    gap: 6
  },

  locationImg: {
    width: 15,
    height: 19,
    resizeMode: "contain"
  },

  locationText: {
    color: COLORS.BLACK,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 16
  },

  endBox: {
    width: 50,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.MAIN_YELLOW2,
    borderRadius: 10
  },

  endText: {
    fontSize: 10,
    fontWeight: 400,
    lineHeight: 15
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
    gap: 22
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
    lineHeight: 20
  },

  toast: {
    position: "absolute",
    bottom: 450,
    alignSelf: "center"
  }
})