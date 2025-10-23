import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchHook } from "../hooks/useFetchHook";
import { HashLoader } from "react-spinners";
import RatingStars from "../components/RatingStars";

const baseUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMAGES_URL;
export default function MovieDetails() {
  const { id } = useParams();

  console.log(id);

  const {
    data: movie,
    isLoading,
    error,
  } = useFetchHook(
    `${baseUrl}/movie/${id}?api_key=${apiKey}&append_to_response=credits`
  );
  console.log(movie);
  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <HashLoader size={100} color="red" />
      </div>
    );

  if (error)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h2 className="text-2xl text-center text-(color-error)">
          {error.message}
        </h2>
      </div>
    );

  const actors = movie.credits.cast;

  return (
    <div className="p-5 lg:px-30 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full min-h-screen items-start mt-10 justify-between gap-30">
      <div>
        <img
          src={`${imageUrl}/${movie?.poster_path}`}
          className="rounded-2xl w-full object-cover h-full max-h-[750px] shadow-2xl shadow-black"
          alt={movie.title}
        />
      </div>

      <div className="lg:col-span-2">
        {/* movie title and tagline */}
        <div className="flex flex-col  mt-15 gap-2 items-center justify-center">
          <h1 className="text-(--color-primary) text-4xl">{movie.title}</h1>
          <p className="text-2xl text-(--color-muted-dark)">{movie.tagline}</p>
        </div>

        {/* rating and movie length */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-5">
          <RatingStars
            showNumeric
            iconStyles="text-xl"
            rating={movie.vote_average.toFixed(1)}
            styles="text-xl"
          />
          <p className="text-xl">
            {movie.runtime} mins / {movie.release_date}
          </p>
        </div>

        {/* genres */}
        <div className="flex items-center justify-evenly mt-10">
          {movie.genres.map((genre) => (
            <p className="text-xl text-(--color-muted-dark)" key={genre.id}>
              {genre.name}
            </p>
          ))}
        </div>

        {/* overview */}
        <div className="flex flex-col items-start justify-center gap-4 mt-6">
          <h1 className="text-2xl ">Overview</h1>
          <p className="text-lg text-(--color-muted-dark)">{movie.overview}</p>
        </div>

        {/* Actors section */}
        <div className="mt-6">
          <h1 className="text-2xl">Top Cast</h1>
          <div className="grid grid-cols-2  lg:grid-cols-4 xl:grid-cols-6 items-center h-full justify-evenly gap-10 mt-4">
            {actors.slice(0, 6).map((actor) => (
              <Link
                to={`/movies/actors/${actor.id}`}
                className="flex flex-col items-start gap-3 h-full justify-stretch group"
                key={actor.id}
              >
                <img
                  src={`${imageUrl}/${actor.profile_path}`}
                  alt={actor.name}
                  className="w-[120px] h-[120px] object-cover rounded-xl shadow-lg group-hover:scale-105 group-hover:shadow-2xl transition-all duration-200 ease-in"
                />

                <div className="flex flex-col items-start justify-center">
                  <p className="text-lg">{actor.name}</p>
                  <p className="text-md text-(--color-muted-dark)">
                    {actor.character}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
