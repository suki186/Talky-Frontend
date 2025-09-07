import AsyncStorage from "@react-native-async-storage/async-storage";
import defaultInstance from "../utils/instance";

const loginUserApi = async (loginId, password) => {
  try {
    const response = await defaultInstance.post(`auth/login`, {
        loginId: loginId,
        password: password
    });
		const { httpStatus, isSuccess, data, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
      console.log("로그인 성공");
      await AsyncStorage.setItem("idtoken", data.token);
      await AsyncStorage.setItem("userType", data.userType);

      return {
        token: data.token,
        userId: data.userId,
        userType: data.userType,
        username: data.username,
      };

    } else {
      console.warn("로그인 실패: ", message);
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default loginUserApi;