import { Image, StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../../styles/color"

import SPEAK from "../../../assets/images/talktalk/input_submit.png"

export const LeftPracticeBox = ({ practiceText }) => {
    return (
        <View style = { styles.container }>
            <Text style = { styles.text }>{ practiceText }</Text>
            <View style = { styles.speakBox }>
                <Image 
                    source = { SPEAK } 
                    style = { styles.speakImg }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start", // 넓이 자유롭게
        paddingVertical: 5,
        paddingLeft: 7,
        paddingRight: 7,
        backgroundColor: COLORS.BACKGROUND,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: COLORS.MAIN_YELLOW1,
        gap: 5
    },

    text: {
        fontSize: 10,
        fontWeight: "400",
        lineHeight: 20
    },

    speakBox: {
        width: 18,
        height: 15,
        borderRadius: 6,
        backgroundColor: COLORS.MAIN_YELLOW2,
        justifyContent: "center",
        alignItems: "center"
    },

    speakImg: {
        width: 11,
        height: 11
    }
})