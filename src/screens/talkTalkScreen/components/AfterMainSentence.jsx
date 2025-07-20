import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const AfterMainSentence = ({ onPress, isSelected, text, pressed }) => {
    return (
        <TouchableOpacity
            onPress = { onPress }
            activeOpacity = { 1 }
            style = { [styles.button, 
                {
                    opacity: pressed !== undefined ? (pressed ? 1 : 0.5) : (isSelected ? 1 : 0.5)
                }]}
        >
            <Text style = { styles.recomText }>{ text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 302.67,
        height: 40,
        backgroundColor: "#FFF",
        borderRadius: 26.67,
        paddingHorizontal: 13,
        paddingVertical: 10,
        justifyContent: "center",
    },

    recomText: {
        fontSize: 12,
        fontWeight: "500",
    }
})