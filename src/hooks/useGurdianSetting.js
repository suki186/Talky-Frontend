import { useEffect, useState } from "react"
import postGuardianCodeApi from "../apis/guardian/postGuardianCodeApi";
import deleteGuardianCodeApi from "../apis/guardian/deleteGuardianCodeApi";
import getConnectUserApi from "../apis/guardian/getConnectUserApi";

export const useGuardianSetting = (openDialog, handleRealDelete) => {
    const [plus, setPlus] = useState([{ id: Date.now(), isRegistered: false, value: "" }]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);

    const refreshUsers = async () => {
        const users = await getConnectUserApi();
        setPlus(
            users.length > 0
            ? users.map((u) => ({
                id: u.id,
                userId: u.id,
                value: u.connectionCode,
                isRegistered: true,
                }))
            : [{ id: Date.now(), isRegistered: false, value: "" }]
        );
    };

    useEffect(() => { refreshUsers(); }, []);

    // 추가 시 id 부여
    const handleAddComponent = () => {
        if (plus.length >= 5) return;
        setPlus((prev) => [
            ...prev,
            { id: Date.now() + Math.random(), isRegistered: false, value: "" }
        ]);
    };

    const handleRegister = async (index) => {
        const code = plus[index].value;
        const success = await postGuardianCodeApi(code);

        if (success) {
            await refreshUsers();
            setToastMessage("연결 계정 등록 완료!");
        } else {
            setToastMessage("연결 계정 등록 실패");
        }
        setShowToast(true);
    };

    const handleDeleteConfirm = async () => {
        const normalUserId = plus[selectedIndex]?.userId;
        const success = await deleteGuardianCodeApi(normalUserId);

        if (success) {
            await refreshUsers();
        };

        handleRealDelete();
    };

    const handleChange = (index, text) => {
        setPlus(prev => {
            const updated = [...prev];
            updated[index].value = text;
            return updated;
        });
    };

    const dynamicHeight = 216 + (plus.length - 1) * 30;

    return {
        plus,
        setPlus,
        selectedIndex,
        setSelectedIndex,
        toastMessage,
        showToast,
        setShowToast,
        handleAddComponent,
        handleRegister,
        handleDeleteConfirm,
        handleChange,
        dynamicHeight,
    };
}