import Link from "next/link";

export const Navigation = () => {
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<a
							className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
							href="/"
						>
							Nasa Api - Mars Rover
						</a>
						<button
							className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
						>
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<div
						className={"lg:flex flex-grow items-center"}
						id="example-navbar-danger"
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							<li className="nav-item">
								<Link
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									href="/rover/curiosity"
								>
									<span className="ml-2">Curiosity Rover Photos</span>
								</Link>
							</li>

							<li className="nav-item">
								<Link
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									href="/rover/opportunity"
								>
									<span className="ml-2">Opportunity Rover Photos </span>
								</Link>
							</li>

							<li className="nav-item">
								<Link
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									href="/rover/spirit"
								>
									<span className="ml-2">Spirit Rover Photos</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
