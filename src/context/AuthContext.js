import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const loadAuthData = async () => {
      const token = await AsyncStorage.getItem("idtoken");
      const storedUserType = await AsyncStorage.getItem("userType");
      if (token) {
        setIsLoggedIn(true);
        setUserType(storedUserType);
      }
    };
    loadAuthData();
  }, []);

  return (
    <AuthContext.Provider value = {{ isLoggedIn, setIsLoggedIn, userType, setUserType }}>
      { children }
    </AuthContext.Provider>
  );
};

// 커스텀 훅
export const useAuth = () => useContext(AuthContext);