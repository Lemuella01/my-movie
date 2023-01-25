import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useLocation} from 'react-router-dom'

const Description = () => {
const [summary, setSummary]= useState({})

const param = useParams()
 const movieId = param.id 
//  console.log(description)


  useEffect(()=>{
    
    getDesc()
   
     },[])
   
     const getDesc = async()=>{
      let response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2fd287448aab167e35caec5c68d669ee&language=en-US`)
      setSummary(response.data)
       console.log(response.data)
     }

     const pathname = useLocation()
 if (pathname !== "/moviedetails/:id")
  return null

    
  return (
    <div className='mt-4 text-lg  font-thin leading-6' > 
     {summary.overview}
    </div>
  
  )
}

export default Description