export default async function RoverName({ params: { rover } }) {
	const fetchData = (rover) =>
		fetch(
			`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&page=1&api_key=${process.env.NASA_API_KEY}`
		).then((res) => res.json());

	const data = await fetchData(rover);

	console.dir(data.photos[0].rover);
	return (
		<div>
			{data.photos.map((el) => (
				<li>{el.rover.name}</li>
			))}
		</div>
	);
}
