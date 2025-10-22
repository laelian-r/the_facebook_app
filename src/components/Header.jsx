import "../styles/Header.css";

import ImageHeader from "../assets/images/image_header.jpg";
import TitreHeader from "../assets/images/titre_header.jpg";
import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<>
			<header className="header">
				<img className="image-left" src={ImageHeader} alt="image header" />
				<div className="image-right">
					<NavLink to="/">
						<img src={TitreHeader} alt="image titre header" />
					</NavLink>
					<nav>
						<ul>
							<li>
								<NavLink to="/">login</NavLink>
							</li>
							<li>
								<NavLink to="/">register</NavLink>
							</li>
							<li>
								<NavLink to="/about">about</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}
