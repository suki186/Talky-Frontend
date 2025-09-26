import { useMemo, useState } from "react";

export const useInput = () => {
  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rightPressed, setRightPressed] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const status = useMemo(() => {
    if (submitted) return "submitted";
    if (text !== "") return "typing";
    if (focused) return "focused";
    return "default";
  }, [submitted, text, focused]);

  const getPlaceholderColor = () => {
    return status === "focused" ? "#D2D2D2" : "#767676";
  };

  const getInputBorderColor = () => {
    switch (status) {
      case "focused":
      case "typing":
        return "#FFD321CC";
      case "submitted":
        return "#FFD321";
      default:
        return "#FFEC9F33";
    }
  };

  const onFocus = () => {
    setFocused(true);
    setSubmitted(false);
    setRightPressed(false);
  };

  const onBlur = () => {
    setFocused(false);
    if (text.trim() === "") setSubmitted(false);
  };

  const onChangeText = (value) => {
    setText(value);
    if (submitted) setSubmitted(false);
    setRightPressed(false);
  };

  const onSubmit = () => {
    if (text.trim() !== "") setSubmitted(true);
  };

  const handleRightPress = () => {
    if (status === "submitted") setRightPressed(true);
  };

  return {
    text,
    status,
    rightPressed,
    showToast,
    setShowToast,
    getPlaceholderColor,
    getInputBorderColor,
    onFocus,
    onBlur,
    onChangeText,
    onSubmit,
    handleRightPress,
  };
};
