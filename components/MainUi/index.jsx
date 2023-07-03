"use client";

import { useState, useEffect } from "react";

import { Grid } from "../Grid";
import { Pagination } from "../Pagination";
import { Photo } from "../Photo";
import { Select } from "../Select";

export const MainUi = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [camera, selectCamera] = useState("");

	const itemsPerPage = 25;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const filteredData = camera
		? data.photos.filter((el) => camera === el.camera.name && el)
		: undefined;

	useEffect(() => {
		setCurrentPage(1);
	}, [camera]);
	return (
		<div>
			<Select data={data} selectCamera={selectCamera} />
			<Grid>
				{!filteredData
					? data.photos
							.slice(startIndex, endIndex)
							.map((photoData) => <Photo key={photoData.id} data={photoData} />)
					: filteredData
							.slice(startIndex, endIndex)
							.map((photoData) => (
								<Photo key={photoData.id} data={photoData} />
							))}
			</Grid>
			<Pagination
				dataLength={!filteredData ? data.photos.length : filteredData.length}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</div>
	);
};
