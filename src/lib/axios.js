import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fullstack-chat-app-d20c.onrender.com/api",
  withCredentials: true,
});
// http://localhost:5001
