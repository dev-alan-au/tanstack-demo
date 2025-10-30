import type { Shoe } from "../api/shoe";

export default function Shoe({ shoe }: { shoe: Shoe }) {
	return <div>{shoe.name}</div>;
}
