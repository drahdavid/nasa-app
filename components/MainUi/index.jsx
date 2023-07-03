"use client";

import { useState } from "react";

import { Grid } from "../Grid";
import { Pagination } from "../Pagination";
import { Photo } from "../Photo";

export const MainUi = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 25;

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentPageData = data.photos.slice(startIndex, endIndex);

	return (
		<div>
			<Grid>
				{currentPageData.map((photoData) => (
					<Photo data={photoData} />
				))}
			</Grid>
			<Pagination
				dataLength={data.photos.length}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</div>
	);
};
