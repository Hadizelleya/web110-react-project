import React from "react";
import movieImage from "../assets/image.png";
import { MovieCard } from "../components/export";

const localMovies = [
  {
    id: crypto.randomUUID(),
    title: "Sonic the hedgehog",
    rating: 10,
    image: movieImage,
  },
  {
    id: crypto.randomUUID(),
    title: "Sonic the hedgehog",
    rating: 5,
    image: movieImage,
  },
  {
    id: crypto.randomUUID(),
    title: "Sonic the hedgehog",
    rating: 8,
    image: movieImage,
  },
  {
    id: crypto.randomUUID(),
    title: "Sonic the hedgehog",
    rating: 9,
    image: movieImage,
  },
  {
    id: crypto.randomUUID(),
    title: "Sonic the hedgehog",
    rating: 4,
    image: movieImage,
  },
];

export default function Movies() {
  return (
    <div>
      <h1>Our movies</h1>

      <div className="grid grid-cols-5 gap-10 p-10 items-center justify-center">
        {localMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
