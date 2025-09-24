import { FlatList, StyleSheet, Text, View } from "react-native";
import { PracticeStateComponent } from "./PracticeStateComponent";

import HOSPITAL from "../../../assets/images/practice/hospital.png";
import RESTAURANT from "../../../assets/images/practice/restaurant.png";
import SCHOOL from "../../../assets/images/practice/school.png";
import MART from "../../../assets/images/practice/mart.png";
import MOVE from "../../../assets/images/practice/move.png";
import BANK from "../../../assets/images/practice/bank.png";
import DRUG from "../../../assets/images/practice/drug.png";
import STAR from "../../../assets/images/practice/favorite.png";

import { COLORS } from "../../../styles/color";

const ITEMS = [
  { key: "hospital", img: HOSPITAL, label: "병원", id: 1 },
  { key: "restaurant", img: RESTAURANT, label: "식당", id: 2 },
  { key: "school", img: SCHOOL, label: "학교", id: 3 },
  { key: "mart", img: MART, label: "마트", id: 4 },
  { key: "move", img: MOVE, label: "교통", id: 5 },
  { key: "bank", img: BANK, label: "은행", id: 6 },
  { key: "drug", img: DRUG, label: "약국", id: 7 },
  { key: "star", img: STAR, label: "즐겨찾기", id: 8 },
];

export const PracticeState = ({ onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>연습하고 싶은 상황을 선택해 보세요!</Text>

      <FlatList
        data={ITEMS}
        renderItem={({ item }) => (
          <PracticeStateComponent
            imgSource={item.img}
            location={item.label}
            onPress={() => onSelect(item.id, item.label)}
          />
        )}
        keyExtractor={(item) => item.key}
        numColumns={2}
        columnWrapperStyle={styles.choiceBox}
        contentContainerStyle={{ gap: 27 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: COLORS.BACKGROUND,
    alignItems: "center",
    gap: 20,
  },

  mainText: {
    fontSize: 14,
    fontFamily: "PretendardMedium",
  },

  choiceBox: {
    flexDirection: "row",
    gap: 20,
  },
});
