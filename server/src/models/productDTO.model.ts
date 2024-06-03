import { ProductResType } from "@/schemaValidations/product.schema";

// Tạo một DTO tương ứng cho Product
export class ProductDTO {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    categoryName: string;
    quantity: number;
    listImg: ImageL[];
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, name: string, price: number, description: string, categoryId: number, categoryName: string,quantity: number, listImg: ImageL[], createdAt: Date, updatedAt: Date) {
        this.id =id;
        this.name =name;
        this.price =price;
        this.description =description;
        this.categoryId =categoryId;
        this.categoryName =categoryName;
        this.quantity =quantity;
        this.listImg =listImg;
        this.createdAt =createdAt;
        this.updatedAt =updatedAt;
    }
}

export class ImageL {
    id: number;
    img: string;

    constructor(id: number, img: string) {
        this.id = id;
        this.img = img
    }
}