import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import MapBox from "./components/MapBox";
import Selector from "../../components/Selector";
import { COLORS } from "../../styles/color";

const MapScreen = () => {
  const distances = [
    "전체",
    "1km 이내",
    "1km ~ 5km",
    "5km ~ 7km",
    "7km ~ 10km",
    "10km ~ 20km"
  ]; // 거리 구분
  const [distance, setDistance] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.selectorContainer}>
        <Selector
          width="112"
          items={distances}
          selectedValue={distance}
          onSelect={setDistance}
          placeholder="거리 선택"
        />
      </View>
      <Text style={styles.description}>
        전국 언어치료센터의 위치를 한 눈에 확인할 수 있습니다.
      </Text>
      <MapBox selectedRegion = { distance } />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    padding: 16,
    gap: 16,
    alignItems: "center",
  },
  selectorContainer: {
    alignSelf: "flex-end",
  },
  description: {
    fontSize: 10,
    fontFamily: "PretendardRegular",
    color: COLORS.BLACK,
    textAlign: "center",
  },
});

export default MapScreen;
