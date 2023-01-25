import React  from 'react'

import { useNavigate } from 'react-router-dom';





const MovieCards = ({title, imageUrl, id}) => {
  const imgPath = "https://image.tmdb.org/t/p/w500";

  const navigate = useNavigate()

  // function getMovies(url) {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       setShowMovies(data.results.slice(0,10))
  //     })
  // }


  return (
    
    <div  onClick={()=>{navigate('/moviedetails/'+id)}}>
     
      <div className=' '>
       <div className='img-hover-zoom img-hover-zoom--xyz   ' >
       <img className='' src={imgPath + imageUrl} alt="movie poster" />
          </div>

       <div>
       <p className='text-cards  font-normal mt-2 text-gray-700 text-base'>{title}</p>
       </div>
   
      
       </div>
    </div>
  
  )
}

export default MovieCards