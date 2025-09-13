// 즐겨찾기 문장 삭제 API(DELETE)
import defaultInstance from "../utils/instance";

const deleteFavoriteApi = async (sentence) => {
  try {
    const response = await defaultInstance.delete(`/favorite`, {
      data: { sentence },
    });

    const { httpStatus, isSuccess, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
      console.log("즐겨찾기 삭제 성공");
      return true;
    } else if (httpStatus === 400 && !isSuccess) {
      console.warn("HTTP 요청 바디의 형식이 잘못됨:", message);
      return false;
    } else if (httpStatus === 409 && !isSuccess) {
      console.warn("해당 즐겨찾기를 조회할 수 없음:", message);
      return false;
    } else {
      console.warn("즐겨찾기 삭제 실패:", message);
      return false;
    }
  } catch (e) {
    console.error("즐겨찾기 삭제 에러:", e.response?.data || e.message);
    return false;
  }
};

export default deleteFavoriteApi;
