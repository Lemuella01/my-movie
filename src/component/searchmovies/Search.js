import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchQueary from "./SearchQueary";

const Search = () => {
  const [searchQueri, setSearchQueri] = useState("");
  const [update, setUpdate] = useState(null);
  const [movieResult, setMovieresult] = useState([]);
  // const [timeoutId, updateTimeoutId] = useState();


  useEffect(() => {
    const searchMovie = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=2fd287448aab167e35caec5c68d669ee&query=`;
      // console.log(url);
      const response = await axios.get(url + update);
      setMovieresult(response.data.results);
      // console.log(response.data.results);
      console.log(movieResult)
    };
    searchMovie();
  }, [update]);

 
  return (
    <div className="bg-slate-100 h-fit pt-6 ">
      <div className="search-img   bg-no-repeat bg-cover  "></div>

      <form
        action=""
        className="flex bottom-6 relative text-sm  w-[470px]  rounded-md  ml-[400px]  shadow-lg focus:border-indigo-800 sm:text-lg p-2 bg-white   "
      >
        <input
          type="text "
          className="h-5 focus:outline-none pl-7 w-96 text-base mt-2 "
          placeholder="search for movies"
          value={searchQueri}
          onChange={(e) => setSearchQueri(e.target.value)}
        />
        <div>
          <button
            className="bg-blue-600 p-2 font-semibold text-white  text-sm rounded-lg"
            onClick={(e) => {
              e.preventDefault();
              setUpdate(searchQueri);
            }}
          >
            submit
          </button>
        </div>
      </form>
      {update ?  <div className="bg-slate-100 h-fit grid grid-cols-3 gap-20 px-48 mt-10   ">
        {movieResult.map((itr, index) => (<SearchQueary key={index}
        title={itr.title}
        imageUrl ={itr.poster_path}
        id={itr.id}
        />))}
      </div> : <div className="bg-slate-100 h-52">  <div className="search-text   flex px-auto  font-normal pt-14 ">
        <p>Search movies </p>
        <FaSearch className=" mt-2 ml-6  " />
      </div> </div>}
      
     
    </div>
  );
};

export default Search;
