import productApiRequest from "@/apiRequests/product";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import ProductBreadcrumb from "@/components/products/products-breadcrum";
import ProductCategory from "@/components/products/products-category";
import ButtonAddCart from "@/components/products/button-add-cart";
import { Metadata } from "next";
import DeleteProduct from "./_components/delete-product";

export const metadata: Metadata = {
  title: 'Tất cả sản phẩm',
  description: 'Generated by create next app',
}
export default async function ProductListPage() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  const isAuthenticated = Boolean(sessionToken);
  const { payload } = await productApiRequest.getList();
  const productList = payload.data;

  return (
    <div className="container">
      <h2 className="text-2xl py-4">Tất cả sản phẩm</h2>
      <ProductBreadcrumb homeElement={undefined} separator={undefined}  />
      {isAuthenticated && !(
        <Link href={"/home/products/add"}>
          <Button variant={"secondary"}>Thêm sản phẩm</Button>
        </Link>
      )}
      <div className="grid grid-cols-[300px_minmax(900px,_1fr)] my-4 gap-4">
        <ProductCategory />
        <div className="grid grid-cols-3 gap-8">
          {productList.map((product) => (
            <div className="group basis-auto border-solid border-2 hover:primary-foreground" key={product.id}>
              <div className="h-[300px] relative overflow-hidden text-center ">
                <Link href={`/home/products/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={330}
                    height={250}
                    className="w-full h-full"
                  />
                </Link>
                {isAuthenticated && (
                  <ButtonAddCart />
                )}
              </div>
              <div className="text-center p-4">
                <Link href={`/home/products/${product.id}`}>
                  <h2 className="text-xl font-bold min-h-[60px] line-clamp-2">
                    {product.name}
                  </h2>
                </Link>
                <span className="mt-2 text-lg">{product.price} đ</span>
              </div>

              <div className="flex mr-4 justify-end">
                {isAuthenticated && !(
                  <div className="flex space-x-2 items-start">
                    <Link href={`/home/products/${product.id}/edit`}>
                      <Button variant={"outline"}>Edit</Button>
                    </Link>
                    <DeleteProduct product={product} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}