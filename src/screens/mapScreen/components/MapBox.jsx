import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MapBox = ({ width = 328, height = 480 }) => {
  return (
    <View style={[styles.mapContainer, { width, height }]}>
      {/* 카카오맵 API 연동 예정 */}
      <Text>지도 보일 화면</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    backgroundColor: "#ececec",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 5,
  },
});

export default MapBox;
