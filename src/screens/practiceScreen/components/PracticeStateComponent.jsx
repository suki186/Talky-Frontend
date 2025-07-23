import { Image, StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../../styles/color"

export const PracticeStateComponent = ({ imgSource, location }) => {
    return (
        <View style = { styles.container }>
            <Image source = { imgSource } />
            <View style = { styles.stateTextBox }>
                <Text style = { styles.stateText }>{ location }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 98,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.BACKGROUND,
        borderColor: COLORS.MAIN_YELLOW3,
        borderWidth: 3,
        borderRadius: 16.67,
        paddingVertical: 15,
        gap: 7
    },

    stateTextBox: {
        height: 20,
        borderRadius: 16.67,
        backgroundColor: COLORS.MAIN_YELLOW2,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },

    stateText: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 20,
    }
})