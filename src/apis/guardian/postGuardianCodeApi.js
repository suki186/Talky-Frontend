import defaultInstance from "../utils/instance";

const postGuardianCodeApi = async (connectionCode) => {
  try {
    const response = await defaultInstance.post(`/guardians/me/connect`, {
        connectionCode: connectionCode
    });
	
    const { httpStatus, isSuccess, data, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
      console.log("사용자 연결 성공");
      return true;
    } else {
      console.warn("사용자 연결 실패: ", message);
      return false;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};

export default postGuardianCodeApi;