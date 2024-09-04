// Modules
import Link from "next/link";

// Lib
import { formatDate } from "@/lib/formatDate";

// Props
interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    genres: { id: number; name: string }[];
  };
}

export default function MovieCard({ movie }: MovieCardProps) {
  const formattedDate = formatDate(movie.release_date);

  return (
    <Link href={`/movies/${movie.id}`} className="w-full">
      <div className="flex flex-col items-start w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="h-[25rem] w-full min-h-[25rem] max-h-[25rem] rounded-md object-cover opacity-100 hover:opacity-[0.8] transition-all ease-in-out duration-300"
        />
        <div className="flex flex-col gap-2 items-start w-full pb-6">
          <p className="text-[#9CA3AF] text-xs pt-4">{formattedDate}</p>
          <p className="text-white text-left">{movie.title}</p>
          <div className="flex flex-wrap justify-start items-start gap-1 text-[#9CA3AF] text-xs">
            {movie.genres.map((genre) => (
              <p key={genre.id} className="">
                {genre.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
