import "../styles/Header.css";

import ImageHeader from "../assets/images/image_header.jpg";
import TitreHeader from "../assets/images/titre_header.jpg";

export default function Header() {
	return (
		<>
			<header className="header">
				<img className="image-left" src={ImageHeader} alt="image header" />
				<div className="image-right">
					<img src={TitreHeader} alt="image titre header" />
					<nav>
						<ul>
							<li>
								<a href="/">login</a>
							</li>
							<li>
								<a href="/">register</a>
							</li>
							<li>
								<a href="/about">about</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}
