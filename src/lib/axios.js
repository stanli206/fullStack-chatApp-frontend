// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: "https://fullstack-chat-app-d20c.onrender.com/api",
//   withCredentials: true,
// });
// // http://localhost:5001

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:5001/api"
      : "https://fullstack-chat-app-d20c.onrender.com/api",
  withCredentials: true,
});
