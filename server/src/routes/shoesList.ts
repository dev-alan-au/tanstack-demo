import { Router } from "express";
import { listShoes } from "../controllers/listShoes.js";

const router = Router();
router.get("/", listShoes);

export default router;
