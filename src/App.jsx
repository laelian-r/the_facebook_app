import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route index element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	);
}
