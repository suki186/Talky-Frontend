import defaultInstance from "../utils/instance";

const sentencePracticeApi = async (pracId) => {
  try {
    const response = await defaultInstance.get(`/prac`, {
      params: { pracId } 
    });
    
		const { httpStatus, isSuccess, data, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
      console.log("연습 조회 성공");
      return data;
    } else {
      console.warn("연습 조회 실패: ", message);
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default sentencePracticeApi;