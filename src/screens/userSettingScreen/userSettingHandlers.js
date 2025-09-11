import editUserNameApi from "../../apis/userSetting/editUserNameApi";
import editUserIntroApi from "../../apis/userSetting/editUserIntroApi";

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

  return {
    handleUserNameChange,
    handleUserIntroChange,
  };
};
