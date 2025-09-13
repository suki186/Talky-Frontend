import { StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../../styles/color"

export const AfterLocationBox = ({ location, mystate }) => {
    return (
        <View style = { styles.locationBox }>
            <Text style = { styles.locationText }>{ location }</Text>
            <View style = { styles.locationLine } />
            <Text style = { styles.locationSentence }>{ mystate }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    locationBox: {
        width: 327.33,
        height: 36,
        flexDirection: "row",
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: COLORS.MAIN_YELLOW3,
        borderRadius: 33.33,
        gap: 8
    },

    locationText: {
        fontSize: 18.67,
        fontFamily: "PretendardBold",
    },

    locationLine: {
        width: 1,
        height: 22.5,
        backgroundColor: COLORS.WHITE
    },

    locationSentence: {
        fontSize: 12,
        fontFamily: "PretendardRegular",
    }
})