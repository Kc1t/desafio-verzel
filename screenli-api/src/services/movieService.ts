import axios from "axios";
import { apiClient } from "../config/apiConfig";
const apiKey = process.env.TMDB_API;

export const fetchPopularMovies = async () => {
  try {
    const response = await apiClient.get("/movie/popular", {
      params: { page: 1 },
    });

    const genresResponse = await apiClient.get("/genre/movie/list");
    const genresList = genresResponse.data.genres.reduce(
      (acc: { [key: number]: string }, genre: any) => {
        acc[genre.id] = genre.name;
        return acc;
      },
      {}
    );

    const movies = response.data.results.slice(0, 4).map((movie: any) => ({
      ...movie,
      genres: movie.genre_ids.map((genreId: number) => ({
        id: genreId,
        name: genresList[genreId] || "Unknown",
      })),
    }));

    return movies;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw new Error("Error fetching movies");
  }
};

export const fetchHorrorMovies2024 = async () => {
  try {
    const response = await apiClient.get("/discover/movie", {
      params: {
        sort_by: "popularity.desc",
        with_genres: 27,
        primary_release_year: 2024,
        page: 1,
      },
    });

    const genresResponse = await apiClient.get("/genre/movie/list");
    const genresList = genresResponse.data.genres.reduce(
      (acc: { [key: number]: string }, genre: any) => {
        acc[genre.id] = genre.name;
        return acc;
      },
      {}
    );

    const movies = response.data.results.slice(0, 14).map((movie: any) => ({
      ...movie,
      genres: movie.genre_ids.map((genreId: number) => ({
        id: genreId,
        name: genresList[genreId] || "Unknown",
      })),
    }));

    return movies;
  } catch (error) {
    console.error("Error fetching horror movies 2024:", error);
    throw new Error("Error fetching horror movies 2024");
  }
};


export const fetchHighGrades2024 = async () => {
  try {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR&page=1`;

    const response = await axios.get(url);

    const genresResponse = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`
    );
    const genresList = genresResponse.data.genres.reduce(
      (acc: { [key: number]: string }, genre: any) => {
        acc[genre.id] = genre.name;
        return acc;
      },
      {}
    );

    // Mapeando os resultados para incluir os gêneros
    const movies = response.data.results.slice(0, 4).map((movie: any) => ({
      ...movie,
      genres: movie.genre_ids.map((genreId: number) => ({
        id: genreId,
        name: genresList[genreId] || "Unknown",
      })),
    }));

    return movies;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw new Error("Error fetching top-rated movies");
  }
};

export const fetchUpcoming = async () => {
  try {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=pt-BR&page=1`;

    const response = await axios.get(url);

    const genresResponse = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`
    );
    const genresList = genresResponse.data.genres.reduce(
      (acc: { [key: number]: string }, genre: any) => {
        acc[genre.id] = genre.name;
        return acc;
      },
      {}
    );

    const movies = response.data.results.slice(0, 4).map((movie: any) => ({
      ...movie,
      genres: movie.genre_ids.map((genreId: number) => ({
        id: genreId,
        name: genresList[genreId] || "Unknown",
      })),
    }));

    return movies;
  } catch (error) {
    console.error("Error fetching Upcoming movies:", error);
    throw new Error("Error fetching Upcoming movies");
  }
};

export const fetchMovieDetails = async (id: number) => {
  try {
    const movieResponse = await apiClient.get(`/movie/${id}`);
    const movie = movieResponse.data;

    const creditsResponse = await apiClient.get(`/movie/${id}/credits`);
    const credits = creditsResponse.data;

    const directors = credits.crew.filter(
      (member: any) => member.job === "Director"
    );
    const writers = credits.crew.filter(
      (member: any) => member.job === "Writer" || member.job === "Screenplay"
    );
    const cast = credits.cast.map((member: any) => ({
      id: member.id,
      name: member.name,
      character: member.character,
      profilePath: member.profile_path,
    }));

    return { ...movie, directors, writers, cast };
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw new Error("Error fetching movie details");
  }
};

export const searchMoviesService = async (query: string) => {
  try {
    const response = await apiClient.get("/search/movie", {
      params: { query, page: 1 },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching for movies:", error);
    throw new Error("Error searching for movies");
  }
};

export const fetchRelatedMovies = async (id: number) => {
  try {
    const response = await apiClient.get(`/movie/${id}/similar`);
    const movies = response.data.results;

    const genresResponse = await apiClient.get("/genre/movie/list");
    const genresList = genresResponse.data.genres.reduce(
      (acc: { [key: number]: string }, genre: any) => {
        acc[genre.id] = genre.name;
        return acc;
      },
      {}
    );

    return movies.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      posterPath: movie.poster_path,
      genres: movie.genre_ids.map((genreId: number) => ({
        id: genreId,
        name: genresList[genreId] || "Unknown",
      })),
    }));
  } catch (error) {
    console.error("Error fetching related movies:", error);
    throw new Error("Error fetching related movies");
  }
};
