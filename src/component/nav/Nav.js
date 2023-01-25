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
   <Link className='' to="/popular"> <ButtonOne className="mt-6 bg-white textbtn h-8 px-2  rounded-lg text-lg"
      text="Movies"
      onClick={() => console.log('Button was clicked!')}
    />
    </Link>

    <Link  to="/tvshow"> <ButtonOne className='textbtn ml-2 mt-6 bg-white   h-8 px-2 rounded-lg text-lg'
      text="Tv Shows"
      onClick={() => console.log('Button was clicked!')}
    />
    </Link>
    </div>
  </div>
  )
}

export default Nav