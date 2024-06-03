import productApiRequest from "@/apiRequests/product";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ProductBreadcrumb from "@/components/products/products-breadcrum";
import ProductCategory from "@/components/products/products-category";
import ButtonAddCart from "@/components/products/button-add-cart";
import { Metadata } from "next";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const metadata: Metadata = {
  title: 'Danh sách sản phẩm',
  description: 'Danh sách sản phẩm của Productic'
}
export default async function ProductListPage() {
  const { payload } = await productApiRequest.getList();
  const productList = payload.data;

  function formatVND(value: number | bigint) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0, // Omitting decimal values for VND as they are generally not used
    }).format(value);
  }
  return (
    <div className="container">
      <h2 className="text-2xl py-4">Tất cả sản phẩm</h2>
      <ProductBreadcrumb homeElement={undefined} separator={undefined} />
      <div className="grid grid-cols-[300px_minmax(900px,_1fr)] my-4 gap-4">
        <ProductCategory />
        <div className="grid grid-cols-3 gap-8">
          {productList.map((product) => (
            <div
              className="group basis-auto border-solid border-2 "
              key={product.id}
            >
              <div className="h-[300px] relative overflow-hidden text-center hover:bg-[#282828eb] ease-in-out transition">
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
                  <h2 className="text-xl font-bold min-h-[50px] line-clamp-2">
                    {product.name}
                  </h2>
                </Link>
                <span className="mt-2 text-lg">{formatVND(product.price)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PaginationSection />
    </div>
  );
}
function PaginationSection() {
  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious  />
          </PaginationItem>

          {/* {renderPages()} */}

          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}