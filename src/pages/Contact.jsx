import "../styles/Contact.css";
import Card from "../components/Card";
import Button from "../components/Buttons";

export default function Contact() {
	return (
		<>
			<Card className="window" title="Contact Us">
				<h1>[ Contact Us ]</h1>

				<Card className="window" title="Email">
					<p>
						<span>For now:</span> mzuckerb@fas
					</p>
				</Card>

				<Button text="Home" href="/" />
			</Card>
		</>
	);
}
