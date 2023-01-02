import React, { useEffect, useState } from 'react'

import AllMovies from './AllMovies'

const PopularList = ({movies, loading}) => {
//   const [movies, setMovies]=useState([]);
//   const [loading, SetLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postPerPage, setPostPerPage] = useState(5)
  
//   useEffect(() => {
//    const fetchMovies = async () => {
//     SetLoading(true);
//     const res = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=2fd287448aab167e35caec5c68d669ee&language=en-US&total_results")
//     setMovies(res.data.results)
//     SetLoading(false);
//   }

//   fetchMovies();
//   }, [])



//   const indexOfLastPost = currentPage * postPerPage;
// const indexOfFirstPost = indexOfLastPost - postPerPage;
// const curentPost = movies.slice(indexOfFirstPost, indexOfLastPost)

 if (loading){
  return <h2>Loading...</h2>
 }

  return (
    <div className=' '>
       {movies.map((movie)=>(<AllMovies 
        key={movie.title}
        title={movie.title}
        date={movie.release_date}
        overview={movie.overview}
        imageUrl={movie.poster_path}
       
        />))}
        
    </div>
  )
}

export default PopularList