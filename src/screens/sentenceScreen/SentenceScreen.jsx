import { useState, useEffect } from "react";
import { SentenceModal } from "./components/SentenceModal";
import getFavoriteApi from "../../apis/favorite/getFavoriteApi";

export const SentenceScreen = ({ visible, onClose }) => {
  const [sentences, setSentences] = useState([]);
  const [loading, setLoading] = useState(false); // 추가: 로딩 상태

  useEffect(() => {
    if (!visible) return; // 모달 닫혀 있으면 호출 x

    let canceled = false;
    // 즐겨찾기 조회
    (async () => {
      setLoading(true); // 로딩 시작
      try {
        const list = await getFavoriteApi();

        if (canceled) return;

        if (list === null) {
          // 실패 → 빈 배열로
          console.warn("즐겨찾기 조회 실패");
          setSentences([]);
          return;
        }

        // 성공 → sentence만 뽑아 새 배열 만들기
        const onlySentences = list
          .map((item) => item?.sentence)
          .filter(Boolean);

        setSentences(onlySentences);
      } catch (e) {
        if (!canceled) {
          console.error("SentenceScreen useEffect Error:", e);
          setSentences([]);
        }
      } finally {
        if (!canceled) setLoading(false); // 로딩 종료
      }
    })();

    return () => {
      canceled = true; // 언마운트/닫힘 시 setState 방지
    };
  }, [visible]);

  return (
    <SentenceModal
      visible={visible}
      onClose={onClose}
      sentences={sentences}
      loading={loading} // 추가: 로딩 상태 전달
    />
  );
};
