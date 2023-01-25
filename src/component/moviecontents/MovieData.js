import React from "react";
import { GoThumbsup } from "react-icons/go";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MovieData = ({ imageUrl, title, date, overview, id}) => {
  const imgPath = "https://image.tmdb.org/t/p/w500";

 const navigate = useNavigate()
  return (
  //  <Link to={`/details/`}>  

   <div onClick={()=>{navigate('/moviedetails/'+id)
   console.log(id)
   }} className="flex bg-white px-5  h-44  hover:bg-fuchsia-50  mt-10 shadow-xl mx-40">

      <div className="">
        <img
          className=" w-[120px] h-[140px] mt-4 object-cover rounded-lg"
          src={imgPath + imageUrl}
          alt=""
        />
      </div>
      <div className="ml-10 mt-5 pb-10">
        <h3 className="pb-2 font-sans text-2xl text-[#111111e9] font-normal">{title}</h3>
        <p className=" w-10/12 pb-2  ">{overview}</p>

        <p className="flex mr-5 pb-2 text-blue-500">
          Like <GoThumbsup className="ml-2 mt-1 " />{" "}
        </p>
      </div>
      <div className="mt-20 ml-20 ">{date}</div>
    </div>
    // </Link>
  );
};

export default MovieData;

