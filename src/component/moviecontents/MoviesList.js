import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams} from "react-router-dom";
import ButtonOne from "../button/ButtonOne";
import axios from "axios";

import Pagination from "../hooks/Pagination";

import MovieData from "./MovieData";

const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "2fd287448aab167e35caec5c68d669ee";

// https://api.themoviedb.org/3/movie/popular?api_key=2fd287448aab167e35caec5c68d669ee&language=en-US&page=2

const MoviesList = ({ props }) => {
  const [movies, setMovies] = useState([]);
  // const [movieid, setMovieId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize] = useState(20);
  const { category } = useParams ()
  // const [useCategory, setUseCategory]= useState(category)
  // console.log(useCategory)
  console.log(category)

  useEffect(() => {
    let pageNumber = "";
    if (currentPage > 0) {
      pageNumber = `&page=${currentPage}`;
    }
    const fetchMovies = async () => {
      let endPoint = `${BASE_URL}${category}?api_key=${API_KEY}${pageNumber}&language=en-US`;
      const res = await axios.get(endPoint);
      setMovies(res.data.results);
      console.log(res.data.results)
      console.log(res.data);
      console.log(res.data.page);
      console.log(res.data.total_pages);
      // setMovieId()
    };

    fetchMovies();
  }, [currentPage]);
  console.log(movies);

  const refresh =()=> window.location.reload(true);

  const currentTableData = useMemo(
    (props) => {
      // const firstPageIndex = (currentPage - 1) * PageSize;
      // const lastPageIndex = firstPageIndex + PageSize;
      // return movies.slice(firstPageIndex, lastPageIndex);
      return movies;
    },
    [currentPage, movies?.length]
  );

  return (
    <div className="bg-slate-100 h-full pb-10">
      <div className="text-white  flex justify-between mx-44">
        <div>
          <Link to="/popular">
            {" "}
            <ButtonOne
              className="textbtn  mt-6 bg-purple-400  px-2 py-0 rounded hover:bg-purple-200 text-[15px]"
              text="Popular"
              onClick={()=>window.location.href="/popular"}
            />
          </Link>
          <Link to="/top_rated">
            {" "}
            <ButtonOne
              className="textbtn ml-1 mt-6 bg-yellow-400  px-2 py-0 rounded hover:bg-yellow-200  text-[15px]"
              text="Top Rated"
              onClick={()=>window.location.href="/top_rated"}
            />
          </Link>
          <Link to="/now_playing">
            {" "}
            <ButtonOne
              className="textbtn ml-1 mt-6 bg-red-600  px-2 py-0 rounded  hover:bg-red-500 text-[15px]"
              text="Now Playing"
              onClick={()=>window.location.href="/now_playing"}
            />
          </Link>
          <Link to="/upcoming">
            {" "}
            <ButtonOne
              className="textbtn ml-1 mt-6 bg-green-700  px-2 py-0 rounded hover:bg-green-500 text-[15px]"
              text="Upcoming"
              onClick={()=>window.location.href="/upcoming"}
            />
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/search">
            {" "}
            <ButtonOne
              className="textbtn ml-10 mt-6 bg-blue-700  text-white px-2 py-0   text-[15px]"
              text="Find Movie"
              onClick={() => console.log("Button was clicked!")}
            />
          </Link>
        </div>
     
      </div>

      <nav className=" ">
        {/* {JSON.stringify(currentTableData)} */}

        <div className="">
          {currentTableData.map((movie) => (
            <MovieData
              key={movie.title}
              title={movie.title}
              date={movie.release_date}
              overview={movie.overview.slice(0, 110)}
              imageUrl={movie.poster_path}
              id={movie.id}
              />
           

          ))}
           
        </div>
      </nav>

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        // totalCount={movies.length}
         totalCount={400}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />

    </div>
  );
};

export default MoviesList;


