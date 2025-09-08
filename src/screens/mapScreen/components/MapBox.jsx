import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import stores from "../../../datas/centerLocation.json";

const MapBox = ({ width = 328, height = 480, selectedRegion }) => {
    const baseLocation = { latitude: 37.5820, longitude: 127.0104 };

  // 거리 계산 함수 (Haversine)
  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // distance 라벨 해석
  const parseDistanceRange = (label) => {
    if (label === "전체" || !label) return [0, Infinity];
    if (label.includes("이내")) {
      const max = parseInt(label.replace("km 이내", "").trim());
      return [0, max];
    }
    if (label.includes("~")) {
      const [min, max] = label.replace("km", "").split("~").map((v) => parseInt(v.trim()));
      return [min, max];
    }
    return [0, Infinity];
  };

  const [minDist, maxDist] = parseDistanceRange(selectedRegion);

  // 기준 위치로부터 필터링
  const filteredStores = stores.filter((s) => {
    if (s["시도"] !== "서울특별시") return false;
    if (!s.latitude || !s.longitude) return false;
    const dist = getDistanceFromLatLonInKm(
      baseLocation.latitude,
      baseLocation.longitude,
      parseFloat(s.latitude),
      parseFloat(s.longitude)
    );
    return dist >= minDist && dist <= maxDist;
  });

  return (
    <View style = { [styles.mapContainer, { width, height }] }>
      <MapView
        style = { StyleSheet.absoluteFillObject }
        initialRegion = {{ // 학교 위치로 고정
          latitude: baseLocation.latitude,
          longitude: baseLocation.longitude,
          latitudeDelta: 0.01, 
          longitudeDelta: 0.01,
        }}
        zoomEnabled = { true }       
        zoomControlEnabled = { true } 
        scrollEnabled = { true }       
        showsCompass = { true } 
      >

        <Marker
          coordinate = { baseLocation}
          image = { require("../../../assets/images/map/map-marker.png") }
          style = {{ width: 35, height: 41 }}
        />

        { filteredStores.map((store, idx) => (
          <Marker
            key = { idx }
            coordinate = {{ latitude: parseFloat(store.latitude), longitude: parseFloat(store.longitude) }}
            title = { store["제공 기관명"] }
            image = { require("../../../assets/images/map/map-marker.png") }
            style = {{ width: 35, height: 41 }}
          />
        ))}
      </MapView>
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