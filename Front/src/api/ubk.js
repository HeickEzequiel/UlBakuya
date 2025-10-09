import axios from "axios";
import userStore from "../store/loginStore";

const api = axios.create({
  //baseURL: "http://localhost:3001",
  baseURL: "ul-bakuya.vercel.app",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // token vencido
      userStore.getState().logout(); 
      window.location.href = "/login"; 
    }
    return Promise.reject(error);
  }
)
export default api;