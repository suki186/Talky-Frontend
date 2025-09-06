import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { useAuth } from "../hooks/useAuth"; // 로그인 상태, userType

export default function RootNavigator() {
  const { isLoggedIn, setIsLoggedIn, userType, setUserType } = useAuth();

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <AuthStack setIsLoggedIn={setIsLoggedIn} setUserType={setUserType} />
      ) : (
        <AppStack userType={userType} />
      )}
      {/* <AuthStack /> */}
      {/* <AppStack userType={"user"} /> */}
    </NavigationContainer>
  );
}
