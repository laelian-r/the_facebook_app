import "../styles/Login.css";

import Card from "../components/Card";
import Button from "../components/Buttons";
import db from "../data/db.json";

export default function Login() {
	return (
		<>
			<Card title="Login">
				<h1>[ Login ]</h1>

				<form action="/">
					<div className="labels-inputs-container">
						<div className="block-label">
							<label htmlFor="email2">Email</label>
							<label htmlFor="password2">Password</label>
						</div>

						<div className="block-input">
							<Button type="email" id="email2" name="email2" />
							<Button type="password" id="password2" name="password2" />
						</div>
					</div>

					<div className="buttons-container">
						<Button type="submit" text="login" />
						<Button type="submit" text="register" />
					</div>
				</form>
			</Card>
		</>
	);
}
