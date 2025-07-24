import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLORS } from "../../../styles/color"
import { LinearGradient } from "expo-linear-gradient"

export const PracticeStateComponent = ({ imgSource, location }) => {
    return (
        <LinearGradient
            colors = { [COLORS.MAIN_YELLOW2, COLORS.MAIN_YELLOW3] }
            style = { styles.borderContainer }
        >
            <TouchableOpacity 
                activeOpacity = { 0.8 }
                style = { styles.container }
            >
                <Image source = { imgSource } />
                <View style = { styles.stateTextBox }>
                    <Text style = { styles.stateText }>{ location }</Text>
                </View>
            </TouchableOpacity>            
        </LinearGradient>

    )
}

const BORDER_WIDTH = 3;

const styles = StyleSheet.create({
    borderContainer: {
        padding: BORDER_WIDTH,
        borderRadius: 16.67
    },

    container: {
        width: 150,
        height: 98,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.BACKGROUND,
        paddingVertical: 15,
        borderRadius: 13.67,
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