import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLORS } from "../../../styles/color"
import { useState } from "react"

export const RightPracticeBox = ({ onPress }) => {
    const [selected, setSelected] = useState(null);

    const [sentence, setSentence] = useState([
        "한 명이에요", "두 명이에요", "잠시만요"
    ])

    return (
        <View style = { styles.container }>
            { sentence.map((text, index) => (
                <TouchableOpacity  
                    key = { index }
                    style = {[ 
                        styles.choiceContainer,
                        selected === index && styles.selectContainer 
                    ]}
                    onPress = { () => {
                        if ( selected === index ) setSelected(null);
                        else {
                            setSelected(index);
                            if (onPress) onPress(); 
                        }
                    }}
                >
                    <Text style = { styles.text }>{ text }</Text>
                </TouchableOpacity>                
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 214,
        height: 88,
        borderRadius: 20,
        backgroundColor: COLORS.MAIN_YELLOW1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        gap: 6
    },

    choiceContainer: {
        width: 200,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.BACKGROUND,
        borderRadius: 10,
        paddingVertical: 4,
        paddingHorizontal: 10
    },

    selectContainer: {
        backgroundColor: "#FFD32199"
    },

    text: {
        fontSize: 10,
        fontWeight: 400,
        lineHeight: 11
    }
})