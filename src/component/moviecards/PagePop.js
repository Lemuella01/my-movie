import React from 'react'




const PagePop = ({ postsPerPage, totalPosts, paginate }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className=" ml-96">
      <ul >
        {pageNumbers.map(number => (
          <li key={number}>
            <p onClick={() => paginate(number)} >
            {number}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PagePop