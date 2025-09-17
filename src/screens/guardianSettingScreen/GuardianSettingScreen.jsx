import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, ScrollView } from "react-native";
import { LocationInfo } from "./components/LocationInfo";
import { GuardianInfo } from "./components/GuardianInfo";
import LogoutButton from "../../components/auth/LogoutButton";
import { COLORS } from "../../styles/color";
import guardianProfileApi from "../../apis/guardian/guardianProfileApi";

const GuardianSettingScreen = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await guardianProfileApi();
      if (data) {
        setProfile(data);
      }
    };
    fetchProfile();
  }, []);

  return (
    <ScrollView>
      <View style = { styles.container }>
        <LocationInfo />
        { profile &&
          <GuardianInfo 
            name = { profile.name }
            id = { profile.id }
            onChangeName = { (newName) => setProfile((prev) => ({ ...prev, name: newName })) }
          />
        }
        <LogoutButton />
      </View>
    </ScrollView>
    
  );
};

export default GuardianSettingScreen;

const styles = StyleSheet.create({
  container: {
    height: 780,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: COLORS.BACKGROUND,
    paddingTop: 45,
    gap: 24
  },

  logoutButton: {
    width: 85,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.MAIN_YELLOW2,
    borderRadius: 33.33
  },

  logoutText: {
    color: COLORS.BLACK,
    fontSize: 12,
    fontFamily: "PretendardRegular",
  }
})