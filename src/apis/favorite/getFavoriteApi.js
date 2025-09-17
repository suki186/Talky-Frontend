// 즐겨찾기 문장 조회 API(GET)
import defaultInstance from "../utils/instance";

const getFavoriteApi = async () => {
  try {
    const response = await defaultInstance.get(`/favorite`);

    const { httpStatus, isSuccess, data, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
      console.log("즐겨찾기 조회 성공");
      return data?.favorites;
    } else if (httpStatus === 400 && !isSuccess) {
      console.warn("즐겨찾기 조회 실패 400:", message);
      return null;
    } else if (httpStatus === 404 && !isSuccess) {
      console.warn("즐겨찾기 조회 실패 404:", message);
      return null;
    } else {
      console.warn("즐겨찾기 조회 실패:", message);
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default getFavoriteApi;
