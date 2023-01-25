import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MovieCards from './MovieCards';

const NowPlayingMovies = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const NOW_PLAYING_URL =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=2fd287448aab167e35caec5c68d669ee";

  function nowPlay(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setNowPlaying(data.results.slice(0, 4));
      });
  }

  useEffect(() => {
    nowPlay(NOW_PLAYING_URL);
  }, []);





  return (
    <div>
        <div className="flex justify-between px-32 ">
          <h1 className="text-2xl font-sans">Now Playing</h1>
          <Link to="now_playing/">
            {" "}
            <p className="text-lg text-blue-600 font-sans">View All</p>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4 px-40 mt-5 mb-10">
          {nowPlaying.map((itr) => (
            <MovieCards
              key={itr.title}
              title={itr.title}
              imageUrl={itr.poster_path}
              id={itr.id}
            />
          ))}
        </div>
      </div>
  )
}

export default NowPlayingMovies