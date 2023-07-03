import React from "react";

export const Grid = ({ data }) => {
	return (
		<div className="grid grid-cols-4 gap-4 text-center ">
			{data.map((el) => (
				<li>{el.id}</li>
			))}
		</div>
	);
};
