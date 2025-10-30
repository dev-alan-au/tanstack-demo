import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const seedData = async (_: Request, res: Response) => {
  const data = [
    { name: "Air Max 90" },
    { name: "Air Jordan 1" },
    { name: "Yeezy Boost 350" },
    { name: "Puma Suede Classic" },
    { name: "Reebok Club C 85" },
  ];
  try {
    await prisma.shoe.createMany({data});
    res.status(201).json({ data })
  } catch (err) {
    res.status(400).json({ error: "Seeding failed" });
  }
}

export default seedData;