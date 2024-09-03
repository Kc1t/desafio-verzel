// Modules
import React, { useState, useEffect } from "react";

// Services
import { searchMovies } from "@/services/movie";

// Components 
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import SearchMovieCard from "@/components/movie/SearchMovieCard";
import SearchLoader from "../loadings/SearchLoader";

interface SearchInputProps {
  onSearchResults: (results: any[]) => void;
}

export default function SearchInput({ onSearchResults }: SearchInputProps) {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  useEffect(() => {
    if (!query) {
      setShowResults(false);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      try {
        const results = await searchMovies(query);
        setResults(results);
        onSearchResults(results);
        setShowResults(true);
      } catch (error) {
        console.error("Error searching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    const debounceFetch = setTimeout(fetchMovies, 300);

    return () => clearTimeout(debounceFetch);
  }, [query, onSearchResults]);

  const handleClear = () => {
    setQuery("");
    setShowResults(false);
  };

  return (
    <div className="relative w-[90%] lg:w-[50%] tv:max-w-6xl sm:px-6 lg:px-8 mx-auto px-4">
      <div className="relative flex items-center">
        <Input
          type="search"
          placeholder="Escreva o nome do filme ou série..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowResults(e.target.value.length > 0);
          }}
          className="w-full bg-sub-dark border-2 border-white/20 rounded-full py-6 text-white focus:border-white/20 pl-6 pr-12"
        />
        {query && (
          <Button
            onClick={handleClear}
            className="absolute inset-y-0 mt-1.5 right-2 bg-transparent flex items-center text-white p-2"
            aria-label="Clear search"
          >
            <svg
              className="w-4 h-4"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        )}
      </div>
      {showResults && (
        <Card className="mt-2 z-10 bg-sub-dark border-2 border-white/20 rounded-2xl">
          <CardContent className="p-2 w-full mx-auto">
            <ScrollArea className="h-[300px] max-h-[300px] w-full overflow-y-auto">
              {loading ? (
                <div className="h-full w-full flex justify-center items-center">
                  <SearchLoader />
                </div>
              ) : results.length > 0 ? (
                <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 2xl:grid-rows-4 gap-2">
                  {results.map((movie) => (
                    <SearchMovieCard key={movie.id} movie={movie} />
                  ))}
                </div>
              ) : (
                <div className="w-full max-w-7xl tv:max-w-6xl text-white">
                  <p className="p-4 text-center text-muted-foreground w-full max-w-7xl tv:max-w-6xl">
                    Nada encontrado! Tente outra coisa! 🎥
                  </p>
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
