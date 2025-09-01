import { FlatList, StyleSheet, Text, View } from "react-native"
import { PracticeStateComponent } from "./PracticeStateComponent"

import HOSPITAL from "../../../assets/images/practice/hospital.png"
import RESTAURANT from "../../../assets/images/practice/restaurant.png"
import SCHOOL from "../../../assets/images/practice/school.png"
import MART from "../../../assets/images/practice/mart.png"
import MOVE from "../../../assets/images/practice/move.png"
import BANK from "../../../assets/images/practice/bank.png"
import DRUG from "../../../assets/images/practice/drug.png"
import STAR from "../../../assets/images/practice/favorite.png"

import { COLORS } from "../../../styles/color"

const ITEMS = [
  { key: "hospital", img: HOSPITAL, label: "병원" },
  { key: "restaurant", img: RESTAURANT, label: "식당" },
  { key: "school", img: SCHOOL, label: "학교" },
  { key: "mart", img: MART, label: "마트" },
  { key: "move", img: MOVE, label: "교통" },
  { key: "bank", img: BANK, label: "은행" },
  { key: "drug", img: DRUG, label: "약국" },
  { key: "star", img: STAR, label: "즐겨찾기" },
];

export const PracticeState = ({ onSelect }) => {
    return (
        <View style = { styles.container }>
            <Text style = { styles.mainText }>연습하고 싶은 상황을 선택해 보세요!</Text>

            <FlatList
                data = { ITEMS }
                renderItem = {({ item }) => (
                    <PracticeStateComponent
                        imgSource = { item.img }
                        location = { item.label }
                        onPress = { onSelect }
                    />
                )}
                keyExtractor = { (item) => item.key }
                numColumns = { 2 } 
                columnWrapperStyle = { styles.choiceBox } 
                contentContainerStyle = {{ gap: 27 }}
            />
   
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 780,
        paddingTop: 30, 
        backgroundColor: COLORS.BACKGROUND,
        alignItems: "center",
        gap: 27
    },

    mainText: {
        fontSize: 14,
        fontWeight: 500
    },

    choiceBox: {
        flexDirection: "row",
        gap: 26
    }
})