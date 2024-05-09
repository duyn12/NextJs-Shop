import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import productApiRequest from "@/apiRequests/product";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import ButtonAddCart from "../products/button-add-cart";
const ProductNew = async () => {
  const { payload } = await productApiRequest.getList();
  const productList = payload.data;
  return (
    <div className="container py-20">
    <h2 className="flex justify-center text-2xl uppercase mb-8">Tất cả sản phẩm</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {productList.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/4"
            >
              <div
                className="group basis-auto border-solid border-2 hover:primary-foreground"
                key={product.id}
              >
                <div className="h-[300px] relative overflow-hidden text-center ">
                  <Link href={`/home/products/${product.id}`}>
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={330}
                      height={250}
                      className="w-full h-full"
                    />
                  </Link>
                   <ButtonAddCart />
                </div>
                <div className="text-center p-4">
                  <Link href={`/home/products/${product.id}`}>
                    <h2 className="text-xl font-bold min-h-[60px] line-clamp-2">
                      {product.name}
                     
                    </h2>
                    {/* <p> {product.description}</p> */}
                  </Link>
                  <span className="mt-2 text-lg">{product.price} đ</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductNew;
