// Modules
import Link from "next/link";

// Props
interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
  };
}

export default function SearchMovieCard({ movie }: MovieCardProps) {
  const truncateTitle = (title: string) => {
    return title.length > 14 ? `${title.substring(0, 14)}...` : title;
  };

  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="p-2 flex flex-col justify-between">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
              : "/ico.png"
          }
          alt={movie.title}
          className="w-full min-h-[10rem] h-[10rem] max-h-[10rem] lg:min-h-[17rem] lg:h-[17rem] lg:max-h-[17rem] object-cover rounded-md opacity-100 hover:opacity-[0.8] transition-all ease-in-out duration-300"
        />
        <h2 className="mt-2 text-md font-bold text-white">
          {truncateTitle(movie.title)}
        </h2>
        <p className="text-sm text-white/80">{movie.release_date}</p>
      </div>
    </Link>
  );
}
