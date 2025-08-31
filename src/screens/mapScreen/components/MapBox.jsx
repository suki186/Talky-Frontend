import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapBox = ({ width = 328, height = 480 }) => {
  return (
    <View style = { [styles.mapContainer, { width, height }] }>
      <MapView
        style = { StyleSheet.absoluteFillObject }
        initialRegion={{
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