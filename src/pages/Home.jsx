import "../styles/Home.css";
import Card from "../components/Card";

export default function Home() {
	return (
		<>
			<Card className="window" title="Welcome to Thefacebook!">
				<h1>[ Welcome to Thefacebook ]</h1>
				<p>
					Thefacebook is an online directory that connects people through social
					networks at colleges.
				</p>
				<p>
					We have opened up Thefacebook for popular consumption at{" "}
					<span>Harvard University.</span>
				</p>
				<div className="p-ul">
					<p>You can use Thefacebook to:</p>
					<ul>
						<li>Search for people at your school</li>
						<li>Find out who is in your classes</li>
						<li>Look up your friends' friends</li>
						<li>See a visualization of your social network</li>
					</ul>
				</div>
				<p>
					To get started, click below to register. If you have already
					registered, you can log in.
				</p>
			</Card>
		</>
	);
}
