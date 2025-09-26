// 일반사용자 이름 수정 API(PUT)
import defaultInstance from "../utils/instance";

const editUserNameApi = async (username) => {
  try {
    const response = await defaultInstance.put(`/users/me/username`, {
      username,
    });

    const { httpStatus, isSuccess, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
      console.log("일반사용자 이름 수정 성공");
      return true;
    } else {
      console.warn("일반사용자 이름 수정 실패:", message);
      return false;
    }
  } catch (e) {
    console.error("일반사용자 이름 수정 실패:", e);
    return false;
  }
};

export default editUserNameApi;
