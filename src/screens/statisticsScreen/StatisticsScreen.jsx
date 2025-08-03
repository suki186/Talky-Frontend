import { ScrollView, Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import Selector from "../../components/Selector";
import UsingCount from "./components/usingCount/UsingCount";
import UsingTop from "./components/usingTop/UsingTop";
import UsingInfo from "./components/usingInfo/UsingInfo";
import { COLORS } from "../../styles/color";

import countDummy from "../../datas/countDummy.json";
import topDummy from "../../datas/topDummy.json";
import donut1Dummy from "../../datas/donut1Dummy.json";
import donut2Dummy from "../../datas/donut2Dummy.json";

const StatisticsScreen = () => {
  const countData = countDummy; // 발화 횟수 예시 데이터
  const users = ["김예나", "조주한"]; // 연결된 계정 목록

  const [user, setUser] = useState(users[0]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
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

      {/* 발화 기능 사용 횟수 꺾은선 그래프 */}
      <UsingCount data={countData} />

      {/* 자주 사용하는 문장 TOP 5 리스트 */}
      <UsingTop data={topDummy} />

      {/* 시간, 장소별 사용 분포 원 그래프*/}
      <UsingInfo data1={donut1Dummy} data2={donut2Dummy} />
      {/* 긴급 호출 이력 표 */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 29,
    backgroundColor: COLORS.BACKGROUND,
    alignItems: "center",
    gap: 15,
  },
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
