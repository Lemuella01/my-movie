import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonOne from '../button/ButtonOne';
import axios from 'axios';
// import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

import Pagination from '../hooks/Pagination';
import AllMovies from './AllMovies';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '2fd287448aab167e35caec5c68d669ee';

const MoviesList = ({ props }) => {
	const [movies, setMovies] = useState([]);
	// const [loading, SetLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		// let pageNumber = '';
		// if (currentPage > 0) {
		// 	pageNumber = `&page=${currentPage}`;
		// }
		const fetchMovies = async () => {
			const res = await axios.get(
				`${BASE_URL}popular?api_key=${API_KEY}&page=${currentPage}`
			);
			setMovies(res.data.results);
			setTotalPages(res.data.total_pages);
		};

		fetchMovies();
	}, [currentPage]);
	console.log(movies);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	// const currentTableData = useMemo(
	// 	(props) => {
	// 		const firstPageIndex = (currentPage - 1) * PageSize;
	// 		const lastPageIndex = firstPageIndex + PageSize;
	// 		return movies.slice(firstPageIndex, lastPageIndex);
	// 		// return movies;
	// 	},
	// 	[currentPage, movies?.length]
	// );

	return (
		<div className='bg-slate-100 h-full pb-10'>
			<div className='text-white  flex justify-between mx-44'>
				<div>
					<Link to='/movie'>
						{' '}
						<ButtonOne
							className='textbtn  mt-6 bg-purple-400  px-2 py-0 rounded hover:bg-purple-200 text-[15px]'
							text='Popular'
							onClick={() => console.log('Button was clicked!')}
						/>
					</Link>
					<Link to='/show'>
						{' '}
						<ButtonOne
							className='textbtn ml-1 mt-6 bg-yellow-400  px-2 py-0 rounded hover:bg-yellow-200  text-[15px]'
							text='Top rated'
							onClick={() => console.log('Button was clicked!')}
						/>
					</Link>
					<Link to='/show'>
						{' '}
						<ButtonOne
							className='textbtn ml-1 mt-6 bg-red-600  px-2 py-0 rounded  hover:bg-red-500 text-[15px]'
							text='Now Playing'
							onClick={() => console.log('Button was clicked!')}
						/>
					</Link>
					<Link to='/show'>
						{' '}
						<ButtonOne
							className='textbtn ml-1 mt-6 bg-green-700  px-2 py-0 rounded hover:bg-green-500 text-[15px]'
							text='Upcoming'
							onClick={() => console.log('Button was clicked!')}
						/>
					</Link>
				</div>
				<div>
					{' '}
					<Link to='/show'>
						{' '}
						<ButtonOne
							className='textbtn ml-10 mt-6 bg-blue-700  text-white px-2 py-0   text-[15px]'
							text='Find Movie'
							onClick={() => console.log('Button was clicked!')}
						/>
					</Link>
				</div>
			</div>

			<nav className=' '>
				{/* {JSON.stringify(currentTableData)} */}

				<div className=''>
					{movies.map((movie) => (
						<AllMovies
							key={movie.title}
							title={movie.title}
							date={movie.release_date}
							overview={movie.overview.slice(0, 110)}
							imageUrl={movie.poster_path}
						/>
					))}
					<Pagination
						// className='pagination-bar'
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</div>
			</nav>

			{/* <div className=" ml-96">
        <ul className="flex ml-32 mt-10 justify-between w-96  ">
          <li className="mt-1"><AiOutlineLeft/></li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>...</li>
          <li className="mt-2"><AiOutlineRight/></li>
        </ul>
      </div> */}

			{/* <PagePop
        postsPerPage={postPerPage}
        totalPosts={movies.length}
        paginate={paginate}
      /> */}
		</div>
	);
};

export default MoviesList;
