import axios from "axios";
import z from "zod";

const API_BASE_URL = import.meta.env.VITE_SERVER_URL;

export const ShoeSchema = z.object({
	id: z.number(),
	name: z.string(),
});

export type Shoe = z.infer<typeof ShoeSchema>;

export const fetchShoe = async (id: string) => {
	if (!API_BASE_URL) {
		throw new Error("API_BASE_URL is not defined");
	}

	const response = await axios.get(`${API_BASE_URL}/shoe/:${id}`);
	return response.data;
};
