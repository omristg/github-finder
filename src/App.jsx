import { BrowserRouter as Router, Route } from "react-router-dom"

import { Navbar } from "./cmps/Navbar"

export const App = () => {
	return (
		<Router>
			<div className="flex flex-col justify-between h-screen">
				<Navbar>
					<main>Content</main>
				</Navbar>
				</div>
		</Router>
	)
}
