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

const TalkTalkScreen = () => {
  const [started, setStarted] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [stateText, setStateText] = useState("");
  const [recommendedSentences, setRecommendedSentences] = useState([]);

  const handleStart = async ({ selectedLocations, stateText }) => {
    const formData = new FormData();

    // 파일 없으면 null
    formData.append("file", null);

    // metadata는 JSON 문자열
    formData.append(
      "metadata",
      JSON.stringify({
        keywords: selectedLocations,
        context: stateText || "",
        choose: null,
      })
    );

    const data = await createContextApi({
      file: null,
      keywords: selectedLocations,
      context: stateText,
      choose: null,
    });

    if (data) {
      setRecommendedSentences(data.recommended_sentences || []);
      setSelectedLocations(selectedLocations);
      setStateText(stateText);
      setStarted(true);
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

        {!started ? (
          <BeforeMainBox onStart={handleStart} />
        ) : (
          <>
            <AfterLocationBox
              location={selectedLocations}
              mystate={stateText}
            />
            <AfterMainBox recommendedSentences={recommendedSentences} />
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
    height: 780,
    paddingTop: 40,
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
