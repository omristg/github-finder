import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { GithubProvier } from "./context/github/GithubContext"
import { AlertProvider } from "./context/alert/AlertContext"

import { NotFound } from "./pages/NotFound"
import { UserDetails } from "./pages/UserDetails"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Footer } from "./cmps/layout/Footer"
import { Navbar } from "./cmps/layout/Navbar"
import { Alert } from "./cmps/layout/Alert"

export const App = () => {
	return (
		<GithubProvier>
			<AlertProvider>
				<Router>
					<div className="flex flex-col justify-between h-screen">
						<Navbar />
						<main className="container mx-auto px-3 pb-12">
							<Routes>
								<Route path='/' element={
									<>
										<Alert />
										<Home />
									</>
								} />
								<Route path='/about' element={<About />} />
								<Route path='/user/:login' element={<UserDetails />} />
								<Route path='/notfound' element={<NotFound />} />
								<Route path='*' element={<NotFound />} />
							</Routes>
						</main>
						<Footer />
					</div>
				</Router>
			</AlertProvider>
		</GithubProvier>
	)
}
