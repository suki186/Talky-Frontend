import { useState } from "react"
import postGuardianCodeApi from "../apis/guardian/postGuardianCodeApi";

export const useGuardianSetting = (openDialog, handleRealDelete) => {
    const [plus, setPlus] = useState([{ id: Date.now(), isRegistered: false, value: "" }]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);

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
            setPlus((prev) => {
                const updated = [...prev];
                updated[index].isRegistered = true;
                return updated;
            });

            setToastMessage("연결 계정 등록 완료!");
            setShowToast(true);
        } else {
            setToastMessage("연결 계정 등록 실패");
            setShowToast(true);
        }
    };

    const handleDeleteConfirm = () => {
        setPlus(prev => prev.filter((_, i) => i !== selectedIndex));
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