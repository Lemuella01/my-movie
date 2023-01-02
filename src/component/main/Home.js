import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCards from "./MovieCards";
import MovieTileOne from "./MovieTileOne";
import MovieTilesTri from "./MovieTilesTri";
import MovieTileTwo from "./MovieTileTwo";

const Home = () => {
  const [showMovies, setShowMovies] = useState([]);

  const POPULAR_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=2fd287448aab167e35caec5c68d669ee";

  function getMovies(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setShowMovies(data.results.slice(0, 4));
      });
  }
  useEffect(() => {
    getMovies(POPULAR_URL);
  }, []);

  return (
    <>
      <div className=" bgimage h-[85vh] bg-no-repeat bg-cover">
        <h1 className="text-blue-700">
          CATCH ALL THE BEST AND LATEST MOVIES RIGHT HERE ON THE MOVIE BOX
        </h1>
      </div>
      <h1 className="text-5xl font-sans font-normal my-16 text-blue-600 text-center">
        MOVIES
      </h1>
      <div>
        {" "}
        <div className="flex justify-between px-32 ">
          <h1 className="text-2xl  font-sans">Popular</h1>
          <Link to="/movie">
            {" "}
            <p className="text-lg text-blue-600 font-sans">View All</p>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4 px-40 mt-5 mb-10">
          {showMovies.map((popular) => (
            <MovieCards
              key={popular.title}
              title={popular.title}
              imageUrl={popular.poster_path}
            />
          ))}
        </div>
      </div>
      <MovieTileOne />
      <MovieTileTwo />
      <MovieTilesTri />
    </>
  );
};

export default Home;
