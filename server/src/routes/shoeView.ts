import { Router } from "express";
import {
	createShoe,
	deleteShoe,
	getShoe,
	updateShoe,
} from "../controllers/shoe.js";

const router = Router();
router.get("/:id", getShoe);
router.put("/:id", updateShoe);
router.post("/", createShoe);
router.delete("/:id", deleteShoe);

export default router;
