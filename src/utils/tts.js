import * as Speech from "expo-speech";

// TTS 실행
export const speak = (text, opts = {}) => {
  if (!text || text.trim().length === 0) return;

  try {
    Speech.speak(text, {
      language: opts.language,
      pitch: opts.pitch,
      rate: opts.rate,
      onStart: opts.onStart,
      onDone: opts.onDone,
      onError: opts.onError,
    });
  } catch (e) {
    opts.onError?.(e);
  }
};

// 말하기 중지
export const stop = async () => {
  try {
    await Speech.stop();
  } catch (e) {
    console.warn("TTS stop error:", e);
  }
};

// 현재 말하기 상태
export const isSpeaking = async () => {
  try {
    return await Speech.isSpeakingAsync();
  } catch {
    return false;
  }
};

// 사용 가능한 음성 목록
export const getAvailableVoices = async () => {
  try {
    return await Speech.getAvailableVoicesAsync();
  } catch {
    return [];
  }
};
