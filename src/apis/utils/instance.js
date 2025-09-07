import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

const defaultInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

export default defaultInstance;
