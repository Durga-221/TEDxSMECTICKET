import axios from "axios";

const api = axios.create({
  baseURL: mport.meta.env.VITE_API_BASE_URL
});

export default api;
