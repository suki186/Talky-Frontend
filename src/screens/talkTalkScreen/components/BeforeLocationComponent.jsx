import { Pressable, StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../../styles/color";

export const BeforeLocationComponent = ({ selected, onSelect }) => {
    const locationList = [
        "병원", "식당", "학교", "마트", "교통", "은행", "약국", "기타"
    ];

    const showList = [];
    for (let i = 0; i < locationList.length; i += 4) {
        showList.push(locationList.slice(i, i + 4));
    }


    return (
        <View style = { styles.container } >
            { showList.map((row, rowIndex) => (
                <View key = { rowIndex } style = { styles.row }>
                    { row.map((location, index) => (
                        <Pressable 
                            key = { index }
                            onPress = { () => onSelect(location) } 
                            style = {[
                                styles.boxContainer,
                                selected === location && styles.selectedBox
                            ]}>
                            <Text style = { styles.locationText }>{ location }</Text>
                        </Pressable>
                    ))}
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        gap: 16
    },

    row: {
        flexDirection: "row",
        gap: 16
    },

    boxContainer: {
        width: 58,
        height: 34,
        borderRadius: 43.54,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.WHITE
    },

    selectedBox: {
        backgroundColor: COLORS.MAIN_YELLOW3
    },

    locationText: {
        fontSize: 15.68,
        // fontWeight: "400",
        fontFamily: "PretendardRegular",
        lineHeight: 20
    }
})