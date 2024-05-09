import z from 'zod'

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string()
})

export const CategoryRes = z.object({
  data: CategorySchema,
  message: z.string()
})

export type CategoryResType = z.TypeOf<typeof CategoryRes>

//phần lấy dữ liệu select option

export const CategoryGroupSchema = z.object({
  name: z.string(),
  value: z.number()
})

export const CategoryListRes = z.object({
  data: z.array(CategoryGroupSchema),
  message: z.string()
})

export type CategoryListResType = z.TypeOf<typeof CategoryListRes>

// tạo dữ liệu cho danh mục

export const CreateCategoryBody = z.object({
  name: z.string().min(1).max(256),
})

export type CreateCategoryBodyType = z.TypeOf<typeof CreateCategoryBody>

export const UpdateCategoryBody = CreateCategoryBody
export type UpdateCategoryBodyType = CreateCategoryBodyType
export const CategoryParams = z.object({
  id: z.coerce.number()
})
export type CategoryParamsType = z.TypeOf<typeof CategoryParams>
