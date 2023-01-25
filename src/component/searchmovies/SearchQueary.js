import React from 'react'
import { useNavigate } from 'react-router-dom';

const SearchQueary = ({title, imageUrl, id}) => {
  const imgPath = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate()

  return (
    <div className=' h-80 ' onClick={()=>{navigate('/moviedetails/'+id)} } >
      
       <div className='img-hover-zoom img-hover-zoom--xyz   ' >
       <img className=' ' src={imgPath + imageUrl} alt="movie poster" />
       </div>
       <div className='mt-2'>
        <p className='font-semibold text-gray-700 text-cards'>{title}</p>
        </div>
   
      
       
    </div>
  )
}

export default SearchQueary