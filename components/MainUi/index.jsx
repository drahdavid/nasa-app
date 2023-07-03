"use client";

import { useState } from "react";

import { Grid } from "../Grid";
import { Pagination } from "../Pagination";

export const MainUi = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 25;

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentPageData = data.photos.slice(startIndex, endIndex);

	return (
		<div>
			<Grid data={currentPageData} />
			<Pagination
				dataLength={data.photos.length}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</div>
	);
};
