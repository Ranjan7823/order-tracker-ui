
import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://localhost:7188/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;