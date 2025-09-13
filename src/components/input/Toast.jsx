import { useEffect, useRef } from "react"
import { Animated, StyleSheet, Text, Image, View } from "react-native"
import { COLORS } from "../../styles/color";

export const Toast = ({ 
    onHide, 
    message, 
    style, 
    textStyle = {}, 
    imageSource, 
    borderColor = "#42360914" 
}) => {

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
            style,
            { opacity: Animating, borderColor }
        ]}>
            <View style = { toastStyles.row }>
                { imageSource && (
                    <Image source = { imageSource } style = { toastStyles.icon } />
                )}
                <Text style = { textStyle }>{ message }</Text>
            </View>
        </Animated.View>
    )
}

const toastStyles = StyleSheet.create({
    toast: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFFCC",
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 16.67,
        borderWidth: 2,
        zIndex: 1000
    },

    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },

    icon: {
        height: 52,
        resizeMode: "contain"
    },

    toastText: {
        color: COLORS.BLACK,
        fontSize: 12,
        // fontWeight: "400",
        fontFamily: "PretendardRegular",
        lineHeight: 14
    }
})