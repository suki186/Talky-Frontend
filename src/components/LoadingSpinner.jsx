import React from "react";
import { View, Image, StyleSheet } from "react-native";
import LOADING from "../assets/images/loading.png";
import { COLORS } from "../styles/color";
import { CircleFade } from "react-native-animated-spinkit";

const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <CircleFade size={30} color={COLORS.MAIN_YELLOW3} animating={true} />
      <Image source={LOADING} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    padding: 17,
    backgroundColor: COLORS.BACKGROUND,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#423609",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 90,
    height: 80,
    resizeMode: "contain",
    marginTop: 14,
  },
});

export default LoadingSpinner;
