import { StyleSheet, Text, View } from "react-native"
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

export const PracticeState = ({ onSelect }) => {
    return (
        <View style = { styles.container }>
            <Text style = { styles.mainText }>연습하고 싶은 상황을 선택해 보세요!</Text>

            <View style = { styles.choiceBox }>
                <PracticeStateComponent 
                    imgSource = { HOSPITAL }
                    location = "병원"
                    onPress = { onSelect }
                />
                <PracticeStateComponent 
                    imgSource = { RESTAURANT }
                    location = "식당"
                    onPress = { onSelect }
                />
            </View>

            <View style = { styles.choiceBox }>
                <PracticeStateComponent 
                    imgSource = { SCHOOL }
                    location = "학교"
                    onPress = { onSelect }
                />
                <PracticeStateComponent 
                    imgSource = { MART }
                    location = "마트"
                    onPress = { onSelect }
                />
            </View>

            <View style = { styles.choiceBox }>
                <PracticeStateComponent 
                    imgSource = { MOVE }
                    location = "교통"
                    onPress = { onSelect }
                />
                <PracticeStateComponent 
                    imgSource = { BANK }
                    location = "은행"
                    onPress = { onSelect }
                />
            </View>

            <View style = { styles.choiceBox }>
                <PracticeStateComponent 
                    imgSource = { DRUG }
                    location = "약국"
                    onPress = { onSelect }
                />
                <PracticeStateComponent 
                    imgSource = { STAR }
                    location = "즐겨찾기"
                    onPress = { onSelect }
                />
            </View>
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