import { useState, useCallback } from "react";
import {
  speak as speakUtil,
  stop as stopUtil,
  isSpeaking as isSpeakingUtil,
} from "../utils/tts";

export const useTTS = (
  defaultOptions = { language: "ko", pitch: 1.0, rate: 0.8 }
) => {
  const [speaking, setSpeaking] = useState(false);

  const speak = useCallback(
    (text, opts = {}) => {
      if (!text || text.trim().length === 0) return;

      setSpeaking(true);

      speakUtil(text, {
        ...defaultOptions,
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
    [defaultOptions]
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
