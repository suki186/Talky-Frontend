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

export const PracticeState = () => {
    return (
        <View style = { styles.container }>
            <Text style = { styles.mainText }>연습하고 싶은 상황을 선택해 보세요!</Text>

            <View style = { styles.choiceBox }>
                <PracticeStateComponent 
                    imgSource = { HOSPITAL }
                    location = "병원"
                />
                <PracticeStateComponent 
                    imgSource = { RESTAURANT }
                    location = "식당"
                />
            </View>

            <View style = { styles.choiceBox }>
                <PracticeStateComponent 
                    imgSource = { SCHOOL }
                    location = "학교"
                />
                <PracticeStateComponent 
                    imgSource = { MART }
                    location = "마트"
                />
            </View>

            <View style = { styles.choiceBox }>
                <PracticeStateComponent 
                    imgSource = { MOVE }
                    location = "교통"
                />
                <PracticeStateComponent 
                    imgSource = { BANK }
                    location = "은행"
                />
            </View>

            <View style = { styles.choiceBox }>
                <PracticeStateComponent 
                    imgSource = { DRUG }
                    location = "약국"
                />
                <PracticeStateComponent 
                    imgSource = { STAR }
                    location = "즐겨찾기"
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