import axios from "axios";

const BASE_URL = "https://emsapp1-production.up.railway.app/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Events
export const getEvents = () => api.get("/events");
export const createEvent = (data) => api.post("/events", data);

// Registration
export const registerUser = (data) => api.post("/reg", data);

// Auth
export const loginUser = (data) => api.post("/login", data);
export const signupUser = (data) => api.post("/signup", data);

export default api;