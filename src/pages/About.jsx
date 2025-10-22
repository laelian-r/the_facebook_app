import "../styles/About.css";

import Card from "../components/Card";
import Button from "../components/Buttons";

export default function About() {
	let people = [
		{
			name: "Mark Zuckerberg",
			job: "Founder, Master and Commander, Enemy of the State.",
		},
		{
			name: "Eduardo Saverin",
			job: "Business Stuff, Corporate Stuff, Brazilian Affairs.",
		},
		{
			name: "Andrew McCollum",
			job: "Graphic Art, General Rockstar.",
		},
	];
	return (
		<>
			<div className="window">
				<Card title="About Thefacebook">
					<h1>[ About ]</h1>

					<Card title="The Project">
						<p>
							Thefacebook is an online directory that connects people through
							social networks at colleges and universities.
						</p>
					</Card>

					<Card title="The People">
						{people.map(({ name, job }) => (
							<div className="grille" key={name}>
								<span className="blue-500-text">{name}</span>
								<p>{job}</p>
							</div>
						))}
					</Card>

					<Button text="Home" href="/" />
				</Card>
			</div>
		</>
	);
}
