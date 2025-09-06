import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    // 앱 시작 시 토큰 확인
    const loadToken = async () => {
      const token = await AsyncStorage.getItem("idtoken");
      const storedUserType = await AsyncStorage.getItem("userType");

      if (token) {
        setIsLoggedIn(true);
        setUserType(storedUserType);
      }
    };
    loadToken();
  }, []);

  return { isLoggedIn, setIsLoggedIn, userType, setUserType };
}
