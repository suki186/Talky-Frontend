// 보호자 정보 수정 API(PUT)
import defaultInstance from "../utils/instance";

const editUserGuardianInfoApi = async (guardianName, guardianPhone) => {
  try {
    const response = await defaultInstance.put(`/users/me/guardianInfo`, {
      guardianName,
      guardianPhone,
    });

    const { httpStatus, isSuccess, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
      console.log("보호자 정보 수정 성공");
      return true;
    } else {
      console.warn("보호자 정보 수정 실패:", message);
      return false;
    }
  } catch (e) {
    console.error("보호자 정보 수정 실패:", e);
    return false;
  }
};

export default editUserGuardianInfoApi;
