import { useState } from "react";
import { useVoiceSettings } from "../context/VoiceSettingsContext";
import {
  speak as speakUtil,
  stop as stopUtil,
  isSpeaking as isSpeakingUtil,
} from "../utils/tts";

export const useTTS = () => {
  const [speaking, setSpeaking] = useState(false);
  const { settings } = useVoiceSettings();

  // speak 호출 시점에 최신 settings 참조
  const speak = (text, opts = {}) => {
    if (!text || text.trim().length === 0) return;

    setSpeaking(true);

    const genderPitch = settings.ttsGender === "male" ? 0.6 : 1.1;

    speakUtil(text, {
      language: settings.ttsLanguage,
      rate: settings.ttsSpeed,
      pitch: genderPitch,
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
  };

  const stop = async () => {
    await stopUtil();
    setSpeaking(false);
  };

  const isSpeaking = async () => {
    return await isSpeakingUtil();
  };

  return { speaking, speak, stop, isSpeaking };
};
