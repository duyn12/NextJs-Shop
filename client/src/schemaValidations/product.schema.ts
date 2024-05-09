import z from 'zod'

export const CreateProductBody = z.object({
  name: z.string().min(1).max(256),
  price: z.coerce.number().positive(),
  description: z.string().max(10000),
  img: z.string().url(),
  quantity: z.coerce.number().positive(),
  categoryId: z.number()
})

export type CreateProductBodyType = z.TypeOf<typeof CreateProductBody>

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  categoryId: z.number(),
  categoryName: z.string(),
  quantity: z.coerce.number().positive(),
  img: z.string().url(),
  createdAt: z.date(),
  updatedAt: z.date()
})

export const ProductRes = z.object({
  data: ProductSchema,
  message: z.string()
})

export type ProductResType = z.TypeOf<typeof ProductRes>

export const ProductListRes = z.object({
  data: z.array(ProductSchema),
  totalCount: z.number(),
  message: z.string()
})

export type ProductListResType = z.TypeOf<typeof ProductListRes>

export const UpdateProductBody = CreateProductBody
export type UpdateProductBodyType = CreateProductBodyType
export const ProductParams = z.object({
  id: z.coerce.number()
})
export type ProductParamsType = z.TypeOf<typeof ProductParams>

