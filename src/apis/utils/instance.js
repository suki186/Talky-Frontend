import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

const defaultInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

defaultInstance.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("idtoken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  //console.log("요청 body:", JSON.stringify(config.data)); // 디버깅용
  return config;
});

export default defaultInstance;
