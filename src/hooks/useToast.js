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
    setIsSpeaking((prev) => {
      const next = !prev;
      if (next) {
        triggerToast("따라 말해 보세요!", REPEAT);
      }
      return next;
    });
  };

  /** 답변 선택 */
  const handleSelectAnswer = () => {
    triggerToast("대단해요!", REPEATGOOD);
    setIsAnswered(true);
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
    hideToast,
    resetState,
  };
};
