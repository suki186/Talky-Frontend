import axios from "axios";

const GOOGLE_BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json";
const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

export const getDistrictFromCoords = async (lat, lon) => {
  try {
    const response = await axios.get(GOOGLE_BASE_URL, {
      params: {
        latlng: `${lat},${lon}`,
        key: GOOGLE_API_KEY,
        language: "ko", // 한국어 결과
      },
    });

    if (response.data.status === "OK") {
      const results = response.data.results;

      for (const comp of results[0].address_components) {
        if (
          comp.types.includes("sublocality_level_1") ||
          comp.types.includes("administrative_area_level_2")
        ) {
          return comp.long_name;
        }
      }
      return results[0].formatted_address;
    }

    console.error("위치 불러오기 실패");
  } catch (error) {
    console.error("위치 불러오기 실패");
  }
};
