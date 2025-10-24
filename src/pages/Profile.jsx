import "../styles/Profile.css";

import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getUserById } from "../utils/authentification";
import { useEffect, useState } from "react";

import Card from "../components/Card";

export default function Profile() {
	const { profileId } = useParams();
	const [profile, setProfile] = useState(null);

	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		const profileFound = getUserById(parseInt(profileId));

		if (!profileFound) return;

		setProfile(profileFound);
	}, [profileId]);

	if (!user) {
		return (
			<>
				<Navigate to="/login" />
			</>
		);
	} else {
		return (
			<>
				<Card title={`${profile?.name}'s Profile`}>
					<h1>[ Profile ]</h1>
				</Card>
			</>
		);
	}
}
