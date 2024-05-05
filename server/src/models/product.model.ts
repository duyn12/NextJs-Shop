import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  img: string;
  quantity: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export const productModel = prisma.product;
