import { MainUi } from "@/components/MainUi";

export default async function RoverName({ params: { rover } }) {
	const fetchData = (rover) =>
		fetch(
			`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&api_key=${process.env.NASA_API_KEY}`
		).then((res) => res.json());

	const data = await fetchData(rover);

	return (
		<div>
			<MainUi data={data} />
		</div>
	);
}
