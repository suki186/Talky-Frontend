import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { useAuth } from "../context/AuthContext";

export default function RootNavigator() {
  const { isLoggedIn, userType } = useAuth();

  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthStack /> : <AppStack userType={userType} />}
    </NavigationContainer>
  );
}
