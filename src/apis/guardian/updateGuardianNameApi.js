import defaultInstance from "../utils/instance";

const updateGuardianNameApi = async (username) => {
  try {
    const response = await defaultInstance.put(`/guardians/me/username`, {
        username: username
    });
	
    const { httpStatus, isSuccess, data, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
      console.log("사용자 이름 수정 성공");
      return true;
    } else {
      console.warn("사용자 이름 수정 실패: ", message);
      return false;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};

export default updateGuardianNameApi;