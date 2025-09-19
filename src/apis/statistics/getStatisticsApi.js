import defaultInstance from "../utils/instance";

const getConnectUserApi = async (normalId) => {
  try {
    const response = await defaultInstance.get(`/guardians/me/statistics/${normalId}`);
	
    const { httpStatus, isSuccess, data, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
        console.log("연결된 피보호자 통계 조회 성공");
        return data;
    } else {
        console.warn("연결된 피보호자 통계 조회 실패: ", message);
        return [];
    }
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default getConnectUserApi;