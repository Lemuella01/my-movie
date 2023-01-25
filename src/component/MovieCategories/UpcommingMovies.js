import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MovieCards from './MovieCards';

const UpcommingMovies = () => {
  
    const [upcoming, setUpcoming] = useState([]);

    const UPCOMING_URL ="https://api.themoviedb.org/3/movie/upcoming?api_key=2fd287448aab167e35caec5c68d669ee";
  
    function upComing(url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setUpcoming(data.results.slice(0, 4));
        });
    }
  
    useEffect(() => {
      upComing(UPCOMING_URL);
    }, []);
  
    return (
      <div>
      {" "}
      <div className="flex justify-between px-32 ">
        <h1 className="text-2xl  font-sans">Upcomming</h1>
        <Link to="/upcoming">
          {" "}
          <p className="text-lg text-blue-600 font-sans">View All</p>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4 px-40 mt-5 mb-10">
        {upcoming.map((upc) => (
          <MovieCards
            key={upc.title}
            title={upc.title}
            imageUrl={upc.poster_path}
            id= {upc.id}
          />
        ))}
      </div>
    </div>
    )
  }
  


export default UpcommingMovies
