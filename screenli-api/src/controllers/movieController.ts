import { Request, Response } from "express";
import {
  fetchPopularMovies,
  fetchMovieDetails,
  searchMoviesService,
  fetchRelatedMovies,
  fetchHorrorMovies2024,
  fetchHighGrades2024,
  fetchUpcoming,
} from "../services/movieService";

export const getPopularMovies = async (req: Request, res: Response) => {
  try {
    const movies = await fetchPopularMovies();
    res.json(movies);
  } catch (error) {
    console.error("Error in getPopularMovies:", error);
    res.status(500).json({ message: "Error fetching movies" });
  }
};

export const getMovieDetails = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const movie = await fetchMovieDetails(Number(id));
    res.json(movie);
  } catch (error) {
    console.error("Error in getMovieDetails:", error);
    res.status(500).json({ message: "Error fetching movie details" });
  }
};


export const searchMovies = async (req: Request, res: Response) => {
  const { query } = req.query as { query: string };
  try {
    const movies = await searchMoviesService(query);
    res.json(movies);
  } catch (error) {
    console.error("Error in searchMovies:", error);
    res.status(500).json({ message: "Error searching for movies" });
  }
};

export const getRelatedMovies = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const movies = await fetchRelatedMovies(Number(id));
    res.json(movies);
  } catch (error) {
    console.error("Error in getRelatedMovies:", error);
    res.status(500).json({ message: "Error fetching related movies" });
  }
};


export const getHorrorMovies2024 = async (req: Request, res: Response) => {
  try {
    const movies = await fetchHorrorMovies2024();
    res.json(movies);
  } catch (error) {
    console.error("Error in getHorrorMovies2024:", error);
    res.status(500).json({ message: "Error fetching horror movies of 2024" });
  }
};

export const getHighGrades2024 = async (req: Request, res: Response) => {
  try {
    const movies = await fetchHighGrades2024();
    res.json(movies);
  } catch (error) {
    console.error("Error in getHighGrades2024:", error);
    res.status(500).json({ message: "Error fetching horror movies of 2024" });
  }
};

export const getUpcoming = async (req: Request, res: Response) => {
  try {
    const movies = await fetchUpcoming();
    res.json(movies);
  } catch (error) {
    console.error("Error in getUpcoming:", error);
    res.status(500).json({ message: "Error fetching" });
  }
};



