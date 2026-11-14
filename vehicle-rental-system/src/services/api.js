import axios from "axios";

const api = axios.create({
 baseURL: "https://vehicle-backend-scup.onrender.com/"
});

export default api;