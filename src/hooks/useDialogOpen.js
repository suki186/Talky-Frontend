import { useState } from "react";
import deleteFavoriteApi from "../apis/favorite/deleteFavoriteApi";

export const useDialogOpen = () => {
  const [deleted, setDeleted] = useState([]); // 삭제 문장 인덱스 저장
  const [dialogVisible, setDialogVisible] = useState(false);
  const [targetIndex, setTargetIndex] = useState(null);
  const [targetItem, setTargetItem] = useState(null);

  const openDialog = (index, item) => {
    setTargetIndex(index);
    setTargetItem(item);
    setDialogVisible(true);
  };

  // 즐겨찾기 문장 삭제
  const handleRealDelete = async () => {
    if (!targetItem) return;

    try {
      const ok = await deleteFavoriteApi(targetItem);
      if (ok) {
        // UI 제거
        if (targetIndex !== null && !deleted.includes(targetIndex)) {
          setDeleted([...deleted, targetIndex]);
        }
        //console.log("즐겨찾기 삭제 완료:", targetItem);
      } else {
        console.warn("즐겨찾기 삭제 실패");
        console.log("삭제 대상:", `"${targetItem}!"`);
      }
    } catch (error) {
      console.error("즐겨찾기 삭제 실패:", error);
    } finally {
      setDialogVisible(false);
      setTargetIndex(null);
      setTargetItem(null);
    }
  };

  const handleCancel = () => {
    // 문장 삭제가 아닌 취소
    setDialogVisible(false);
    setTargetIndex(null);
    setTargetItem(null);
  };

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
