// 로고
import React from "react";
import { View, Image } from "react-native";
import LOGO from "../assets/images/talktalk-logo.png";

const Logo = ({ width = 100, height = 31.23, top = 0 }) => {
  return (
    <View style={{ paddingTop: top }}>
      <Image
        source={LOGO}
        style={{
          width,
          height,
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

export default Logo;
