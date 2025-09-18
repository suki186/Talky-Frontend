import React, { useState } from "react";
import { TouchableOpacity, Image, StyleSheet, Linking } from "react-native";
import SOS from "../assets/images/sos-call.png";

const SosCall = ({ size = 34 }) => {
  const [phoneNumber, setPhoneNumber] = useState("119"); // 긴급 연락처

  const handlePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.container}
      activeOpacity={0.7}
    >
      <Image
        source={SOS}
        style={{ width: size, height: size, resizeMode: "contain" }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 18,
  },
});

export default SosCall;
