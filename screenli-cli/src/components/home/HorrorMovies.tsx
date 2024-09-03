"use client";

// Modules
import { useEffect, useState } from "react";

// Services
import { getHorrorMovies2024 } from "@/services/movie";

// Components
import Loading from "@/components/Loading";
import HorrorCard from "../movie/HorrorCard";

export default function HorrorMovies2024() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getHorrorMovies2024();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching horror movies 2024:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col items-start justify-center gap-2 w-full">
      <div className="flex flex-row overflow-x-auto gap-4 w-full my-4">
        {movies.length > 0 ? (
          movies.map((movie) => <HorrorCard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-white">Nenhum filme encontrado.</p>
        )}
      </div>
    </div>
  );
}
