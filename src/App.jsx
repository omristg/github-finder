import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Footer } from "./cmps/Footer"
import { Navbar } from "./cmps/Navbar"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { About } from "./pages/About"

export const App = () => {
	return (
		<Router>
			<div className="flex flex-col justify-between h-screen">
				<Navbar />
				<main className="container mx-auto px-3 pb-12">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						{/* <Route path='/notfound' element={<NotFound />} /> */}
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	)
}
