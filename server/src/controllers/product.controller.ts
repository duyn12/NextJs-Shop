import prisma from '@/database'
import { ProductSchema, CreateProductBodyType, UpdateProductBodyType, SearchPageAndSortingType } from '@/schemaValidations/product.schema'

export const getProductList = async (data: SearchPageAndSortingType) => {
    const offset = (data.skipCount - 1) * data.maxResultCount;
    const users = await prisma.product.findMany({
        where: {
            name: { contains: data.keyword, mode: 'insensitive' }
        },
        orderBy: {
          createdAt: 'desc',
        },
        include: { category: true},
        take: data.maxResultCount || undefined,
        skip: offset || undefined
    });

    const validatedData = users.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      categoryId: product.categoryId,
      categoryName: product.category.name,
      img: product.img,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt
    }));
    
    const validatedProducts = ProductSchema.array().parse(validatedData);

    return validatedProducts;
}

export const getProductDetail = (id: number) => {
  return prisma.product.findUniqueOrThrow({
    where: {
      id
    }
  })
}

export const createProduct = (data: CreateProductBodyType) => {
  return prisma.product.create({
    data
  })
}

export const updateProduct = (id: number, data: UpdateProductBodyType) => {
  return prisma.product.update({
    where: {
      id
    },
    data
  })
}

export const deleteProduct = (id: number) => {
  return prisma.product.delete({
    where: {
      id
    }
  })
}