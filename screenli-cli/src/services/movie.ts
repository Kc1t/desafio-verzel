import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/movies`;

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

export const getHorrorMovies2024 = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/horror-movies-2024`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching horror movies 2024:", error);
    throw error;
  }
};

export const getUpcoming = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/upcoming`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching horror movies 2024:", error);
    throw error;
  }
};

export const getHighGrades2024 = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/high-grades-2024`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching horror movies 2024:", error);
    throw error;
  }
};

export const getMovieDetails = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie details for ID ${id}:`, error);
    throw error;
  }
};

export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/search`,
      {
        params: { query },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error searching for movies:", error);
    throw error;
  }
};

export const getRelatedMovies = async (id: number) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/movie/${id}/similar`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching related movies for ID ${id}:`, error);
    throw error;
  }
};
