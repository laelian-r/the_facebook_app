import { NavLink } from "react-router-dom";
import "../styles/Buttons.css";

export default function Button({ text, href, type, id, name, ...restProps }) {
	return (
		<>
			{!href ? (
				<>
					{type ? (
						<input type={type} id={id} name={name} value={text} />
					) : (
						<button {...restProps}>{text}</button>
					)}
				</>
			) : (
				<>
					<div className="buttons-container">
						<NavLink className="link" to={href} {...restProps}>
							{text}
						</NavLink>
					</div>
				</>
			)}
		</>
	);
}
