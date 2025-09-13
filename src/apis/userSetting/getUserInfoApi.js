// 일반사용자 정보 조회 API (GET)
import defaultInstance from "../utils/instance";

const getUserInfoApi = async () => {
  try {
    const res = await defaultInstance.get(`/users/me/profile`);
    const { httpStatus, isSuccess, data, message } = res.data;

    if (httpStatus === 200 && isSuccess) {
      console.log("일반사용자 정보 조회 성공");
      //console.log("getUserInfoApi data:", data);
      return data;
    } else if (httpStatus === 404 && !isSuccess) {
      console.warn("존재하지 않는 사용자: ", message);
      return null;
    } else {
      console.warn("일반사용자 정보 조회 실패: ", message);
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default getUserInfoApi;
