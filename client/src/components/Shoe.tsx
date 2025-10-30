import { Link } from "@tanstack/react-router";
import type { Shoe } from "../api/shoe";

export default function Shoe({ shoe }: { shoe: Shoe }) {
	return (
		<Link to="/shoe/$id" params={{ id: String(shoe.id) }}>
			{shoe.name}
		</Link>
	);
}
