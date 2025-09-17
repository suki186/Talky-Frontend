import defaultInstance from "../utils/instance";

const getConnectUserApi = async () => {
  try {
    const response = await defaultInstance.get(`/guardians/me/connected-users`);
	
    const { httpStatus, isSuccess, data, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
        console.log("연결된 사용자 목록 조회 성공");
        return data;
    } else {
        console.warn("연결된 사용자 목록 조회 실패: ", message);
        return [];
    }
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default getConnectUserApi;