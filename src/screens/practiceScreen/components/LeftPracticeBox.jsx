import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLORS } from "../../../styles/color"

import SPEAK from "../../../assets/images/practice/practice_before.png"
import SPEAKED from "../../../assets/images/practice/practice_after.png"
import { useState } from "react"

export const LeftPracticeBox = ({ practiceText, onPress, isSpeaking }) => {
    return (
        <View style = { styles.container }>
            <Text style = { styles.text }>{ practiceText }</Text>
            <TouchableOpacity 
                style = { styles.speakBox }
                onPress = { onPress }
            >
                <Image 
                    source = { isSpeaking ? SPEAKED : SPEAK  } 
                    style = { styles.speakImg }
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        paddingVertical: 5,
        paddingLeft: 7,
        paddingRight: 7,
        backgroundColor: COLORS.BACKGROUND,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: COLORS.MAIN_YELLOW1,
        gap: 5,
        marginBottom: 22
    },

    text: {
        fontSize: 10,
        fontFamily: "PretendardRegular",
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