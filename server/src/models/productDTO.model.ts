import { ProductResType } from "@/schemaValidations/product.schema";

// Tạo một DTO tương ứng cho Product
export class ProductDTO {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    categoryName: string;
    img: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, name: string, price: number, description: string, categoryId: number, categoryName: string, img: string, createdAt: Date, updatedAt: Date) {
        this.id =id;
        this.name =name;
        this.price =price;
        this.description =description;
        this.categoryId =categoryId;
        this.categoryName =categoryName;
        this.img =img;
        this.createdAt =createdAt;
        this.updatedAt =updatedAt;
    }
}