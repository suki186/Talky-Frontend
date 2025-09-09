import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import SettingBox from "../../../components/setting/SettingBox"
import NameIdGroup from "../../../components/setting/NameIdGroup"
import { Toast } from "../../../components/input/Toast"
import { useDialogOpen } from "../../../hooks/useDialogOpen"
import Dialog from "../../../components/dialog/Dialog"
import { AccountComponent } from "./AccountComponent"
import { useGuardianSetting } from "../../../hooks/useGurdianSetting"

import ACCOUNT from "../../../assets/images/guardian-setting/connetAccount.png"
import { COLORS } from "../../../styles/color"

export const GuardianInfo = ({ name, id }) => {
    // 연결 계정 삭제 다이얼로그 커스텀 훅
    const {
        dialogVisible, 
        openDialog, 
        handleRealDelete, 
        handleCancel 
    } = useDialogOpen();

    // 연결 계정 관리 커스텀 훅
    const {
        plus,
        selectedIndex,
        showToast,
        setShowToast,
        handleAddComponent,
        handleRegister,
        handleDeleteConfirm,
        handleChange,
        dynamicHeight,
        setSelectedIndex
    } = useGuardianSetting(openDialog, handleRealDelete);

    return (
        <SettingBox height = { dynamicHeight } title = "사용자 정보" bgColor = "#FFF3C7">
            <View style = { styles.content }>
                <NameIdGroup name = { name } id = { id } />
                <View style = { styles.accountContent }>
                    <View style = { styles.title }>
                        <Image source = { ACCOUNT } style = { styles.accountImg }/>
                        <Text style = { styles.mainText }>연결 계정</Text>
                        <Text style = { styles.subText }>
                            (일반 계정에 있는 고유 번호를 입력해 주세요)
                        </Text>
                    </View>

                    {/* 연결 계정 리스트 반복 렌더링 */}
                    { plus.map((component, index) => (
                            <AccountComponent 
                                key = { component.id }
                                value = { component.value }
                                isRegistered = { component.isRegistered }
                                onChangeText = { (text) => handleChange(index, text) }
                                onPress = { () => handleRegister(index) }
                                onDeletePress = { () => {
                                    setSelectedIndex(index);
                                    openDialog();
                                }}
                            />
                        ))}
                </View>
                <TouchableOpacity style = { styles.plusBox } onPress = { handleAddComponent }>
                    <Text style = { styles.plus }>+ 연결 계정 추가</Text>
                </TouchableOpacity>

                {/* 등록 성공 토스트 메시지 */}
                { showToast && (
                    <Toast
                        message = "연결 계정 등록 완료!"
                        onHide = { () => setShowToast(false) }
                    />
                )}
                
                {/* 연결 계정 삭제 다이얼로그 */}
                <Dialog
                    visible = { dialogVisible }
                    title = "연결 계정 삭제"
                    message = "연결 계정을 삭제하시겠습니까?"
                    subMessage = "서비스 이용을 위해 연결 계정을 등록해 주세요."
                    cancelText = "취소"
                    confirmText = "삭제하기"
                    onCancel = { handleCancel }
                    onConfirm = { handleDeleteConfirm }
                />
            </View>
        </SettingBox> 
            )
}

const styles = StyleSheet.create({
    content: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    accountContent: {
        flexDirection: "column",
        gap: 10
    },

    title: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        gap: 4.66
    },

    accountImg: {
        width: 27.34,
        height: 28,
        resizeMode: "contain"
    },

    mainText: {
        color: COLORS.BLACK,
        fontSize: 12,
        fontWeight: "500"
    },

    subText: {
        color: COLORS.SUB_BLACK,
        fontSize: 10,
        fontWeight: 400
    },

    plusBox: {
        justifyContent: "center",
        alignItems: "center",
        width: 102,
        height: 20,
        backgroundColor: COLORS.MAIN_YELLOW2,
        borderRadius: 10,
        borderColor: COLORS.MAIN_YELLOW3,
        borderWidth: 1,
        marginTop: 18
    },

    plus: {
        color: COLORS.BLACK,
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 15
    }
})