import React, { useContext } from "react";
import { MovieContext } from "../../context/context";
import MovieInfo from "./MovieInfo.Component";

const MovieHero = () => {
  const { movie, rentMoive, buyMoive } = useContext(MovieContext);
  // const { movie } = useContext(MovieContext)
  const genres = movie.genres?.map(({ name }) => name).join(", ");
  // console.log(genres);

  return (
    <>
      <div >
        {/* mobile or tab screen size */}
        <div className="lg:hidden w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="cover images"
            className=" rounded responsive-img my-2 py-2"
            style={{ width: "calc(100%-2rem)" }}
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div className="text-black flex flex-col gap-2 md:px-4">
              <h4>4.2k rating</h4>
              <h4>Kannada, English, Hindi, Telegu, Tamil</h4>
              <h4>
                {movie.runtime} min | {genres}
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
            <button
              onClick={rentMoive}
              className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg px-4"
            >
              Rent ₹ 149
            </button>
            <button
              onClick={buyMoive}
              className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
            >
              Buy ₹ 599
            </button>
          </div>
        </div>

        {/* Large Screen Device */}
        <div
          className="relative hidden w-full lg:block"
          style={{ height: "30rem" }}>
          <div className="absolute w-full h-full" style={{background: "linear-gradient(90deg, rgb(34, 34, 34) 24.95%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%);"}} > </div>
      <div className="absolute left-24 top-10 flex items-center gap-10" >
              <div className="w-64 h-96">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="Movie Poster"
                  className="w-full h-full rounded-lg"/>
              </div>
              <div className="">
                <MovieInfo movie={movie} />
              </div>
            </div >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="Backdrop Poster"
              className="w-full h-full object-cover object-center"
            />
         
        </div>
      </div>
    </>
  );
};

export default MovieHero;