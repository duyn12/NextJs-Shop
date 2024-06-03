import z from 'zod'

export const SearchPageAndSorting = z.object({
  keyword: z.string(),
  skipCount: z.number(),
  maxResultCount: z.number()
})

export type SearchPageAndSortingType = z.TypeOf<typeof SearchPageAndSorting>

export const ImageCreateResType = z.object({
  img: z.string().url()
})

export const ImageUpdateResType = z.object({
  id: z.number(),
  img: z.string().url()
})

export const CreateProductBody = z.object({
  name: z.string().min(1).max(256),
  price: z.number().positive(),
  description: z.string().max(10000),
  listImg: z.array(ImageCreateResType),
  quantity: z.number().positive(),
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
  quantity: z.number().positive(),
  listImg: z.array(ImageUpdateResType),
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

export const UpdateProductBody = z.object({
  name: z.string().min(1).max(256),
  price: z.number().positive(),
  description: z.string().max(10000),
  listImg: z.array(ImageUpdateResType),
  quantity: z.number().positive(),
  categoryId: z.number()
})

export type UpdateProductBodyType = z.TypeOf<typeof UpdateProductBody>

export const ProductParams = z.object({
  id: z.coerce.number()
})
export type ProductParamsType = z.TypeOf<typeof ProductParams>
