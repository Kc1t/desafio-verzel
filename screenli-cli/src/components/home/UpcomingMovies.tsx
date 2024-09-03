"use client";

// Modules
import { useEffect, useState } from "react";

// Services
import { getUpcoming } from "@/services/movie";

// Components
import MovieCard from "@/components/movie/MovieCard";

export default function UpcomingMovies() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getUpcoming();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col items-start justify-center gap-4 w-[90%] lg:w-[70%] tv:max-w-6xl">
      <span className="text-2xl font-bold text-white">
        Filmes Recém Lançados.
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 place-items-center items-center overflow-x-auto gap-6 w-full my-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
