import { Image, Keyboard, StyleSheet, TextInput, View } from "react-native"

import { InputLeft } from "./InputLeft";
import { InputRight } from "./InputRight";
import { useMemo, useState } from "react";
import { Toast } from "./Toast";

export const TalkInput = () => {
    const [text, setText] = useState("");
    const [focused, setFocused] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [rightPressed, setRightPressed] = useState(false);

    const [showToast, setShowToast] = useState(false);

    const handleShowToast = () => {
        setShowToast(true);
    };

    const status = useMemo(() => {
        if (submitted) return "submitted"; /* 입력 완료 */
        if (text !== "") return "typing"; /* 입력 중 */
        if (focused) return "focused"; /* 텍스트 입력 없이 포커스 */
        return "default";
    }, [submitted, text, focused]);

    const getPlaceholderColor = () => {
        switch (status) {
            case "focused": return "#D2D2D2";
            default: return "#767676";
        }
    }

    const getInputBorderColor = () => {
        switch (status) {
            case "focused": return "#FFD321CC";
            case "typing": return "#FFD321CC";
            case "submitted": return "#FFD321";
            default: return "#FFEC9F33";
        }
    }

    const handleRightPress = () => {
        if (status === "submitted") setRightPressed(true);
    }

    const onFocus = () => {
        setFocused(true);
        setSubmitted(false);
        setRightPressed(false);
    }

    const onBlur = () => {
        setFocused(false);
        if (text.trim() === "") setSubmitted(false);
    }

    const onChangeText = (value) => {
        setText(value);
        if (submitted) setSubmitted(false);
        setRightPressed(false);
    }

    const onSubmit = () => {
        if (text.trim() !== "") {
            setSubmitted(true);
        }
    }

    return (
        <View style = {[ 
            styles.container, 
            status === "focused" && styles.focusContainer,
            status === "typing" && styles.typingContainer,
            status === "submitted" && styles.submitContainer,
            rightPressed && styles.rightPressedContainer
        ]}>
            <InputLeft 
                status = { status }
                onFavoriteToggle = { handleShowToast }
            />
            <TextInput
                placeholder = "표현하고 싶은 문장을 적어 봐!"
                placeholderTextColor = { getPlaceholderColor() }
                style = {[ 
                    styles.input, 
                    { borderColor: getInputBorderColor() },
                    rightPressed && styles.inputRightPressed
                ]}
                value = { text }
                onFocus = { onFocus }
                onBlur = { onBlur }
                onChangeText = { onChangeText }
                onSubmitEditing = { onSubmit }
                returnKeyType = "done"
                blurOnSubmit = { false }
            />
            <InputRight status = { status } onPress = { handleRightPress }/>
            { showToast && <Toast onHide = { () => setShowToast(false) } message = { "즐겨찾기 완료!" } />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 334.667,
        height: 54,
        borderWidth: 1.667,
        borderColor: "#FFD321",
        borderRadius: 20,
        gap: 5,
        backgroundColor: "transparent"
    },

    focusContainer: {
        backgroundColor: "#FFEC9F33",
        borderColor: "transparent",
        opacity: 1
    },

    typingContainer: {
        backgroundColor: "#FFEC9F"
    },
    
    submitContainer: {
        backgroundColor: "#FFE890"
    },

    rightPressedContainer: {
        backgroundColor: "#FFD321"
    },

    inputRightPressed: {
        backgroundColor: "#FFFFFF"
    },

    input: {
        width: 243.333,
        height: 40.668,
        paddingLeft: 12,
        borderRadius: 33.333,
        borderWidth: 1.668,
        backgroundColor: "transparent"
    }
})