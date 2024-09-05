import axios from "axios";
import { userToken } from "../store/auth";
import store from "../store/store";
const token = userToken(store.getState());
const lang = localStorage.getItem("lang")
  ? JSON.parse(localStorage.getItem("lang"))
  : "ar";
const client = axios.create({
  baseURL: "https://alternatifurunler.com/api",
  headers: {
    "Content-Type": "application/json",
    lang: lang,
    "Accept-Language": lang,
    "Access-Control-Allow-Credentials": true,
    Authorization: token ? `Bearer ${token}` : null,
  },
});
client.interceptors.request.use((config) => {
  const token =
    userToken(store.getState()) || JSON.parse(localStorage.getItem("token"));

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  // config.params = {
  //   ...config.params, // الاحتفاظ بأي parameters حالية
  //   lang: lang,
  // };
  return config;
});
export const request = ({ ...options }) => {
  const onSuccess = (response) => {
    return response;
  };
  const onError = (error) => {
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
