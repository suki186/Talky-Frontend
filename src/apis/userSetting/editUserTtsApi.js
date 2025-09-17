// 일반사용자 TTS 설정 수정 API(PUT)
import defaultInstance from "../utils/instance";

const editUserTtsApi = async ({ ttsSpeed, ttsLanguage, ttsGender }) => {
  try {
    const response = await defaultInstance.put(`/users/me/tts`, {
      ttsSpeed,
      ttsLanguage,
      ttsGender,
    });

    const { httpStatus, isSuccess, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
      console.log("일반사용자 TTS 설정 수정 성공");
      return true;
    } else {
      console.warn("일반사용자 TTS 설정 수정실패:", message);
      return false;
    }
  } catch (e) {
    console.error("일반사용자 TTS 설정 수정 실패:", e);
    return false;
  }
};

export default editUserTtsApi;
