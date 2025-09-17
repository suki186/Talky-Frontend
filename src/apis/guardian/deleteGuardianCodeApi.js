import defaultInstance from "../utils/instance";

const deleteGuardianCodeApi = async (normalUserId) => {
  try {
    const response = await defaultInstance.delete(`/guardians/me/connect/${normalUserId}`);
	
    const { httpStatus, isSuccess, data, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
      console.log("사용자 연결 삭제 성공");
      return true;
    } else if (httpStatus === 400){
      console.warn("연결되지 않은 사용자");
      return false;
    } else if (httpStatus === 404) {
        console.warn("존재하지 않는 사용자");
        return false;
    } else {
        console.warn("사용자 연결 삭제 실패: ", message);
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};

export default deleteGuardianCodeApi;