import React from "react";
import { RatingStars } from "./export";
export default function MovieCard({ movie }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 cursor-pointer">
      <div>
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full
         h-full object-cover rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-(--color-primary)">
          {movie.title}
        </h2>
        <RatingStars
          rating={movie.rating}
          showNumeric={false}
          iconStyles="text-xl"
        />
      </div>
    </div>
  );
}
