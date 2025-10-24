import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";

import { Authentification } from "./hooks/useAuth";

export default function App() {
	return (
		<>
			<Authentification>
				<BrowserRouter>
					<Layout>
						<Routes>
							<Route index element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route path="/profile/:profileId" element={<Profile />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</Layout>
				</BrowserRouter>
			</Authentification>
		</>
	);
}
