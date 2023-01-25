import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




const Details = () => {
const imgPath = "https://image.tmdb.org/t/p/w200/";
const [detailsData, setDetailsData] =useState({})
const [production, setProducuction] = useState([])

  const param = useParams()
  const movieId = param.id 


 
  useEffect(()=>{
    
 getData()

  },[])

  const getData = async()=>{
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2fd287448aab167e35caec5c68d669ee&language=en-US`)
     setDetailsData(response.data)
    console.log(response.data)
    setProducuction(response.data.production_companies
)
    console.log(response.data.production_companies
)
  }
  return (
    <div className='ml-5 mr-12 font-extralight'>
      <div className='detail-border flex  justify-between   '>
      {production.map((itr, indx)=>(<div className='flex' key={indx}>
        <p className='  h-8 leading-5'>{itr.name}</p>
        <img className='w-10 h-10' src={`${imgPath}${itr.logo_path}`}  alt='' />
      </div>))}
        {/* {production.map((itr, indx)=>())} */}
      </div>
      <div className='detail-border flex justify-between' >
      <p>Budget</p>
      <p>${detailsData.budget}</p>
      </div>
      <div className='detail-border flex justify-between'>
      <p>Revenue</p>
      <p>${detailsData.revenue}</p>
      </div>
      <div className='detail-border flex justify-between'>
      <p>Release Date</p>
      <p>{detailsData.release_date}</p>
      </div>
      <div className='flex pb-10 mt-5 text-lg justify-between '>
        <div className='flex font-thin '>
         
      <p>Vote Average:</p>
      
      <div className='mt-1 ml-1 mr-5 font-extralight w-40 '> 
     
       
        <input className='progress-bar  ' type="range" min="1" max="10" value={detailsData.vote_average}/>
      
      </div>
      </div>
      <p>Vote count: 3686</p>
      </div>
    </div>
  )
}

export default Details