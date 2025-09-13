import { useCallback, useEffect, useState } from "react";
import createFavoriteApi from "../apis/favorite/createFavoriteApi";

export default function useFavorite({
  text,
  setShowToast,
  createFavorite = createFavoriteApi,
}) {
  const [favLoading, setFavLoading] = useState(false);
  const [favSelected, setFavSelected] = useState(false);

  const canFavorite = !!text?.trim();

  // 텍스트가 바뀌면 별 선택 상태 초기화
  useEffect(() => {
    setFavSelected(false);
  }, [text]);

  // 즐겨찾기 등록
  const handleFavorite = useCallback(async () => {
    if (!canFavorite || favLoading) return;

    try {
      setFavLoading(true);
      const res = await createFavorite(text.trim());
      if (res) {
        setFavSelected(true);
        setShowToast?.(true);
      } else {
        console.warn("즐겨찾기 등록 실패");
      }
    } catch (e) {
      console.error("handleFavorite Error:", e);
    } finally {
      setFavLoading(false);
    }
  }, [canFavorite, favLoading, text, setShowToast, createFavorite]);

  return {
    favLoading,
    favSelected,
    canFavorite,
    handleFavorite,
  };
}
