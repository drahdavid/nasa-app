"use client";

export default function Error() {
	return (
		<div
			class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
			role="alert"
		>
			<strong class="font-bold">Error: </strong>
			<span class="block sm:inline">Something went wrong.</span>
		</div>
	);
}
