import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapBox = ({ width = 328, height = 480, selectedRegion }) => {
  const [stores, setStores] = useState([
    { id: 1, latitude: 37.5825, longitude: 127.0108, region: "서울특별시" },
    { id: 2, latitude: 37.5830, longitude: 127.0095, region: "인천광역시" },
    { id: 3, latitude: 37.5815, longitude: 127.0110, region: "부산광역시" },
  ]);

  const filteredStores =
    selectedRegion && selectedRegion !== "전체"
      ? stores.filter((s) => s.region === selectedRegion)
      : stores;

  return (
    <View style = { [styles.mapContainer, { width, height }] }>
      <MapView
        style = { StyleSheet.absoluteFillObject }
        initialRegion = {{ // 학교 위치로 고정
          latitude: 37.5820,
          longitude: 127.0104,
          latitudeDelta: 0.01, 
          longitudeDelta: 0.01,
        }}
        zoomEnabled = { true }       
        zoomControlEnabled = { true } 
        scrollEnabled = { true }       
        showsCompass = { true } 
      >

        <Marker
          coordinate = {{ latitude: 37.5820, longitude: 127.0104 }}
          image = { require("../../../assets/images/map/map-marker.png") }
          style = {{ width: 35, height: 41 }}
        />

        { filteredStores.map((store) => (
          <Marker
            key = { store.id }
            coordinate = {{ latitude: store.latitude, longitude: store.longitude }}
            title = { store.name }
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