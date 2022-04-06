import React from 'react';
import './Pagination.scss';

function Pagination({ data, menuSelected, setData, currentPage, setCurrentPage, setLoading, totalPages }) {
	const previousPage = async () => {
		try {
			setLoading(true);
			const resp = await fetch(data.previous);
			const respJson = await resp.json();
			setData(respJson);
			setCurrentPage(currentPage - 1);
		
			setLoading(false);
		} catch (e) {
			console.error(e);
		}
	};

	const nextPage = async () => {
		try {
			setLoading(true);
			const resp = await fetch(data.next);
			const respJson = await resp.json();
			setData(respJson);
			setCurrentPage(currentPage + 1);


			setLoading(false);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className="pagination">
			<button
				className="paginationButton pagination__previousButton"
				data-testid="previousButton"
				disabled={data.previous ? false : true}
				onClick={previousPage}
			>
				<svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" version="1.0">
					<path d="M55.78 30.357c.149-14.104-11.187-25.651-25.291-25.8-14.104-.15-25.651 11.156-25.8 25.26-.15 14.104 11.156 25.682 25.26 25.831S55.631 44.461 55.78 30.357zm-20.208-18.84-.145 13.656-.242 11.092-.137 12.968-18.613-18.979 19.137-18.737z" />
				</svg>
			</button>
			{currentPage} to {totalPages} of {data.count} {menuSelected.name}
			<button
				className="paginationButton pagination__nextButton"
				disabled={data.next ? false : true}
			
				onClick={nextPage}
			>
				<svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" version="1.0">
					<path d="M4.687 30.213C4.74 44.318 16.24 55.701 30.344 55.649c14.105-.052 25.49-11.521 25.437-25.626-.053-14.105-11.52-25.52-25.626-25.467-14.105.052-25.52 11.552-25.468 25.657zm20.476 18.549-.05-13.656.083-11.094-.048-12.969L44.03 29.754 25.163 48.762z" />
				</svg>
			</button>
		</div>
	);
}

export default Pagination;
