import { StyleSheet, TouchableOpacity, View } from "react-native"

import { useState } from "react"
import { COLORS } from "../../../styles/color"

{/* value: 현재 토글 상태, onToggle: 토글 상태 변경 시 호출 함수 */}
export const ToggleComponent = ({ value, onToggle }) => {
    return (
        <TouchableOpacity 
            style = {[ 
                styles.notifyToggle,
                value ? styles.notifyToggleOn : styles.notifyToggleOff
            ]}
            onPress = { onToggle }
            activeOpacity = { 0.5 }
        >
            <View style = {[ 
                styles.toggle,
                value ? styles.toggleOn : styles.toggleOff
            ]} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    notifyToggle: {
        width: 48,
        height: 24.42,
        backgroundColor: COLORS.WHITE,
        borderRadius: 42.11,
        justifyContent: "center"
    },

    notifyToggleOn: {
        alignItems: "flex-end",
        paddingRight: 2.53
    },

    notifyToggleOff: {
        alignItems: "flex-start",
        paddingLeft: 2.53
    },
    
    toggle: { 
        width: 21.05,
        height: 21.05,
        borderWidth: 1,
        borderRadius: 84.21
    },

    toggleOn: {
        backgroundColor: COLORS.MAIN_YELLOW3,
        borderColor: COLORS.MAIN_YELLOW2
    },

    toggleOff: {
        backgroundColor: COLORS.CANCLE_CLICK,
        borderColor: COLORS.CANCLE_NORMAL
    }
})