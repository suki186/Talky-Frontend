// 즐겨찾기 문장 입력 API(POST)
import defaultInstance from "../utils/instance";

const createFavoriteApi = async (sentence) => {
  try {
    const response = await defaultInstance.post(`/favorite`, {
      sentence,
    });

    const { httpStatus, isSuccess, data, message } = response.data;

    if (httpStatus === 201 && isSuccess) {
      console.log("즐겨찾기 등록 성공");
      return data;
    } else if (httpStatus === 400 && !isSuccess) {
      console.warn("HTTP 요청 바디의 형식이 잘못됨:", message);
      return null;
    } else if (httpStatus === 409 && !isSuccess) {
      console.warn("이미 존재하는 즐겨찾기:", message);
      return null;
    } else {
      console.warn("즐겨찾기 등록 실패:", message);
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default createFavoriteApi;
