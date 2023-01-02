import React from 'react'
import ButtonOne from '../button/ButtonOne'

const MovieDetails = () => {
  return (
    <div>
      <div>
        <h1>Avatar: the way of water</h1>
        <div>
          <p>science Fiction</p>
          <p>Adventure</p>
          <p>Action</p>
        </div>
        <div>
        <ButtonOne
              className="textbtn ml-1 mt-6 bg-yellow-400  px-2 py-0 rounded hover:bg-yellow-200  text-[15px]"
              text="Description"
              onClick={() => console.log("Button was clicked!")}
            />
            <ButtonOne
              className="textbtn ml-1 mt-6 bg-yellow-400  px-2 py-0 rounded hover:bg-yellow-200  text-[15px]"
              text="
              Reviews"
              onClick={() => console.log("Button was clicked!")}
            />
            <ButtonOne
              className="textbtn ml-1 mt-6 bg-yellow-400  px-2 py-0 rounded hover:bg-yellow-200  text-[15px]"
              text="
              Details"
              onClick={() => console.log("Button was clicked!")}
            />
        </div>
      </div>
      <div>joe</div>
    </div>
  )
}

export default MovieDetails