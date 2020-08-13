import React from 'react';
import {Pagination} from "react-bootstrap";

function PaginationCustom(props) {
	const pageNumbers = [];
	let currentPage = props.currentPage

	for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
		pageNumbers.push(i);
	}
	
	const elmPaginationItem = pageNumbers.map(
		pageNumber => {
			const paginate = (pageNumber) => {
				props.paginate(pageNumber)
			}
			return (
				<Pagination.Item 
					key={pageNumber} 
					active={pageNumber === currentPage}
					onClick={() => paginate(pageNumber)}
				>
					{pageNumber}
				</Pagination.Item>
			)
		}
	)

	const goToFirstOrLastPage = (pageNumber) => {
		props.paginate(pageNumber)
	}
	const goToPrevOrNextPage = (value) => {
		currentPage += value
		if (currentPage <= 1) {
			currentPage = 1
		} else if (currentPage > pageNumbers.length) {
			currentPage = pageNumbers.length
		}
		props.paginate(currentPage)
	}
	return (
		<Pagination className="mt-5 justify-content-center">
			<Pagination.First disabled={currentPage === 1} onClick={() => goToFirstOrLastPage(1)}/>
			<Pagination.Prev disabled={currentPage === 1}  onClick={() =>goToPrevOrNextPage(-1)}/>
			{elmPaginationItem}
			<Pagination.Next disabled={currentPage === pageNumbers.length} onClick={() =>goToPrevOrNextPage(1)}/>
			<Pagination.Last disabled={currentPage === pageNumbers.length} onClick={()=> goToFirstOrLastPage(pageNumbers.length)}/>
			
		</Pagination>		
	);
};

export default PaginationCustom;