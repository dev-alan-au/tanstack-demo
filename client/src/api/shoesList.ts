import axios from "axios";
import { z } from "zod";

import { ShoeSchema } from "./shoe";

const API_BASE_URL = import.meta.env.VITE_SERVER_URL;

export const ShoesListSchema = z.array(ShoeSchema);
export type ShoesList = z.infer<typeof ShoesListSchema>;

export const fetchShoesList = async () => {
	if (!API_BASE_URL) {
		throw new Error("API_BASE_URL is not defined");
	}

	const response = await axios.get(`${API_BASE_URL}`);
	return response.data;
};
