// Modules
import Link from "next/link";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
  };
}

export default function HorrorCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movies/${movie.id}`} className="w-full">
      <div className="flex flex-col items-start w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="h-[15rem] min-w-[10rem] min-h-[15rem] max-h-[15rem] rounded-md object-cover"
        />
      </div>
    </Link>
  );
}
