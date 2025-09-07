import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import SettingBox from "../../../components/setting/SettingBox"
import { ToggleComponent } from "./ToggleComponent"

import LOCATION from "../../../assets/images/talktalk/location.png"
import { useState } from "react"
import { COLORS } from "../../../styles/color"

export const LocationInfo = () => {
    const [isToggled, setIsToggled] = useState(false); // 위치 알림 토글 상태 관리

    const handleToggle = () => {
        setIsToggled(prev => !prev); // 토글 상태 반전
    }

    return (
        <SettingBox 
            height = { 148 } 
            title = "위치 알림 서비스"
            bgColor = { isToggled ? COLORS.MAIN_YELLOW2 : COLORS.MAIN_YELLOW1 }
        >
            <View style = { styles.content }>
                <View style = { styles.notify }>
                    <Image source = { LOCATION } style = { styles.notifyImage }/>
                    <Text style = { styles.notifyText }>1시간마다 위치 알림 받기</Text>
                    <ToggleComponent value = { isToggled } onToggle = { handleToggle } />
                </View>
                <Text style = { styles.explain }>
                    {`위치 서비스 알림을 받기 위해서는\n텔레그램 활성화가 필요합니다`}
                </Text>
                <TouchableOpacity style = { styles.button }>
                    <Text style = { styles.buttonText }>활성화 하러 가기</Text>
                </TouchableOpacity>
            </View>
        </SettingBox> 
    )
}

const styles = StyleSheet.create({

    content: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        gap: 8
    },

    notify: {
        flexDirection: "row",
        alignItems: "center",
        gap: 13
    },

    notifyImage: {
        width: 18,
        height: 20.33,
        resizeMode: "contain"
    },

    notifyText: {
        fontSize: 16.29,
        fontWeight: "400",
        lineHeight: 20,
        color: COLORS.BLACK
    },

    explain: {
        fontSize: 10,
        fontWeight: "400",
        textAlign: "center",
        color: "#4E4E4E"
    },

    button: {
        width: 117,
        height: 28,
        backgroundColor: COLORS.BACKGROUND,
        borderRadius: 33.33,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        fontSize: 14,
        // fontWeight: "500",
        fontFamily: "PretendardMedium",
        lineHeight: 16,
        color: COLORS.BLACK
    }
})