import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="bg-gray-100 py-8">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-extrabold text-gray-900 mb-4">
						Welcome to NASA!
					</h2>
					<p className="text-lg text-gray-700">
						Explore the wonders of space and the mysteries of the universe.
					</p>
				</div>
			</div>
		</main>
	);
}
