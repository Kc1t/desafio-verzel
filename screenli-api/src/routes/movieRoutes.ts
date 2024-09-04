import express from "express";
import {
  getPopularMovies,
  getMovieDetails,
  searchMovies,
  getRelatedMovies,
  getHorrorMovies2024,
  getHighGrades2024,
  getUpcoming,
} from "../controllers/movieController";

const router = express.Router();

router.get("/movies", getPopularMovies);
router.get("/movies/:id", getMovieDetails);
router.get("/search", searchMovies);
router.get("/movie/:id/similar", getRelatedMovies);
router.get("/horror-movies-2024", getHorrorMovies2024);
router.get("/high-grades-2024", getHighGrades2024);
router.get("/upcoming", getUpcoming);

export default router;
