import React from "react";

export const Select = ({ data, selectCamera }) => {
	const camerasSet = new Set();

	const cameras = data.photos.reduce((previousCamera, currentCamera) => {
		const cameraName = currentCamera.camera.name;
		if (cameraName && !camerasSet.has(cameraName)) {
			camerasSet.add(cameraName);
			previousCamera.push(cameraName);
		}
		return previousCamera;
	}, []);

	return (
		<div className="m-5">
			<label className="mr-5" htmlFor="camera">
				Select Camera
			</label>
			<select
				placeholder="Select a Camera"
				defaultValue=""
				id="camera"
				name="camera"
				className="border h-full rounded-md bg-transparent text-gray-500 sm:text-sm p-2 "
				onChange={(e) => selectCamera(e.target.value)}
			>
				<option value="" disabled selected>
					Select your option
				</option>
				{cameras.length > 1 && <option value="">All Cameras</option>}
				{cameras.map((camera) => (
					<option key={camera}>{camera}</option>
				))}
			</select>
		</div>
	);
};
