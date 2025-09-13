import editUserNameApi from "../../apis/userSetting/editUserNameApi";
import editUserIntroApi from "../../apis/userSetting/editUserIntroApi";
import editUserSosApi from "../../apis/userSetting/editUserSosApi";
import editUserTtsApi from "../../apis/userSetting/editUserTtsApi";

export const buildUserSettingHandlers = (setUser) => {
  // 일반사용자 이름 변경 함수
  const handleUserNameChange = async (newName) => {
    if (!newName) return { ok: false, error: "빈 이름" };
    try {
      const res = await editUserNameApi(newName);

      if (res === true) {
        setUser((prev) => (prev ? { ...prev, username: newName } : prev));
        return { ok: true };
      } else {
        console.warn("handleUserNameChange False: ", res);
        return { ok: false, error: res };
      }
    } catch (error) {
      console.error("handleUserNameChange Error: ", error);
      return { ok: false, error };
    }
  };

  // 일반사용자 소개글 변경 함수
  const handleUserIntroChange = async (newIntro) => {
    if (newIntro == null) return;
    try {
      const res = await editUserIntroApi(newIntro);

      if (res === true || res?.ok === true) {
        setUser((prev) => (prev ? { ...prev, introduction: newIntro } : prev));
        return { ok: true };
      } else {
        console.warn("handleIntroChange False: ", res);
        return { ok: false, error: res };
      }
    } catch (error) {
      console.error("handleIntroChange Error: ", error);
      return { ok: false, error };
    }
  };

  // 일반사용자 긴급호출 대상 변경 함수
  const handleSosChange = async (target) => {
    if (target == null) return;

    try {
      const res = await editUserSosApi(target);
      if (res === true || res?.ok === true) {
        setUser((prev) => (prev ? { ...prev, emergencyTarget: target } : prev));
        return { ok: true };
      } else {
        console.warn("handleSosChange False: ", res);
        return { ok: false, error: res };
      }
    } catch (error) {
      console.error("handleSosChange Error: ", error);
      return { ok: false, error };
    }
  };

  // 일반사용자 TTS 설정 함수
  const handleTtsChange = async ({ ttsSpeed, ttsLanguage, ttsGender }) => {
    try {
      const res = await editUserTtsApi({ ttsSpeed, ttsLanguage, ttsGender });

      if (res === true || res?.ok === true) {
        setUser((prev) =>
          prev
            ? { ...prev, ttsSettings: { ttsSpeed, ttsLanguage, ttsGender } }
            : prev
        );
        return { ok: true };
      } else {
        console.warn("handleTtsChange False: ", res);
        return { ok: false, error: res };
      }
    } catch (error) {
      console.error("handleTtsChange Error: ", error);
      return { ok: false, error };
    }
  };

  return {
    handleUserNameChange,
    handleUserIntroChange,
    handleSosChange,
    handleTtsChange,
  };
};
