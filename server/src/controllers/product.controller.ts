import prisma from '@/database'
import { ProductDTO } from '@/models/productDTO.model'
import { ProductSchema, CreateProductBodyType, UpdateProductBodyType, SearchPageAndSortingType } from '@/schemaValidations/product.schema'


export const getProductList = async (data: SearchPageAndSortingType) => {
  const offset = (data.skipCount - 1) * data.maxResultCount
  const users = await prisma.product.findMany({
    where: {
      name: { contains: data.keyword, mode: 'insensitive' }
    },
    orderBy: {
      createdAt: 'desc'
    },
    include: { category: true },
    take: data.maxResultCount || undefined,
    skip: offset || undefined
  })

  const validatedData = users.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    description: product.description,
    categoryId: product.categoryId,
    categoryName: product.category.name,
    quantity: product.quantity,
    img: product.img,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt
  }))

  const validatedProducts = ProductSchema.array().parse(validatedData)

  return validatedProducts
}

export const getProductDetail = async (id: number) => {
  const productEntity = await prisma.product.findUniqueOrThrow({
    where: {
      id
    },
    include: { category: true},
  });
  return new ProductDTO(
    productEntity.id,
    productEntity.name,
    productEntity.price,
    productEntity.description,
    productEntity.categoryId,
    productEntity.category.name,
    productEntity.quantity,
    productEntity.img,
    productEntity.createdAt,
    productEntity.updatedAt
  )
}

export const createProduct = async (data: CreateProductBodyType) => {
  const productEntity = await prisma.product.create({
    data
  })
  return new ProductDTO(
    productEntity.id,
    productEntity.name,
    productEntity.price,
    productEntity.description,
    productEntity.categoryId,
    "null",
    productEntity.quantity,
    productEntity.img,
    productEntity.createdAt,
    productEntity.updatedAt
  )
}

export const updateProduct = async (id: number, data: UpdateProductBodyType) => {
  const productEntity = await prisma.product.update({
    where: {
      id
    },
    data
  })
  return new ProductDTO(
    productEntity.id,
    productEntity.name,
    productEntity.price,
    productEntity.description,
    productEntity.categoryId,
    "null",
    productEntity.quantity,
    productEntity.img,
    productEntity.createdAt,
    productEntity.updatedAt
  )
}

export const deleteProduct = (id: number) => {
  return prisma.product.delete({
    where: {
      id
    }
  })
}
