import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shoe/$id")({
	component: Shoe,
});

export default function Shoe() {
	return <div>Shoe Component</div>;
}
