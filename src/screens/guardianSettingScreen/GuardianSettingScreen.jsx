import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { LocationInfo } from "./components/LocationInfo";
import { GuardianInfo } from "./components/GuardianInfo";
import LogoutButton from "../../components/auth/LogoutButton";
import LoadingSpinner from "../../components/LoadingSpinner";
import { COLORS } from "../../styles/color";
import guardianProfileApi from "../../apis/guardian/guardianProfileApi";

const GuardianSettingScreen = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchProfile = async () => {
      setLoading(true);
      try {
        const data = await guardianProfileApi();
        if (!isMounted) return;
        if (data) {
          setProfile(data);
        }
      } catch (e) {
        console.error("GuardianSettingScreen fetchProfile Error:", e);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <LocationInfo />
          {profile && (
            <GuardianInfo
              name={profile.name}
              id={profile.id}
              onChangeName={(newName) =>
                setProfile((prev) => ({ ...prev, name: newName }))
              }
            />
          )}
        </>
      )}
      <LogoutButton />
    </View>
  );
};

export default GuardianSettingScreen;

const styles = StyleSheet.create({
  container: {
    height: 780,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: COLORS.BACKGROUND,
    paddingTop: 20,
    gap: 24,
  },

  logoutButton: {
    width: 85,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.MAIN_YELLOW2,
    borderRadius: 33.33,
  },

  logoutText: {
    color: COLORS.BLACK,
    fontSize: 12,
    fontFamily: "PretendardRegular",
  },
});
