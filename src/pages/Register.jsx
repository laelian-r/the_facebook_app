import "../styles/Register.css";

import Card from "../components/Card";
import Button from "../components/Buttons";

export default function Register() {
	return (
		<>
			<Card className="register-card" title="Register">
				<div className="paragraph-container">
					<p>
						To register for thefacebook.com, just fill in the four fields below.
						You will have a chance to enter additional information and submit a
						picture once you have registered.
					</p>
				</div>

				<form action="/">
					<div className="labels-inputs-container">
						<div className="block-label">
							<label htmlFor="name">Name:</label>
							<label htmlFor="status">Status:</label>
							<label htmlFor="email">Email (harvard):</label>
							<label htmlFor="password">Password*: (not fas)</label>
						</div>

						<div className="block-input">
							<Button type="name" id="name" name="name" />
							<select name="status" id="status">
								<option value="1">Status 1</option>
								<option value="2">Status 2</option>
								<option value="3">Status 3</option>
							</select>
							<Button type="email" id="email" name="email" />
							<Button type="password" id="password" name="password" />
						</div>
					</div>

					<div className="buttons-container">
						<Button type="submit" text="login" />
						<Button type="submit" text="register" />
					</div>
				</form>

				<div className="terms-container">
					<input type="checkbox" name="terms" id="terms" />
					<label htmlFor="terms">
						I have read and understood the Terms of Use, and I agree to them.
					</label>
				</div>
			</Card>
		</>
	);
}
