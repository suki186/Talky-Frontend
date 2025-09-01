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

const TalkTalkScreen = () => {
  const [started, setStarted] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [stateText, setStateText] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.current}>
          <CurrentTime />
          <CurrentLocation />
        </View>

        <TalkInput />

        {!started ? (
          <BeforeMainBox
            onStart={(location, text) => {
              if (!location || !text.trim()) return;
              setSelectedLocation(location);
              setStateText(text);
              setStarted(true);
            }}
          />
        ) : (
          <>
            <AfterLocationBox location={selectedLocation} mystate={stateText} />
            <AfterMainBox
              selectedLocation={selectedLocation}
              stateText={stateText}
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
