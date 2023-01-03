import React from 'react';

// import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	// 	const {
	// 		onPageChange,
	// 		totalCount,
	// 		siblingCount = 1,
	// 		currentPage,
	// 		pageSize,
	// 		className,
	// 	} = props;

	// 	const paginationRange = usePagination({
	// 		currentPage,
	// 		totalCount,
	// 		siblingCount,
	// 		pageSize,
	// 	});
	// 	if (currentPage === 0 || paginationRange.length < 2) {
	// 		return null;
	// 	}

	// 	const onNext = () => {
	// 		onPageChange(currentPage + 1);
	// 	};

	// 	const onPrevious = () => {
	// 		onPageChange(currentPage - 1);
	// 	};

	// 	let lastPage = paginationRange[paginationRange.length - 1];
	// 	return (
	// 		<ul
	// 			className={classnames('pagination-container', { [className]: className })}
	// 		>
	// 			<li
	// 				className={classnames('pagination-item', {
	// 					disabled: currentPage === 1,
	// 				})}
	// 				onClick={onPrevious}
	// 			>
	// 				<div className='arrow left'>
	// 					<AiOutlineLeft />
	// 				</div>
	// 			</li>
	// 			{paginationRange.map((pageNumber) => {
	// 				if (pageNumber === DOTS) {
	// 					return (
	// 						<li className='pagination-item dots' key={pageNumber}>
	// 							...
	// 						</li>
	// 					);
	// 				}

	// 				return (
	// 					<li
	// 						className={classnames('pagination-item', {
	// 							selected: pageNumber === currentPage,
	// 						})}
	// 						onClick={() => onPageChange(pageNumber)}
	// 						key={pageNumber}
	// 					>
	// 						{pageNumber}
	// 					</li>
	// 				);
	// 			})}
	// 			<li
	// 				className={classnames('pagination-item', {
	// 					disabled: currentPage === lastPage,
	// 				})}
	// 				onClick={onNext}
	// 			>
	// 				<div className='arrow right'>
	// 					<AiOutlineRight />
	// 				</div>
	// 			</li>
	// 		</ul>
	// 	);

	const pageNumbers = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	const visiblePageNumbers = [];
	if (currentPage > 0) {
		visiblePageNumbers.push(
			<li
				key='prev'
				onClick={() => onPageChange(currentPage - 1)}
				className='px-3 py-2 font-semibold text-blue-500 hover:text-blue-700 bg-white rounded-full'
			>
				Prev
			</li>
		);

		for (let i = currentPage; i <= currentPage + 4; i++) {
			visiblePageNumbers.push(
				<li
					key={i}
					onClick={() => onPageChange(i)}
					className='px-3 py-2 font-semibold text-blue-500 hover:text-blue-700 bg-white rounded-full'
				>
					{i}
				</li>
			);
		}
		visiblePageNumbers.push(
			<li key='ellipsis-end' className='font-semibold text-gray-500'>
				...
			</li>,
			<li
				key={totalPages}
				onClick={() => onPageChange(totalPages)}
				className='px-3 py-2 font-semibold text-blue-500 hover:text-blue-700 bg-white rounded-full'
			>
				{totalPages}
			</li>,
			<li
				key='next'
				onClick={() => onPageChange(currentPage + 1)}
				className='px-3 py-2 font-semibold text-blue-500 hover:text-blue-700 bg-white rounded-full'
			>
				Next
			</li>
		);
	} else {
		visiblePageNumbers.push(
			<li
				key='prev'
				onClick={() => onPageChange(currentPage - 1)}
				className='px-3 py-2 font-semibold text-blue-500 hover:text-blue-700 bg-white rounded-full'
			>
				Prev
			</li>,
			<li
				key='1'
				onClick={() => onPageChange(1)}
				className='px-3 py-2 font-semibold text-blue-500 hover:text-blue-700 bg-white rounded-full'
			>
				1
			</li>,
			<li key='ellipsis-start' className='font-semibold text-gray-500'>
				...
			</li>
		);
		for (let i = totalPages - 19; i <= totalPages; i++) {
			visiblePageNumbers.push(
				<li
					key={i}
					onClick={() => onPageChange(i)}
					className='px-3 py-2 font-semibold text-blue-500 hover:text-blue-700 bg-white rounded-full'
				>
					{i}
				</li>
			);
		}
		visiblePageNumbers.push(
			<li
				key='next'
				onClick={() => onPageChange(currentPage + 1)}
				className='px-3 py-2 font-semibold text-blue-500 hover:text-blue-700 bg-white rounded-full'
			>
				Next
			</li>
		);
	}
	return <ul className='flex justify-center mt-5'>{visiblePageNumbers}</ul>;
};

export default Pagination;
