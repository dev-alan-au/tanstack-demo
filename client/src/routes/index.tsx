import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { fetchShoesList, type ShoesList } from "../api/shoesList";
import Shoe from "../components/Shoe";
import styles from "./index.module.scss";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const { data, isLoading } = useQuery<ShoesList>({
		queryKey: ["shoesList"],
		queryFn: fetchShoesList,
	});

	if (isLoading) return <div>...</div>;
	if (!data) return <div>Failed to load shoes</div>;
	if (!data.length) return <div>No Shoes Found</div>;

	return (
		<div className={styles.container}>
			{data.map((shoe) => (
				<Shoe key={shoe.id} shoe={shoe} />
			))}
		</div>
	);
}
