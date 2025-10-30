import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listShoes = async (req: Request, res: Response) => {
	const shoes = await prisma.shoe.findMany();
	res.json(shoes);
};
