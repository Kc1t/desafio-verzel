"use client";

// Modules
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

// Services
import { logoutUser } from "@/services/auth";
import { deleteList } from "@/services/list";

// Components
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";

// Assets
import ListsBg from "@/assets/assets/background/lists-bg.png";
import Image from "next/image";
import CreateListModal from "@/components/lists/CreateListModal";
import TrashSvg from "@/assets/assets/svgs/TrashSvg";
import CreateFavoriteListButton from "./CreateListBtn";

const BASE_URL = "https://api.themoviedb.org/3/movie/";

const ListPage = () => {
  const [lists, setLists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token not found");

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/lists`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const listsData = response.data;

        const updatedLists = await Promise.all(
          listsData.map(async (list: any) => {
            const validMovieIds = list.movies
              .map((movie: { id: number }) => movie.id)
              .filter(Boolean);
            const movieRequests = validMovieIds
              .slice(0, 3)
              .map((movieId: number) =>
                axios.get(`${BASE_URL}${movieId}`, {
                  params: {
                    api_key: `${process.env.NEXT_PUBLIC_TMDB_API}`,
                    language: "pt-BR",
                  },
                })
              );
            const movieResponses = await Promise.all(movieRequests);
            list.movieDetails = movieResponses.map((res) => res.data);
            return list;
          })
        );

        setLists(updatedLists);
      } catch (error) {
        console.error("Error fetching lists:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLists();
  }, []);

  const handleClickList = (id: string) => {
    if (id) {
      router.push(`/lists/${id}`);
    } else {
      console.error("Invalid ID:", id);
    }
  };

  const handleDeleteList = async (id: string) => {
    try {
      await deleteList(id);
      setLists((prevLists) => prevLists.filter((list) => list._id !== id));
    } catch (error) {
      console.error("Error deleting list:", error);
    }
  };

  const handleLogout = () => {
    logoutUser();
    router.push("/login");
  };

  if (loading) return <Loading />;

  return (
    <div className="flex w-full min-h-screen relative overflow-x-hidden flex-col items-center bg-background-dark h-screen text-white">
      <Navbar />
      <div className="h-screen w-full tv:max-h-[40%] tv:max-w-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full absolute inset-0 object-cover">
        <Image
          src={ListsBg}
          className="absolute w-full h-full inset-0 object-cover z-[1]"
          alt="ListsBg"
        />
      </div>
      <div className="flex flex-col px-4 mx-auto w-[90%] lg:w-[70%] tv:max-w-6xl sm:px-6 lg:px-8 z-10 overflow-x-hidden">
        <div className="w-full flex justify-between items-center py-4 flex-col md:flex-row gap-4">
          <span className="text-2xl font-semibold">Minhas Listas</span>
          <div className="flex items-center gap-2 ">
            <button onClick={handleLogout} className="btn-logout">
              Sair
            </button>
            <Button
              onClick={handleOpenModal}
              className="inline-flex px-6 rounded-xl bg-sub-dark text-white border-4 border-white/20 hover:border-white/60 transition-all ease-in-out duration-300 hover:bg-sub-dark"
            >
              Criar Nova Lista
            </Button>
            <CreateListModal isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>
        </div>
        <ul className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 my-2">
          {lists.map((list) => (
            <li
              key={list._id}
              className="bg-sub-dark border-white/30 hover:border-white/80 transition-all ease-in-out duration-300 min-h-[10rem] rounded-xl border-[2.5px] w-full flex relative"
              style={{ cursor: "pointer" }}
            >
              <div
                onClick={() => handleClickList(list._id)}
                className="flex flex-row gap-2 xl:gap-12 md:gap-0 py-4 md:py-0 w-full"
              >
                <div className="flex items-center justify-center relative w-[40%] xl:w-[40%] 2xl:w-[30%] tv:w-[45%] xl:py-2 px-2">
                  <div className="block xl:hidden">
                    {list.movieDetails &&
                      list.movieDetails
                        .slice(0, 1)
                        .map((movie: any, index: number) => (
                          <img
                            key={`${list._id}-${movie.id}-${index}`}
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            className="w-[120px] h-auto mr-2 rounded-md"
                          />
                        ))}
                  </div>
                  <div className="hidden xl:flex w-full">
                    {list.movieDetails &&
                      list.movieDetails
                        .slice(0, 1)
                        .map((movie: any, index: number) => (
                          <img
                            key={`${list._id}-${movie.id}-${index}`}
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}` || "https://image.tmdb.org/t/p/w500/6rr7r6cMWMYlgJFBGyPkSHEBDkk.jpg"}
                            alt={movie.title}
                            className="w-[110px] 2xl:w-[115px] h-auto mr-2 rounded-md"
                          />
                        ))}
                    {list.movieDetails &&
                      list.movieDetails
                        .slice(1, 2)
                        .map((movie: any, index: number) => (
                          <img
                            key={`${list._id}-${movie.id}-${index}`}
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}` || "https://image.tmdb.org/t/p/w500/6rr7r6cMWMYlgJFBGyPkSHEBDkk.jpg"}
                            alt={movie.title}
                            className="w-[110px] 2xl:w-[115px] h-auto mr-2 rounded-md left-5 absolute"
                          />
                        ))}
                    {list.movieDetails &&
                      list.movieDetails
                        .slice(2, 3)
                        .map((movie: any, index: number) => (
                          <img
                            key={`${list._id}-${movie.id}-${index}`}
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            className="w-[110px] 2xl:w-[115px] mr-2 rounded-md left-12 absolute"
                          />
                        ))}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-1 xl:gap-3 w-full xl:w-[85%]">
                  <span className="font-semibold text-lg">{list.name}</span>
                  <p className="text-white/60 font-light text-md">
                    {list.movies.length}{" "}
                    {list.movies.length === 1 ? "Filme" : "Filmes"} |
                  </p>
                  <p className="text-white/60 font-medium text-sm">
                    {list.description}
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-0 p-2 z-[9999]">
                <button
                  onClick={() => handleDeleteList(list._id)}
                  className="flex z-20 items-center justify-center bg-sub-dark hover:border-white/60 transition-all ease-in-out duration-300 border-2 border-white/20 h-8 w-8 md:h-10 md:w-10 cursor-pointer rounded-full"
                >
                  <TrashSvg />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListPage;
