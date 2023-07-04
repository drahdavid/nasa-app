import { useEffect } from "react";

export const Pagination = ({ setCurrentPage, dataLength, currentPage }) => {
	const pageNumbers = [];

	for (let index = 1; index <= Math.ceil(dataLength / 25); index++) {
		pageNumbers.push(index);
	}

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [currentPage]);

	return (
		<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
			<div className="sm:flex sm:flex-1 sm:items-center sm:justify-center">
				<div>
					<nav
						className="isolate inline-flex -space-x-px rounded-md shadow-sm"
						aria-label="Pagination"
					>
						<a className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
							<button
								onClick={() =>
									currentPage > 1 &&
									setCurrentPage((prevState) => prevState - 1)
								}
							>
								←
							</button>
						</a>
						{/* Current: "z-10 bg-indigo-500 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}

						{pageNumbers.map((page, index) => {
							return index === 0 ||
								index === pageNumbers.length - 1 ||
								index === currentPage - 1 ||
								index === currentPage + 1 ||
								index === currentPage ? (
								<button
									aria-current="page"
									className={`relative z-10 inline-flex items-center bg-indigo-${
										currentPage === page ? "500" : "700"
									} px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
									onClick={() => setCurrentPage(page)}
									key={page}
								>
									{page}
								</button>
							) : index === currentPage - 2 || index === currentPage + 2 ? (
								<button
									key={page}
									aria-current="page"
									className="relative z-10 inline-flex items-center bg-indigo-700 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-auto"
								>
									...
								</button>
							) : (
								<></>
							);
						})}

						<a className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
							<button
								onClick={() =>
									currentPage < pageNumbers.length &&
									setCurrentPage((prevState) => prevState + 1)
								}
							>
								→
							</button>
						</a>
					</nav>
				</div>
			</div>
		</div>
	);
};
