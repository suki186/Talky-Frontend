import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import MapBox from "./components/MapBox";
import Selector from "../../components/Selector";
import { COLORS } from "../../styles/color";

const MapScreen = () => {
  const regions = [
    "전체",
    "서울특별시",
    "인천광역시",
    "부산광역시",
    "광주광역시",
    "대구광역시",
    "대전광역시",
    "울산광역시",
    "경기도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "강원도",
    "제주특별자치도",
  ]; // 지역 목록
  const [region, setRegion] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.selectorContainer}>
        <Selector
          width="112"
          items={regions}
          selectedValue={region}
          onSelect={setRegion}
          placeholder="지역 선택"
        />
      </View>
      <Text style={styles.description}>
        전국 언어치료센터의 위치를 한 눈에 확인할 수 있습니다.
      </Text>
      <MapBox />
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
    fontWeight: "400",
    color: COLORS.BLACK,
    textAlign: "center",
  },
});

export default MapScreen;
