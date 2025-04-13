import axios from "axios";

const api = axios.create({
  baseURL: "https://dashboard.render.com/web/srv-cvqjk8h5pdvs73afbafg/deploys/dep-cvu03e3uibrs73egmj90", // ← твой backend URL
});

export default api;