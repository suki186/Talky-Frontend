import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, StyleSheet, Dimensions } from "react-native";
import Logo from "../components/Logo";
import UP from "../assets/splash/splash-up.png";
import { COLORS } from "../styles/color";

const SplashScreen = ({ isLoggedIn, onFinish }) => {
  const { width, height } = Dimensions.get("window");
  const splashUpHeight = width * 0.5;

  const fadeAnim = useRef(new Animated.Value(0)).current; // 로고 투명도
  const moveAnim = useRef(new Animated.Value(height)).current; // splash-up 시작 위치
  const fadeOutAnim = useRef(new Animated.Value(1)).current; // splash-up 투명도
  const logoTranslate = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current; // 로고 위치 이동
  const logoScale = useRef(new Animated.Value(1)).current; // 로고 크기 조절

  useEffect(() => {
    const easing = Easing.out(Easing.ease);

    // 애니메이션들 병렬처리
    Animated.parallel([
      // 로고 투명도
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        easing,
        useNativeDriver: true,
        delay: 800,
      }),
      // splash-up 위치
      Animated.timing(moveAnim, {
        toValue: -height / 3.3,
        duration: 3000,
        easing,
        useNativeDriver: true,
        delay: 800,
      }),
      // splash-up 투명도
      Animated.timing(fadeOutAnim, {
        toValue: 0,
        duration: 3000,
        delay: 1800,
        easing,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // 로고 위치 이동
      const animations = [
        Animated.timing(logoTranslate, {
          toValue: isLoggedIn ? { x: 0, y: -303 } : { x: 0, y: -191 },
          duration: 1000,
          easing,
          useNativeDriver: true,
        }),
      ];

      // 로고 크기 조절(로그인된 상태인 경우만) -> 약 0.5배 축소
      if (isLoggedIn) {
        animations.push(
          Animated.timing(logoScale, {
            toValue: 0.5,
            duration: 1000,
            easing,
            useNativeDriver: true,
          })
        );
      }

      Animated.parallel(animations).start(() => {
        if (onFinish) onFinish();
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={UP}
        style={{
          position: "absolute",
          bottom: 0,
          width: width,
          height: splashUpHeight,
          transform: [{ translateY: moveAnim }],
          opacity: fadeOutAnim,
          resizeMode: "contain",
        }}
      />

      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [
            ...logoTranslate.getTranslateTransform(),
            { scale: logoScale },
          ],
        }}
      >
        <Logo width="140" height="43.73" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
