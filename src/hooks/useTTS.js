import { useState, useCallback } from "react";
import { useVoiceSettings } from "../context/VoiceSettingsContext";
import {
  speak as speakUtil,
  stop as stopUtil,
  isSpeaking as isSpeakingUtil,
} from "../utils/tts";

export const useTTS = () => {
  const [speaking, setSpeaking] = useState(false);
  const { settings } = useVoiceSettings();
  const { ttsLanguage, ttsSpeed, ttsGender } = settings; // context 값 가져오기

  const speak = useCallback(
    (text, opts = {}) => {
      if (!text || text.trim().length === 0) return;

      setSpeaking(true);

      const genderPitch = ttsGender === "male" ? 0.6 : 1.1;

      speakUtil(text, {
        language: ttsLanguage, // 언어
        rate: ttsSpeed, // 속도
        pitch: genderPitch, // 성별
        ...opts,
        onDone: () => {
          setSpeaking(false);
          opts.onDone?.();
        },
        onError: (e) => {
          setSpeaking(false);
          opts.onError?.(e);
        },
      });
    },
    [ttsLanguage, ttsSpeed, ttsGender]
  );

  const stop = useCallback(async () => {
    await stopUtil();
    setSpeaking(false);
  }, []);

  const isSpeaking = useCallback(async () => {
    return await isSpeakingUtil();
  }, []);

  return {
    speaking, // 말하는 중인지
    speak,
    stop,
    isSpeaking,
  };
};
