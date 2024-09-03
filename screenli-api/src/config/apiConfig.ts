import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.TMDB_API;
const BASE_URL = "https://api.themoviedb.org/3";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "pt-BR",
  },
});
