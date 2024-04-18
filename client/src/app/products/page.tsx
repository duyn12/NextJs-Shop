import productApiRequest from "@/apiRequests/product";
import DeleteProduct from "@/app/products/_components/delete-product";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { ShoppingCart } from 'lucide-react';

export default async function ProductListPage() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  const isAuthenticated = Boolean(sessionToken);
  const { payload } = await productApiRequest.getList();
  const productList = payload.data;
  return (
    <div>
      {isAuthenticated && (
        <Link href={"/products/add"}>
          <Button variant={"secondary"}>Thêm sản phẩm</Button>
        </Link>
      )}
      <div className="grid grid-cols-4 gap-8">
        {productList.map((product) => (
          <div
          className="group basis-auto"
            key={product.id}
          >
            <div className="h-[300px] relative overflow-hidden">
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={330}
                  height={250}
                  className="w-full h-full object-cover object-cover"
                />
              </Link>
              {!isAuthenticated && (
                <button className="bg-primary text-[15px] flex items-center justify-center gap-x-3 text-white py-[8px] w-full duration-300 hover:bg-theme_color group-hover:-translate-y-10">
                  <ShoppingCart />Thêm vào giỏ hàng
                </button>
              )}
            </div>
            <div className="mt-5">
              <Link href={`/products/${product.id}`}>
                <h2 className="text-primary text-sm leading-[17px] hover:text-theme_color">{product.name}</h2>
              </Link>
              <span className="mt-2">{product.price} đ</span>
            </div>

            <div className="flex mr-4 space-x-2 justify-end">
              {isAuthenticated && (
                <div className="flex space-x-2 items-start">
                  <Link href={`/products/${product.id}/edit`}>
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
  );
}
