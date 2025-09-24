import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Selector from "../../components/Selector";
import UsingCount from "./components/usingCount/UsingCount";
import UsingTop from "./components/usingTop/UsingTop";
import UsingInfo from "./components/usingInfo/UsingInfo";
import SosTable from "./components/sosTable/SosTable";
import SosModal from "./components/sosTable/SosModal";
import { COLORS } from "../../styles/color";
import Entypo from "@expo/vector-icons/Entypo";

import { useSosModal } from "../../hooks/useSosModal";
import getConnectUserApi from "../../apis/guardian/getConnectUserApi";
import getStatisticsApi from "../../apis/statistics/getStatisticsApi";

const StatisticsScreen = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const [sosOpen, setSosOpen] = useState(false); // 토글 상태
  const { row: selectedRow, open, close, ModalContainer } = useSosModal(); // 모달 제어

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getConnectUserApi();
      if (data.length > 0) {
        const formatted = data.map((user) => ({
          id: user.id,
          name: user.username,
        }));
        setUsers(formatted);
        setUser(formatted[0]);
      }
    };
    fetchUsers();
  }, []);

  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStatisticsApi(user.id);
      setStatistics(data);
    };

    fetchData();
  }, [user]);

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.userList}>
          {/* 연결된 일반 사용자 목록 */}
          {user && (
            <Selector
              items={users.map((user) => user.name)}
              width="94"
              selectedValue={user.name}
              onSelect={(name) => {
                setUser(users.find((user) => user.name === name));
              }}
              variant="user"
            />
          )}
          <Text style={styles.infoText}>
            최근 7일 동안의 활동 데이터를 기반으로 한 결과입니다.
          </Text>
        </View>

        {/* 발화 기능 사용 횟수 꺾은선 그래프 */}
        <UsingCount
          data={(statistics?.howManyUsed || [])
            .slice()
            .reverse()
            .map((item) => ({
              value: item.value,
              label: item.date,
              dataPointText: String(item.value),
            }))}
        />

        {/* 자주 사용하는 문장 TOP 5 리스트 */}
        {statistics && (
          <UsingTop
            data={statistics.top5Used.map((item, idx) => ({
              rank: idx + 1,
              text: item.sentence,
            }))}
          />
        )}

        {/* 시간, 장소별 사용 분포 원 그래프*/}
        <UsingInfo
          data1={(statistics?.usedWhen || []).map((when, idx) => ({
            value: when.count,
            label: when.when,
            rank: idx + 1,
          }))}
          data2={(statistics?.usedPlace || []).map((place, idx) => ({
            value: place.count,
            label: place.place,
            rank: idx + 1,
          }))}
        />

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

        {statistics && sosOpen && (
          <SosTable rows={statistics.histories} onPressPlace={open} />
        )}
      </ScrollView>

      <ModalContainer>
        <SosModal onClose={close} row={selectedRow || undefined} />
      </ModalContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 29,
    backgroundColor: COLORS.BACKGROUND,
    alignItems: "center",
    gap: 10,
  },
  userList: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  infoText: {
    fontSize: 10,
    fontFamily: "PretendardRegular",
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
    marginTop: 20,
  },
  sosToggleText: {
    fontSize: 12,
    fontFamily: "PretendardSemiBold",
    color: COLORS.BLACK,
  },
});

export default StatisticsScreen;
