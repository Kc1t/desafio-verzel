// Modules
import Link from "next/link";

// Assets
import MoviesSvg from "@/assets/assets/svgs/MoviesSvg";

interface Genre {
  id: number;
  name: string;
}

interface RelatedMovie {
  id: number;
  title: string;
  posterPath: string | null;
  genres: Genre[];
}

interface RelatedMoviesProps {
  movies: RelatedMovie[];
}

const MovieRelated: React.FC<RelatedMoviesProps> = ({ movies }) => {
  return (
    <div className="w-[95%] lg:w-[85%] tv:max-w-7xl sm:px-6 lg:px-8 flex flex-col gap-4 mt-8 md:mt-12 tv:mt-0">
      <div className="flex items-center gap-2">
        <MoviesSvg />
        <span className="text-2xl font-bold text-white">
          Filmes Relacionados
        </span>
      </div>
      <div className="flex flex-row overflow-x-auto gap-4 w-full my-4">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <div className="flex flex-col items-start">
              <img
                src={
                  movie.posterPath
                    ? `https://image.tmdb.org/t/p/w200/${movie.posterPath}`
                    : "/ico.png"
                }
                alt={movie.title}
                className="w-[14rem] min-w-[14rem] max-w-[14rem] h-[25rem] min-h-[25rem] max-h-[25rem] rounded-md object-cover"
              />
              <div className="flex flex-col items-start w-full pb-6">
                <p className="text-white mt-2 text-left">{movie.title}</p>
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
        ))}
      </div>
    </div>
  );
};

export default MovieRelated;
