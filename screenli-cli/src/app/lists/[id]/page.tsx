"use client";

// Modules
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

// Services
import { getListDetails, removeMovieFromList } from "@/services/list";

// Components
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";

// Assets
import TrashSvg from "@/assets/assets/svgs/TrashSvg";
import ShareLinkBtn from "@/components/ShareLinkBtn";
import { Undo } from "lucide-react";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API;
const BASE_URL = "https://api.themoviedb.org/3/movie/";

const ListDetailsPage = () => {
  const params = useParams();
  const id = params.id as string;
  const [listDetails, setListDetails] = useState<any>(null);
  const [movieDetails, setMovieDetails] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  useEffect(() => {
    const checkAuthToken = () => {
      const token = localStorage.getItem("authToken");
      setIsAuthenticated(!!token);
    };

    checkAuthToken();

    const fetchListDetails = async () => {
      try {
        if (id) {
          const response = await getListDetails(id);
          setListDetails(response);

          const validMovieIds = response.movies
            .map((movie: { id: number }) => movie.id)
            .filter(Boolean);

          const movieRequests = validMovieIds.map((movieId: number) =>
            axios.get(`${BASE_URL}${movieId}`, {
              params: {
                api_key: API_KEY,
                language: "pt-BR",
              },
            })
          );

          const movieResponses = await Promise.all(movieRequests);
          setMovieDetails(movieResponses.map((res) => res.data));
        } else {
          setError("ID is undefined");
        }
      } catch (error) {
        setError("Error fetching list details");
        console.error("Error fetching list details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListDetails();
  }, [id]);

  const handleRemoveMovie = async (movieId: number) => {
    try {
      await removeMovieFromList(id, movieId);

      const updatedList = listDetails;
      updatedList.movies = updatedList.movies.filter(
        (movie: any) => movie.id !== movieId
      );
      setListDetails(updatedList);

      setMovieDetails(
        movieDetails.filter((movie: any) => movie.id !== movieId)
      );
    } catch (error) {
      setError("Error removing movie from list");
      console.error("Error removing movie from list:", error);
    }
  };

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const backdropPath = movieDetails[0]?.backdrop_path;

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-background-dark text-white">
      <Navbar />
      <div
        className="h-full w-[100%] tv:max-h-[] tv:max-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute inset-0 object-cover"
        style={{
          backgroundImage: backdropPath
            ? `url(https://image.tmdb.org/t/p/original${backdropPath})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute bg-gradient-to-t from-background-dark to-bg-background-dark/50 w-full h-full inset-0 object-cover z-[2]"></div>
      <div className="absolute bg-gradient-to-r from-background-dark to-bg-background-dark/0 w-full h-full inset-0 object-cover z-[2]"></div>
      <div className="flex flex-wrap gap-4 mt-6 items-center justify-between px-4 mx-auto w-[90%] lg:w-[70%] tv:max-w-6xl sm:px-6 lg:px-8 z-20">
        <div className="flex flex-wrap gap-4 items-center">
          {isAuthenticated && (
            <Button
              onClick={handleGoBack}
              className="md:inline-flex px-6 py-4 rounded-full bg-sub-dark text-white border-2 border-white/20 justify-center items-center text-sm gap-2"
            >
              <Undo className="w-4 h-4" />
              Voltar
            </Button>
          )}
          <h2 className="text-2xl gap-2">{listDetails?.name}</h2>
          <p className="text-white/60 font-light text-md">
            {listDetails.movies.length}{" "}
            {listDetails.movies.length === 1 ? "Filme" : "Filmes"} |
          </p>
        </div>

        <ShareLinkBtn />
      </div>
      <div className="px-4 h-full mx-auto w-[90%] lg:w-[65%] tv:max-w-5xl sm:px-6 lg:px-8 mt-24 z-20">
        {movieDetails.length > 0 ? (
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
            {movieDetails.map((movie: any) => (
              <li key={movie.id} className="relative">
                <Link href={`/movies/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="w-full rounded-lg opacity-100 hover:opacity-[0.8] transition-all ease-in-out duration-300"
                    alt={movie.title}
                  />
                </Link>
                {isLoggedIn ? (
                  <div className="absolute right-0 top-0 p-2 z-[9999]">
                    <button
                      onClick={() => handleRemoveMovie(movie.id)}
                      className="flex z-20 items-center justify-center bg-sub-dark hover:border-white/60 transition-all ease-in-out duration-300 border-2 border-white/20 h-8 w-8 md:h-10 md:w-10 cursor-pointer rounded-full"
                    >
                      <TrashSvg />
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum Filme Adicionado! Que Pena!</p>
        )}
      </div>
    </div>
  );
};

export default ListDetailsPage;
