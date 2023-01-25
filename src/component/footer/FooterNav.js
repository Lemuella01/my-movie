import React from 'react'
import { useLocation } from 'react-router-dom'

const FooterNav = () => {
   const {pathname} = useLocation();
   console.log(pathname)

   if (pathname ==="/search") return null;



  return (
    <div className='bg-blue-600  text-center'>
     <h1 className='join text-white font-semibold pb-7 pt-6  leading-8 mx-auto'>Join 31,000+ other and never miss out on new movies and tv shows</h1>

      <div className=' ml-[520px] '>
        <form action="" className=' w-64 flex text-sm h-8 border-gray border-2 shadow-lg sm:text-lg pb-2  bg-white   '>
          <input type="text"
          className='text-black  focus:outline-none   text-base mt-2 '
          placeholder='enter your email' />
          <button className='bg-gray-700 h-8 ml-20 px-3 text-white rounded-lg text-sm '>SUBSCRIBE</button>
        </form>
      </div>
      
      <div className=' footer-list mx-9 flex justify-between mt-5 pb-8'>
        <ul className= 'footer-movie text-white text-2xl  mt-6'>
          <li>The MovieBox</li>
          </ul>
          <ul className='footer-list-item flex mt-6'>
          <li>About</li>
          <li>Blog</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default FooterNav