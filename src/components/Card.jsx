import "../styles/Card.css";

export default function Card({ title, subtitle, children }) {
	return (
		<>
			<section className="card">
				<div className={title ? "titre" : "titre no-title"}>
					{!!title && <h2 className="text-h2">{title}</h2>}
					{/* Condition qui  dit que si la balise contient un subtilte on l'affiche sinon on l'éfface */}
					{!!subtitle && <h2 className="text-h2">{subtitle}</h2>}
				</div>
				<div className="card-content">{children}</div>
			</section>
		</>
	);
}
