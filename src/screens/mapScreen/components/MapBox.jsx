import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const MapBox = ({ width = 328, height = 480 }) => {
  const [region, setRegion] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("위치 권한 거부");
        return;
      }

      const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      const { latitude, longitude } = location.coords;

      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  if (!region) {
    return (
      <View style={[styles.mapContainer, { width, height, justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={[styles.mapContainer, { width, height }]}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        region={region}
        showsUserLocation={true}
        zoomEnabled
        zoomControlEnabled
        scrollEnabled
        showsCompass
        onRegionChangeComplete={(r) => setRegion(r)}
      >
        <Marker
          coordinate={{ latitude: region.latitude, longitude: region.longitude }}
          image={require("../../../assets/images/map/map-marker.png")}
          style={{ width: 35, height: 41 }}
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