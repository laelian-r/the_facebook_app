import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
	return (
		<footer>
			<nav>
				<ul>
					<li>
						<NavLink to="/about">about</NavLink>
					</li>
					<li>
						<NavLink to="/contact">contact</NavLink>
					</li>
					<li>
						<NavLink to="/">faq</NavLink>
					</li>
					<li>
						<NavLink to="/">terms</NavLink>
					</li>
					<li>
						<NavLink to="/">privacy</NavLink>
					</li>
				</ul>
			</nav>
			<p>
				a Mark Zuckerberg production <br /> Thefacebook &copy; 2004
			</p>
		</footer>
	);
}
