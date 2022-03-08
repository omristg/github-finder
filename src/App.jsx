import { BrowserRouter as Router, Route } from "react-router-dom"
import { Footer } from "./cmps/Footer"

import { Navbar } from "./cmps/Navbar"

export const App = () => {
	return (
		<Router>
			<div className="flex flex-col justify-between h-screen">
				<Navbar />
				<main>Content</main>
				<Footer />
			</div>
		</Router>
	)
}
