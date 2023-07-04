import "./globals.css";

import { Navigation } from "@/components/Navigation";

export const metadata = {
	title: "Nasa App",
	description: "Consumes and renders data from Nasa API",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
