import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./layout/Layout";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route index element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	);
}
