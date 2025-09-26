import defaultInstance from "../utils/instance";

const signupUserApi = async (username, loginId, password, userType) => {
  try {
    const response = await defaultInstance.post(`/auth/signUp`, {
        username: username,
        loginId: loginId,
        password: password,
        userType: userType
    });
		const { httpStatus, isSuccess, data, message } = response.data;

    if (httpStatus === 201 && isSuccess) {
      console.log("회원가입 성공");
      return data.userId;
    } else {
      console.warn("회원가입 실패:", message);
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default signupUserApi;