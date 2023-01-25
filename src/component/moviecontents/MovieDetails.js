import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import ButtonOne from '../button/ButtonOne'
import imgback from '../../image/batman2.jpg'
import ButtonList from '../detailsBtn/ButtonList'
import Description from '../detailsBtn/Description'

const MovieDetails = () => {
  const imgPath = "https://image.tmdb.org/t/p/w300/";
  const urlpath = imgPath 
  // const urlpath = imgPath + backdrop_path
  const [details, setDetails] = useState({})
  const [genres, setGenres] = useState([])
  const param = useParams()
  const movieId = param.id 


 
  useEffect(()=>{
    
 getData()

  },[])

  const getData = async()=>{
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2fd287448aab167e35caec5c68d669ee&language=en-US`)
    setDetails(response.data)
    console.log(response.data)
    setGenres(response.data.genres)
  }
 

  return (
    <div className=' bg-gray-100 '>
    <div className='flex mx-52 py-10 '>
      <div className='bg-white w-[580px] h-[450px] px-5'>
        <h1 className='text-2xl font-normal font-sans mt-10'>{details.original_title}</h1>
        <div className='genres'>
        {genres.map((itr, indx)=>(<p key={indx} className={`btn${indx+1} mt-3`}>{itr.name}</p>))}
          {/* <p>{details?.genres && details.genres[1].name}</p> */}
        </div>
        <div>
          
        <ButtonList/>
        <Description/>
        </div>
        <div className='mt-4 text-lg  font-thin leading-6' > 
   
    </div>
      
      
      </div>
      <div  ><img className= ''  src={`${imgPath}${details.poster_path}`} alt="" /></div>
    </div>
    </div>
  )
}

export default MovieDetails