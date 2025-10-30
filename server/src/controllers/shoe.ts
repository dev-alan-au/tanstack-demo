import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getShoe = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const shoe = await prisma.shoe.findUnique({ where: { id } });

	if (!shoe) return res.status(404).json({ message: "Shoe not found" });
	res.json(shoe);
};

export const createShoe = async (req: Request, res: Response) => {
	const { name } = req.body;

	try {
		const shoe = await prisma.shoe.create({ data: { name } });
		res.status(201).json(shoe);
	} catch (err) {
		res.status(400).json({ error: "Name must be unique" });
	}
};

export const deleteShoe = async (req: Request, res: Response) => {
	const id = Number(req.params.id);

	try {
		await prisma.shoe.delete({ where: { id } });
		res.status(204).send();
	} catch (err) {
		res.status(404).json({ message: "Shoe not found" });
	}
};

export const updateShoe = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const { name } = req.body;

	try {
		const shoe = await prisma.shoe.update({
			where: { id },
			data: { name },
		});
		res.json(shoe);
	} catch (err) {
		res.status(404).json({ message: "Shoe not found" });
	}
};
