"use client";

import { useState, useEffect, useReducer } from "react";

import { reducer, initialState } from "./utils";

import { Grid } from "../Grid";
import { Pagination } from "../Pagination";
import { Photo } from "../Photo";
import { Select } from "../Select";
import { CheckBoxLink } from "../CheckboxLink";

export const MainUi = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [camera, selectCamera] = useState("");
	const [state, dispatch] = useReducer(reducer, initialState);

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
			<div className="flex justify-around	align-middle items-center">
				<div>
					<Select data={data} selectCamera={selectCamera} />
				</div>
				<div>
					<CheckBoxLink
						label={"Search By Earth Date Day"}
						dispatch={dispatch}
						reducerState={state}
						type={"updateCheckboxOne"}
					/>
					<CheckBoxLink
						label={"Search By Sol Date (2890)"}
						dispatch={dispatch}
						reducerState={state}
						type={"updateCheckboxTwo"}
					/>
				</div>
			</div>
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
