import React from "react";
import { Link, Outlet } from "react-router-dom";
import ButtonOne from "../button/ButtonOne";

const ButtonList = () => {
  return (
    <div>
      <div className="flex">
        <Link to="description">
          {" "}
          <p className="textbtn ml-1 mt-6  px-2 py-0 rounded hover:bg-yellow-200  text-[15px]">
            Description
          </p>{" "}
        </Link>
        <Link to="reviews">
          {" "}
          <p className="textbtn ml-1 mt-6  px-2 py-0 rounded hover:bg-yellow-200  text-[15px]">
            Reviews
          </p>
        </Link>

        <Link to="details">
          {" "}
          <p className="textbtn ml-1 mt-6  px-2 py-0 rounded hover:bg-yellow-200  text-[15px]">
            Details
          </p>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ButtonList;
