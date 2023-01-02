import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MovieCards from './MovieCards'

const MovieTileOne = () => {
  const [topRated, setTopRated] = useState([]);
  const TOP_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=2fd287448aab167e35caec5c68d669ee";



  function topRate(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTopRated(data.results.slice(0, 4));
      });
  }

  useEffect(() => {
    topRate(TOP_URL);
  }, []);




  return (
    <div>
    {" "}
    <div className="flex justify-between px-32 ">
      <h1 className="text-2xl  font-sans">Top Rated</h1>
      <Link to="/movie">
        {" "}
        <p className="text-lg text-blue-600 font-sans">View All</p>
      </Link>
    </div>
    <div className="grid grid-cols-4 gap-4 px-40 mt-5 mb-10">
      {topRated.map((top) => (
        <MovieCards
          key={top.title}
          title={top.title}
          imageUrl={top.poster_path}
        />
      ))}
    </div>
  </div>
  )
}

export default MovieTileOne