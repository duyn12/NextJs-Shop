/* eslint-disable @next/next/no-img-element */

import productApiRequest from "@/apiRequests/product";
import Image from "next/image";
import { cache } from "react";
import ProductBreadcrumb from "@/components/products/products-breadcrum";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import { Metadata, ResolvingMetadata } from "next";
import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const getDetail = cache(productApiRequest.getDetail);
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { payload } = await getDetail(Number(params.id));
  const product = payload.data;
  return {
    title: product.name,
    description: product.description,
  };
}
export default async function ProductDetail({ params }: Props) {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  const isAuthenticated = Boolean(sessionToken);
  let product = null;
  try {
    const { payload } = await getDetail(Number(params.id));
    product = payload.data;
  } catch (error) {}
  // const url = envConfig.NEXT_PUBLIC_URL + '/products/' + product.id
  const iconProduct = [
    "https://storage-asset.msi.com/global/picture/image/feature/nb/2023_RPLS/titan-18-hx-a14v/images/icon-ces2024_innovation-award-honoree.png",
    "https://storage-asset.msi.com/global/picture/image/feature/nb/2023_RPLS/titan-18-hx-a14v/images/pcworld-editors-choice.png",
    "https://storage-asset.msi.com/global/picture/image/feature/nb/2023_RPLS/titan-18-hx-a14v/images/laptop-best-in-show-ces-2024.png",
    "https://storage-asset.msi.com/global/picture/image/feature/nb/2023_RPLS/titan-18-hx-a14v/images/laptop-editors-choice.png",
  ];
  function formatVND(value: number | bigint) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0, // Omitting decimal values for VND as they are generally not used
    }).format(value);
  }
  // const decrementQuantity = () => {
  //   quantity > 1 ? getDetail(id, { quantity: quantity - 1}).then(handleUpdateCart) : removeItem();

  // }

  return (
    <div className="pt-6">
      {!product && <div>Không tìm thấy sản phẩm</div>}
      {product && (
        <div className="mx-auto max-w-screen-xl">
          <ProductBreadcrumb homeElement={undefined} separator={undefined} />
          <div className="mx-auto flex my-16">
            <div className="w-2/5">
              <div className="product-images mb-4">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={480}
                  height={480}
                  className="max-h-[480px] rounded-lg"
                />
              </div>
              <Carousel className="w-full max-w-sm">
                <CarouselContent className="-ml-1">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-1 md:basis-1/2 lg:basis-1/4"
                    >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-2xl font-semibold">
                              {index + 1}
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="lg:ml-6 lg:p-12 rounded-3xl bg-white">
              <div>
                <h1 className="text-gray-900 text-3xl mb-12">{product.name}</h1>
                <p className="text-sm my-4">{product.description}</p>
                <div className="flex items-center space-x-2">
                  <Button>
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="font-bold text-xl">1</span>
                  <Button>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 h-36 content-end space-x-2">
                <span className="font-bold text-2xl text-red-600">
                  {formatVND(product.price)}
                </span>
                <div className="flex  my-6 gap-6">
                  <Link href={`/home/cart`} className="">
                    <Button variant="secondary" className="flex ml-auto ">
                      <ShoppingCart className="mr-2 w-5 h-5" />
                      Thêm vào giỏ hàng
                    </Button>
                  </Link>

                  {isAuthenticated && (
                    //  <Link href={`/home/checkout/${product.id}`}></Link>
                    <Link href={`/home/cart`}>
                      <Button
                        variant="destructive"
                        className="flex ml-auto w-32 "
                      >
                        Mua ngay
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex pt-10 max-w-screen-lg mx-auto">
        {iconProduct.map((iconproduct, index) => (
          <div key={index} className="p-20">
            <img src={iconproduct} width={80} height={120} alt={""}></img>
          </div>
        ))}
      </div>
      {product && (
        <div className="p-20 flex bg-gray-900">
          <div className="w-6/12">
            <Image
              src={product.img}
              alt={product.name}
              width={450}
              height={400}
              className="max-h-[450px] rounded-lg"
            />
          </div>
          <div className="w-6/12">
            <ul>
              <li className="text-slate-50">{product.description}</li>
            </ul>
            <div className="flex justify-start gap-x-4 pt-4">
              <Button variant="destructive" className="w-32 ">
                Cấu hình
              </Button>
              <Button variant="destructive" className="w-32 ">
                Mua hàng
              </Button>
            </div>
            {/* <p className="text-white"> </p> */}
          </div>
        </div>
      )}
    </div>
  );
}
