import defaultInstance from "../utils/instance";

const guardianProfileApi = async () => {
  try {
    const response = await defaultInstance.get(`/guardians/me/profile`);
	
    const { httpStatus, isSuccess, data, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
      console.log("보호자 정보 조회 성공");
      return {
        name: data.username,
        id: data.loginId,
        userType: data.userType,
        locationEnabled: data.locationEnabled,
        connectedUsers: data.connectedUsers,
      };
    } else {
      console.warn("보호자 정보 조회 실패:", message);
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default guardianProfileApi;