import { redirect } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

export default function Profile() {
    const { user } = useAuth();

    if (!user) {
        throw redirect("/login");
    } else {
        <>
            <h1>Ma page de profile</h1>
        </>
    }
}