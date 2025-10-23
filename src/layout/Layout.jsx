import "../styles/Layout.css";

import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Buttons";
import Footer from "../components/Footer";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main>
				<aside>
					<Card>
						<form action="/">
							<label htmlFor="email2">Email</label>
							<Button type="email" id="email" name="email" />

							<label htmlFor="password">Password</label>
							<Button type="password" id="password" name="password" />

							<div className="buttons-container">
								<Button text="login" />
								<Button text="register" />
							</div>
						</form>
					</Card>
				</aside>
				{children}
			</main>
			<Footer />
		</>
	);
}
