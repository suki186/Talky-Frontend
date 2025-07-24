import React from "react";
import { PracticeState } from "./components/PracticeState";
import { LeftPracticeBox } from "./components/LeftPracticeBox";
import { RightPracticeBox } from "./components/RightPracticeBox";
import { Image, StyleSheet, View, Text } from "react-native";
import { COLORS } from "../../styles/color";

// import RESTAURANT from "../../assets/images/practice/restaurant.png"

const PracticeScreen = () => {
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
          <LeftPracticeBox />
          <RightPracticeBox />          
        </View>
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
    paddingTop: 15
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
  }
})