import React  from 'react'





const MovieCards = ({title, imageUrl}) => {
  const imgPath = "https://image.tmdb.org/t/p/w500";

 

  // function getMovies(url) {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       setShowMovies(data.results.slice(0,10))
  //     })
  // }


  return (
    <div className=''>
     

     
      <div className=' '>
       <div >
       <img className='h-72 w-72 transition-transform duration-300  ease-in-out hover:scale-105' src={imgPath + imageUrl} alt="movie poster" />
          
        <p className='mt-4'>{title}</p>
       </div>
   
      
       </div>
    </div>
  )
}

export default MovieCards