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
							<label htmlFor="email">Email</label>
							<Button type="email" id="email2" name="email2" />

							<label htmlFor="password">Password</label>
							<Button type="password" id="password2" name="password2" />

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
