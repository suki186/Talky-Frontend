import { useState } from "react";

export const useDialogOpen = () => {
    const [deleted, setDeleted] = useState([]); // 삭제 문장 인덱스 저장
    const [dialogVisible, setDialogVisible] = useState(false);
    const [targetIndex, setTargetIndex] = useState(null);
    const [targetItem, setTargetItem] = useState(null);
    // const [targetSentence, setTargetSentence] = useState("");

    const openDialog = (index, item) => {
        // setPendingDeleteIndex(index);
        setTargetIndex(index);
        setTargetItem(item);
        setDialogVisible(true);
    }

    const handleRealDelete = () => { // 문장 삭제
        if (targetIndex !== null && !deleted.includes(targetIndex)) {
            setDeleted([...deleted, targetIndex]);
        } 

        setDialogVisible(false);
        setTargetIndex(null);
        setTargetItem(null);
    }

    const handleCancel = () => { // 문장 삭제가 아닌 취소
        setDialogVisible(false);
        setTargetIndex(null);
        setTargetItem(null);
    }

    return {
        deleted,
        dialogVisible,
        targetIndex,
        targetItem,
        openDialog,
        handleRealDelete,
        handleCancel,
    };
};
