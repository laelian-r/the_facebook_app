import "../styles/Login.css";

import Card from "../components/Card";
import Button from "../components/Buttons";
// import { redirect } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

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
						<input type="email" name="email" id="email" />
						<input type="password" name="password" id="password" />
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
