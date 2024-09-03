"use client";

// Modules
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// Services
import { getMovieDetails, getRelatedMovies } from "@/services/movie";
import { getLists } from "@/services/list";

// Components
import Loading from "@/components/Loading";
import MoviesInfoHeader from "@/components/movies/MoviesInfoHeader";
import MoviesTopBar from "@/components/movies/MoviesTopBar";
import MovieCast from "@/components/movies/MovieCast";
import MovieRelated from "@/components/movies/MovieRelated";
import MovieAnnouncement from "@/components/movies/MovieAnnouncement";
import Footer from "@/components/Footer";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState<any>(null);
  const [relatedMovies, setRelatedMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [lists, setLists] = useState<any[]>([]);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (!id) return;

    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(Number(id));
        setMovie(movieData);

        const relatedMoviesData = await getRelatedMovies(Number(id));
        setRelatedMovies(relatedMoviesData);

        const listsData = await getLists();
        setLists(listsData);
      } catch (error) {
        console.error("Error fetching movie details or lists:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <Loading />;

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-between overflow-x-hidden bg-background-dark">
      <MoviesTopBar />
      <div className="w-full flex flex-col items-center">
        <MoviesInfoHeader
          title={movie.title}
          overview={movie.overview}
          voteAverage={movie.vote_average}
          releaseDate={movie.release_date}
          runtime={movie.runtime}
          genres={movie.genres}
          backdropPath={movie.backdrop_path}
          posterPath={movie.poster_path}
          directors={movie.directors}
          writers={movie.writers}
          lists={lists}
          movieId={Number(id)}
        />
        <MovieCast cast={movie.cast} />
        <MovieRelated movies={relatedMovies} />
        <MovieAnnouncement />
      </div>
      <Footer />
    </div>
  );
}
