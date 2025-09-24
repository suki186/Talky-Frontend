import { View, Image } from "react-native";
import { COLORS } from "../styles/color";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../screens/mapScreen/MapScreen";
import StatisticsScreen from "../screens/statisticsScreen/StatisticsScreen";
import GuardianSettingScreen from "../screens/guardianSettingScreen/GuardianSettingScreen";

import MAP_ICON from "../assets/tabbar/map.png";
import STATISTICS_ICON from "../assets/tabbar/statistics.png";
import SETTING_ICON from "../assets/tabbar/setting.png";
import Logo from "../components/Logo";
import SosCall from "../components/SosCall";

const Tab = createBottomTabNavigator();

const GuardianTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Statistics"
      screenOptions={({ route }) => ({
        headerTitle: () => <Logo top="50" />,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: COLORS.BACKGROUND,
          height: 120,
          elevation: 0, // 그림자 제거
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },

        tabBarShowLabel: false, // 아이콘만
        tabBarStyle: {
          height: 89,
          paddingTop: 10,
          backgroundColor: COLORS.BACKGROUND,
          borderTopWidth: 0.5,
          borderColor: "#FFEC9F",
        },
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === "Map") {
            icon = MAP_ICON;
          } else if (route.name === "Statistics") {
            icon = STATISTICS_ICON;
          } else if (route.name === "GuardianSetting") {
            icon = SETTING_ICON;
          }

          return (
            <View
              style={{
                backgroundColor: focused ? "#FFD32133" : "transparent",
                padding: 2.6,
                borderRadius: 10,
              }}
            >
              <Image
                source={icon}
                style={{
                  width: 46,
                  height: 46,
                  resizeMode: "contain",
                }}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen
        name="GuardianSetting"
        component={GuardianSettingScreen}
        options={{
          headerRight: () => <SosCall />,
        }}
      />
    </Tab.Navigator>
  );
};

export default GuardianTabNavigator;
