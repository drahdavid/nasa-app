import { MainUi } from "@/components/MainUi";

export default async function RoverName(params) {
	const searchParams = params.searchParams;

	const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/";
	const rover = params.params.rover;
	const segment =
		Object.keys(searchParams).length === 0
			? "latest_photos?"
			: `photos?${Object.keys(searchParams)[0]}=${
					Object.values(searchParams)[0]
			  }&`;

	const fetchData = (rover) =>
		fetch(`${url}${rover}/${segment}api_key=${process.env.NASA_API_KEY}`).then(
			(res) => {
				if (!res.ok) throw new Error("Something went wrong");

				return res.json();
			}
		);

	const data = await fetchData(rover);

	const serializedData = {
		photos: data.latest_photos
			? data.latest_photos
			: data.photos
			? data.photos
			: undefined,
	};

	return (
		<div>
			<MainUi data={serializedData} />
		</div>
	);
}
