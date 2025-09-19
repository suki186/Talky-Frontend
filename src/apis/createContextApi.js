// AI 문장 추천 API(POST)
import defaultInstance from "./utils/instance";
import { Platform } from "react-native";

const createContextApi = async ({
  file = null,
  keywords = [],
  context = "",
  choose = null,
}) => {
  if (!keywords.length) {
    console.warn("keywords는 최소 1개 이상이어야 합니다.");
    return null;
  }

  try {
    const formData = new FormData();

    if (file && file.uri) {
      // Android/iOS에 따라 uri 처리
      const uri =
        Platform.OS === "android" ? file.uri : file.uri.replace("file://", "");
      const name = file.name || `record-${Date.now()}.m4a`; // 이름 동적 생성
      const type = file.type || "audio/m4a";

      formData.append("file", {
        uri,
        type,
        name,
      });
    }

    // metadata JSON 문자열로 첨부
    const metadata = {
      keywords,
      context: context || "",
      choose: choose ?? null,
    };
    formData.append("metadata", JSON.stringify(metadata));
    console.log("[createContextApi] metadata:", metadata);

    //console.log("[createContextApi] API 요청 전송");
    const response = await defaultInstance.post(
      `/recommendations/context`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const { httpStatus, isSuccess, data, message } = response.data;

    if (httpStatus === 200 && isSuccess) {
      console.log("AI 문장 추천 성공");
      return data;
    } else {
      console.warn("AI 문장 추천 실패:", message);
      return null;
    }
  } catch (e) {
    console.error("createContextApi error:", e);
    return null;
  }
};

export default createContextApi;
