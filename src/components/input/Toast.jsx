import { useEffect, useRef } from "react"
import { Animated, StyleSheet, Text } from "react-native"
import { COLORS } from "../../styles/color";

export const Toast = ({ onHide, message }) => {
    const Animating = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(Animating, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }),

            Animated.delay(1500),
            Animated.timing(Animating, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true                
            }),
        ]).start(() => onHide?.());
    }, []);

    return (
        <Animated.View style = {[
            toastStyles.toast,
            { opacity: Animating }
        ]}>
            <Text style = { toastStyles.toastText }>{ message }</Text>
        </Animated.View>
    )
}

const toastStyles = StyleSheet.create({
    toast: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        height: 62,
        bottom: 0,
        backgroundColor: "#FFFFFFCC",
        paddingHorizontal: 66.67,
        borderRadius: 16.67,
        borderColor: "#42360914",
        borderWidth: 2,
        zIndex: 1000
    },

    toastText: {
        color: COLORS.BLACK,
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 14
    }
})