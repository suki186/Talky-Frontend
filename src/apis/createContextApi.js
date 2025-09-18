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

    // 파일 첨부 (선택)
    if (file) {
      formData.append("file", {
        uri:
          Platform.OS === "android"
            ? file.uri
            : file.uri.replace("file://", ""),
        type: file.type || "audio/m4a",
        name: file.name || "record.m4a",
      });
    }

    // metadata JSON 문자열로 첨부
    const metadata = {
      keywords,
      context: context || "",
      choose: choose ?? null,
    };

    formData.append("metadata", JSON.stringify(metadata));

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
