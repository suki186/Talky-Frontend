import { View, Image } from "react-native";
import { COLORS } from "../styles/color";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TalkTalkScreen from "../screens/talkTalkScreen/TalkTalkScreen";
import PracticeScreen from "../screens/practiceScreen/PracticeScreen";
import UserSettingScreen from "../screens/userSettingScreen/UserSettingScreen";

import PRACTICE_ICON from "../assets/tabbar/practice.png";
import TALKTALK_ICON from "../assets/tabbar/talktalk.png";
import SETTING_ICON from "../assets/tabbar/setting.png";
import Logo from "../components/Logo";
import SosCall from "../components/SosCall";

const Tab = createBottomTabNavigator();

export default function UserTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Talk"
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

          if (route.name === "Practice") {
            icon = PRACTICE_ICON;
          } else if (route.name === "Talk") {
            icon = TALKTALK_ICON;
          } else if (route.name === "UserSetting") {
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
      <Tab.Screen name="Practice" component={PracticeScreen} />
      <Tab.Screen
        name="Talk"
        component={TalkTalkScreen}
        options={{
          headerRight: () => <SosCall />,
        }}
      />
      <Tab.Screen
        name="UserSetting"
        component={UserSettingScreen}
        options={{
          headerRight: () => <SosCall />,
        }}
      />
    </Tab.Navigator>
  );
}
