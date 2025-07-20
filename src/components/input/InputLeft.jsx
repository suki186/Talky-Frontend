import { Alert, Image, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"

import STAR from "../../assets/images/talktalk/star.png";
import STAR_PRESS from "../../assets/images/talktalk/star_press.png";
import { useState } from "react";
import { COLORS } from "../../styles/color";

export const InputLeft = ({ status, onFavoriteToggle }) => {
    const [selected, setSelected] = useState(false);

    const onPress = () => {
        const next = !selected;
        setSelected(next);
        onFavoriteToggle?.();
    };

    return (
        <Pressable onPress = { onPress }>
            {({ pressed }) => (
                <View style = { styles.inputLeft }>
                    <Image
                        source = { pressed ? STAR_PRESS : STAR } 
                        style = { styles.leftImage }
                    />
                </View>
            )}
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    inputLeft: {
        justifyContent: "center",
        alignItems: "center",
        width: 28,
        height: 28,
        backgroundColor: COLORS.WHITE,
        borderRadius: 33.3
    },

    leftImage: {
        width: 19.33,
        height: 19.33
    }
})