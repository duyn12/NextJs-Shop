import { Product, productModel } from '@/models/product.model'
import prisma from '@/database'
import { FastifyRequest, FastifyReply } from 'fastify'

export const getProductById = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const params = request.params as { id: string } // Khai báo kiểu cho request.params
    const productId = parseInt(params.id)
    const product = await productModel.findUnique({ where: { id: productId } })
    if (!product) {
      reply.status(404).send({ error: 'Product not found' })
      return
    }
    reply.send(product)
  } catch (error) {
    reply.status(500).send({ error: 'Internal Server Error' })
  }
}

// Create a new product
export const createProduct = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { name, price, categoryId, img, quantity, description } = request.body as Product
    const newProduct = await productModel.create({
      data: { name, price, categoryId, img, quantity, description }
    })
    reply.code(201).send(newProduct)
  } catch (error) {
    reply.status(500).send({ error: 'Internal Server Error' })
  }
}

// Update an existing product
export const updateProduct = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const params = request.params as { id: string } // Khai báo kiểu cho request.params
    const productId = parseInt(params.id)
    const { name, price, categoryId, img, quantity, description } = request.body as Product
    const updatedProduct = await productModel.update({
      where: { id: productId },
      data: { name, price, categoryId, img, quantity, description }
    })
    reply.send(updatedProduct)
  } catch (error) {
    reply.status(500).send({ error: 'Internal Server Error' })
  }
}

// Delete a product
export const deleteProduct = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const params = request.params as { id: string } // Khai báo kiểu cho request.params
    const productId = parseInt(params.id)
    await productModel.delete({ where: { id: productId } })
    reply.send({ message: 'Product deleted successfully' })
  } catch (error) {
    reply.status(500).send({ error: 'Internal Server Error' })
  }
}

// Get all products with pagination, search, and sort
export const getAllProducts = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const {
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      search = ''
    } = request.query as {
      page?: number
      limit?: number
      sortBy?: string
      sortOrder?: string
      search?: string
    }

    const products = await productModel.findMany({
      where: {
        OR: [{ name: { contains: search } }, { description: { contains: search } }]
      },
      orderBy: { [sortBy]: sortOrder },
      take: limit,
      skip: (page - 1) * limit
    })

    reply.send(products)
  } catch (error) {
    reply.status(500).send({ error: 'Internal Server Error' })
  }
}
