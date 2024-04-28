import { getProductById, createProduct, updateProduct, deleteProduct , getAllProducts } from '@/controllers/product.controllers'
import { FastifyInstance } from 'fastify';

export default async function accUserRoute(fastify: FastifyInstance) {
    fastify.get("/", getAllProducts);
    fastify.get("/:id", getProductById);
    fastify.post("/", createProduct);
    fastify.put("/:id", updateProduct);
    fastify.delete("/:id", deleteProduct);
}    