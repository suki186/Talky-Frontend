import { Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import Selector from "../../components/Selector";

const StatisticsScreen = () => {
  const users = ["김예나", "조주한"]; // 연결된 계정 목록

  const [user, setUser] = useState(users[0]);
  return (
    <View>
      <View style={styles.userList}>
        {/* 연결된 일반 사용자 목록 */}
        <Selector
          items={users}
          width="94"
          selectedValue={user}
          onSelect={setUser}
          variant="user"
        />
        <Text style={styles.infoText}>
          최근 7일 동안의 활동 데이터를 기반으로한 결과입니다.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userList: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  infoText: {
    fontSize: 10,
    fontWeight: "400",
    color: "#8b8b8b",
  },
});

export default StatisticsScreen;
