import { useState } from "react";
import REPEAT from "../assets/images/practice/repeat.png";
import REPEATGOOD from "../assets/images/practice/repeatGood.png";

export const useToast = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastImage, setToastImage] = useState(null);

  /** 말하기 토글 */
  const handleSpeakToggle = () => {
    setIsSpeaking((prev) => !prev);
  };

  /** 답변 선택 */
  const handleSelectAnswer = () => {
    triggerToast("따라 말해 보세요!", REPEAT);
    setIsAnswered(true);
  };

  /** 다음 버튼 클릭 */
  const handleNext = () => {
    triggerToast("대단해요!", REPEATGOOD); // 새 함수 추가
    setIsAnswered(false);
  };

  /** 토스트 띄우기 */
  const triggerToast = (message, image) => {
    setToastMessage(message);
    setToastImage(image);
    setShowToast(true);
  };

  /** 토스트 숨기기 */
  const hideToast = () => setShowToast(false);

  /** 문장 초기화 */
  const resetState = () => {
    setIsSpeaking(false);
    setIsAnswered(false);
    setShowToast(false);
    setToastMessage("");
    setToastImage(null);
  };

  return {
    isSpeaking,
    setIsSpeaking,
    isAnswered,
    setIsAnswered,
    showToast,
    toastMessage,
    toastImage,
    handleSpeakToggle,
    handleSelectAnswer,
    handleNext,
    hideToast,
    resetState,
  };
};
