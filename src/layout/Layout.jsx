import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main>
				<aside>
					<Card>
						<form action="/">
							<label htmlFor="email">Email</label>
							<input type="email" id="email" name="email" />
							<label htmlFor="password">Password</label>
							<input type="password" id="password" name="password" />
							<button type="submit">Log In</button>
						</form>
					</Card>
				</aside>
				{children}
			</main>
			<Footer />
		</>
	);
}
