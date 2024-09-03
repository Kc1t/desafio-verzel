// Modules
import React, { useState } from "react";
import Link from "next/link";

// Lib
import { formatDate } from "@/lib/formatDate";

// Components
import { Button } from "../ui/button";
import MovieAddList from "./MovieAddList";

// Assets
import AddSvg from "@/assets/assets/svgs/AddSvg";

// Props
interface MovieTitleProps {
  title: string;
  overview: string;
  voteAverage: number;
  releaseDate: string;
  runtime: number;
  genres: Array<{ id: number; name: string }>;
  backdropPath: string | null;
  posterPath: string | null;
  directors: Array<{ id: number; name: string }>;
  writers: Array<{ id: number; name: string }>;
  lists: Array<{ _id: string; name: string }>;
  movieId: number;
}

const CircularProgress = ({ percentage }: { percentage: number }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getColor = (percent: number) => {
    if (percent < 25) return "text-red-500";
    if (percent < 50) return "text-orange-500";
    if (percent < 75) return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <div className="relative w-14 h-14">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-sub-dark"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        <circle
          className={`${getColor(
            percentage
          )} transition-all duration-300 ease-in-out`}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm text-white font-bold">{percentage}%</span>
      </div>
    </div>
  );
};

const MoviesInfoHeader: React.FC<MovieTitleProps> = ({
  title,
  overview,
  voteAverage,
  releaseDate,
  runtime,
  genres,
  backdropPath,
  posterPath,
  directors,
  writers,
  lists,
  movieId,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const formattedDate = formatDate(releaseDate);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const percentage = Math.round(voteAverage * 10);

  return (
    <div className="w-full flex flex-col items-center justify-center my-12">
      <div className="w-[95%] lg:w-[85%] tv:max-w-7xl sm:px-6 lg:px-8">
        <div
          className="relative w-full min-h-[700px] rounded-2xl px-8 flex flex-col lg:flex-row items-center justify-center bg-cover bg-center bg-no-repeat py-4"
          style={{
            backgroundImage: backdropPath
              ? `url(https://image.tmdb.org/t/p/original/${backdropPath})`
              : "none",
          }}
        >
          <div className="absolute rounded-2xl backdrop-blur-[4px] w-full h-full inset-0 object-cover z-[2]"></div>
          <div className="absolute rounded-2xl bg-gradient-to-t from-background-dark to-bg-background-dark/10 w-full h-full inset-0 object-cover z-[2]"></div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
            alt={title}
            className="lg:mx-0 w-full max-w-xs h-[25rem] md:h-auto object-cover rounded-xl z-[10]"
          />
          <div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 z-[1]"></div>
            <div className="relative z-[2] lg:pl-6 gap-2 flex flex-col text-center lg:text-left">
              <div className="flex items-center justify-between md:justify-start gap-4">
                <h1 className="text-2xl py-4 md:py-0 md:text-4xl text-left font-bold text-white">
                  {title}
                </h1>
                {isLoggedIn && (
                  <button
                    className="flex items-center justify-center bg-sub-dark hover:bg-sub-dark/40 transition-all ease-in-out duration-300 border border-white/20 h-10 w-10 cursor-pointer rounded-full"
                    onClick={() => setModalOpen(true)}
                  >
                    <AddSvg />
                  </button>
                )}
              </div>
              <div className="md:hidden flex items-center gap-2 pt-2 w-full flex-wrap justify-center md:justify-start">
                <CircularProgress percentage={percentage} />
                <div className="flex flex-col text-left items-start justify-start w-full">
                  <p className="text-md text-white xl:ml-2">{formattedDate}</p>
                  <div className="flex justify-center items-center gap-2 text-white text-md">
                    {genres.map((genre) => (
                      <p key={genre.id} className="text-white">
                        {genre.name}
                      </p>
                    ))}
                  </div>
                  <p className="text-md text-white">{runtime} Minutos</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 pt-2 w-full flex-wrap justify-center md:justify-start">
                <CircularProgress percentage={percentage} />
                <p className="text-md text-white xl:ml-2">{formattedDate}</p>
                <p className="text-md text-white">•</p>
                <div className="flex justify-center items-center gap-2 text-white text-md">
                  {genres.map((genre) => (
                    <p key={genre.id} className="text-white">
                      {genre.name}
                    </p>
                  ))}
                </div>
                <p className="text-md text-white"> •</p>
                <p className="text-md text-white">{runtime} Minutos</p>
              </div>
              <div className="flex items-start md:items-center">
                <div className="flex items-center gap-4">
                  {/* <p className="text-lg text-yellow-400 mt-2">
                    Avaliação: {voteAverage}
                  </p> */}
                </div>
              </div>
              <p className="text-md text-left w-full md:text-lg text-white/80 md:w-4/5">
                {overview || "Sem Descrição"}
              </p>

              <div className="flex items-start gap-4">
                <p className="text-md text-white flex flex-col items-center md:items-start font-medium">
                  {directors.map((director) => director.name).join(", ")}
                  <p className="font-normal text-sm">Diretor</p>
                </p>

                <p className="text-md text-white flex flex-col items-center md:items-start font-medium">
                  {writers.map((writer) => writer.name).join(", ")}
                  <p className="font-normal text-sm">Roteirista(s)</p>
                </p>
              </div>

              <div className="flex items-center justify-start my-3">
                {!isLoggedIn ? (
                  <Link href="/login">
                    <Button  className="border-[3.5px] border-white/40 bg-sub-dark/50 font-semibold py-5 px-8 rounded-xl flex items-center gap-2 mt-4">
                      Entrar para criar lista.
                    </Button>
                  </Link>
                ) : (
                  <Button
                    onClick={() => setModalOpen(true)}
                    className="border-[3.5px] border-white/40 bg-sub-dark/50 font-semibold py-5 px-8 rounded-xl flex items-center gap-2 mt-4"
                  >
                    <AddSvg />
                    Adicionar a Lista!
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MovieAddList
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        lists={lists}
        movieId={movieId}
      />
    </div>
  );
};

export default MoviesInfoHeader;
