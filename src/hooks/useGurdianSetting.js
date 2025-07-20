import { useState } from "react"

export const useGuardianSetting = (openDialog, handleRealDelete) => {
    const [plus, setPlus] = useState([{ id: Date.now(), isRegistered: false, value: "" }]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [showToast, setShowToast] = useState(false);

    // 추가 시 id 부여
    const handleAddComponent = () => {
        if (plus.length >= 5) return;
        setPlus((prev) => [
            ...prev,
            { id: Date.now() + Math.random(), isRegistered: false, value: "" }
        ]);
    };

    const handleRegister = (index) => {
        const updated = [...plus];

        if (!updated[index].isRegistered) {
            updated[index].isRegistered = true;
            setPlus(updated);           
            setShowToast(true);
        } else {
            setSelectedIndex(index);
            openDialog();
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
        showToast,
        setShowToast,
        handleAddComponent,
        handleRegister,
        handleDeleteConfirm,
        handleChange,
        dynamicHeight,
    };
}