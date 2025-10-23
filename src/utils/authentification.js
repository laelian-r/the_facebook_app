import db from "../data/db.json";

export function getUserByEmail(email) {
	return db.users.find((user) => user.email === email);
}
