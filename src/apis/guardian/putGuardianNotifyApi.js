import defaultInstance from "../utils/instance";

const putGuardianNotifyApi = async (locationEnabled) => {
  try {
      if (locationEnabled) {
      console.log("위치 알림 켜기 요청");
    } else {
      console.log("위치 알림 끄기 요청");
    }

    const response = await defaultInstance.put(`/guardians/me/location-alert`, {
        locationEnabled: locationEnabled
    });
	
    const { httpStatus, isSuccess, data, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
      console.log("알림 설정 성공");
      return true;
    } else {
      console.warn("알림 설정 실패: ", message);
      return false;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};

export default putGuardianNotifyApi;