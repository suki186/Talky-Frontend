// TTS 음성 설정 Contaxt
import React, { createContext, useContext, useState } from "react";

const VoiceSettingsContext = createContext();

export const VoiceSettingsProvider = ({ children, initialSettings }) => {
  const [settings, setSettings] = useState(
    initialSettings || {
      ttsSpeed: 1.0,
      ttsLanguage: "ko",
      ttsGender: "male",
    }
  );

  return (
    <VoiceSettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </VoiceSettingsContext.Provider>
  );
};

export const useVoiceSettings = () => useContext(VoiceSettingsContext);
