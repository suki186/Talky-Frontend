import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Selector from "../../components/Selector";
import UsingCount from "./components/usingCount/UsingCount";
import UsingTop from "./components/usingTop/UsingTop";
import UsingInfo from "./components/usingInfo/UsingInfo";
import SosTable from "./components/sosTable/SosTable";
import SosModal from "./components/sosTable/SosModal";
import { COLORS } from "../../styles/color";
import Entypo from "@expo/vector-icons/Entypo";

import countDummy from "../../datas/countDummy.json";
import topDummy from "../../datas/topDummy.json";
import donut1Dummy from "../../datas/donut1Dummy.json";
import donut2Dummy from "../../datas/donut2Dummy.json";
import { BlurView } from "expo-blur";

const StatisticsScreen = () => {
  const countData = countDummy; // 발화 횟수 예시 데이터
  const users = ["김예나", "조주한"]; // 연결된 계정 목록

  const [user, setUser] = useState(users[0]);
  const [sosOpen, setSosOpen] = useState(false); // 토글 상태
  // 모달 제어용 상태
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const rows = [
    // 긴급 호출 예시 데이터
    ["6/30", "14:30", "서울특별시 성북구 삼선교로16길 116", "보호자"],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ];

  // 모달 열기
  const handlePressPlace = (row) => {
    setSelectedRow(row);
    setModalVisible(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setModalVisible(false);
    setSelectedRow(null);
  };

  return (
    <>
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
        <TouchableOpacity
          style={[
            styles.sosToggle,
            {
              backgroundColor: sosOpen
                ? COLORS.MAIN_YELLOW2
                : COLORS.MAIN_YELLOW1,
            },
          ]}
          activeOpacity={0.8}
          onPress={() => setSosOpen((prev) => !prev)}
        >
          <Entypo
            name={sosOpen ? "triangle-down" : "triangle-right"}
            size={18}
            color={COLORS.MAIN_YELLOW3}
          />
          <Text style={styles.sosToggleText}>긴급 호출 이력</Text>
        </TouchableOpacity>

        {sosOpen && <SosTable rows={rows} onPressPlace={handlePressPlace} />}
      </ScrollView>

      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.modalRoot}>
          {/* 블러 레이어 */}
          <BlurView
            intensity={50}
            tint="dark"
            style={StyleSheet.absoluteFill}
          />
          {/* 중앙 모달 */}
          <View style={styles.centerWrap}>
            <SosModal onClose={closeModal} />
          </View>
        </View>
      </Modal>
    </>
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
  sosToggle: {
    backgroundColor: COLORS.MAIN_YELLOW1,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    width: 116,
    height: 21,
    borderWidth: 1,
    borderColor: COLORS.MAIN_YELLOW2,
  },
  sosToggleText: {
    fontSize: 12,
    fontWeight: 600,
    color: COLORS.BLACK,
  },
  // 모달
  modalRoot: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dim: {
    backgroundColor: "#8B8B8B4D",
  },
  centerWrap: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StatisticsScreen;
