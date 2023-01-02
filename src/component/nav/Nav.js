import React from 'react'
import {Link} from 'react-router-dom';
import ButtonOne from '../button/ButtonOne';


const Nav = () => {
  return (
    <div className='flex bg-blue-600 h-20 px-28 justify-between '>
   
<Link to="/">
   <h1 className='family text-3xl text-white font-bold pt-5'>The MovieBox</h1>
    </Link>

    <div className='text-blue-700 ' >
   <Link className='' to="/movie"> <ButtonOne className="mt-6 bg-white textbtn px-3 py-1 rounded-lg text-xl"
      text="Movies"
      onClick={() => console.log('Button was clicked!')}
    />
    </Link>

    <Link  to="/show"> <ButtonOne className='textbtn ml-10 mt-6 bg-white  px-3 py-1 rounded-lg text-lg'
      text="Tv Shows"
      onClick={() => console.log('Button was clicked!')}
    />
    </Link>
    </div>
  </div>
  )
}

export default Nav