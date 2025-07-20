import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"

import STAR from "../../assets/images/talktalk/star.png";
import DEFAULT from "../../assets/images/talktalk/input_default.png";
import TYPING from "../../assets/images/talktalk/input_typing.png";
import SUBMIT from "../../assets/images/talktalk/input_submit.png";
import { COLORS } from "../../styles/color";

export const InputRight = ({ status, onPress }) => {
    const getImageSource = () => {
        switch (status) {
            case "focused": return DEFAULT
            case "typing": return TYPING
            case "submitted": return SUBMIT
            default: return DEFAULT
        }
    }
    return (
        <TouchableOpacity onPress = { onPress }>
            <View style = { inputRightStyles.inputRight }>
                <Image
                    source = { getImageSource() }
                    style = { inputRightStyles.RightImage }
                    resizeMode = "contain"
                />
            </View>
        </TouchableOpacity>
    )
}

const inputRightStyles = StyleSheet.create({
    inputRight: {
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        borderRadius: 16.67,
        backgroundColor: COLORS.WHITE
    },

    RightImage: {
        width: 23.33,
        height: 23.33
    }
})