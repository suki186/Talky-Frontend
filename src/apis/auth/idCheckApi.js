import defaultInstance from "../utils/instance";

const idCheckApi = async (loginId) => {
  try {
    const response = await defaultInstance.get(`/auth/check`, {
        params: { loginId }
    });
		const { httpStatus, isSuccess, data, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
      console.log("사용 가능한 아이디");
      return null;
    } else {
      console.warn("사용 불가능한 아이디: ", message);
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default idCheckApi;