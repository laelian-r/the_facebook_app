import "../styles/Login.css";

import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import Card from "../components/Card";
import Button from "../components/Buttons";

// ...existing code...
export default function Login() {
	const { user, signInUser } = useAuth();
	const navigate = useNavigate();

	function signUser(e) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const email = formData.get("email")?.toString().trim();
		const password = formData.get("password")?.toString().trim();

		const signedUser = signInUser(email, password);

		// throw redirect(`/profile/${signedUser.id}`);
		navigate(`/profile/${signedUser.id}`, { replace: true });
	}

	if (user) {
		// throw redirect(`/profile/${user.id}`);
		return <Navigate to={`/profile/${user.id}`} replace />;
	} else {
		return (
			<>
				<Card title="Login">
					<h1>[ Login ]</h1>

					<form onSubmit={signUser}>
						<div className="labels-inputs-container">
							<div className="block-label">
								<label htmlFor="email">Email :</label>
								<label htmlFor="password">Password</label>
							</div>
							<div className="block-input">
								<input type="email" name="email" id="email" />
								<input type="password" name="password" id="password" />
							</div>
						</div>
						<div className="buttons-container">
							<Button type="submit" text="login" />
							<Button text="register" />
						</div>
					</form>
				</Card>
			</>
		);
	}
}
