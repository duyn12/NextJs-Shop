
import productApiRequest from "@/apiRequests/product";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import DeleteProduct from "./_components/delete-product";

export default async function ProductAdmin() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  const isAuthenticated = Boolean(sessionToken);
  const { payload } = await productApiRequest.getList();
  const productList = payload.data;
  let totalPrice = 0;
  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-6">Quản lý sản phẩm</h2>
        <Link href={"/admin/products/add"}>
          <Button variant={"destructive"}>Thêm sản phẩm</Button>
        </Link>

      <div className="grid gap-10 grid-cols-3">
        <div className="col-span-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sản phẩm</TableHead>
                <TableHead>Số lượng</TableHead>
                <TableHead className="text-right">Giá</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {productList.map((product) => {
                // Cập nhật tổng giá trị
                totalPrice += product.price;
                return (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      <div className="flex space-x-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={120}
                          height={60}
                          className="w-24 h-24 rounded-lg"
                        />
                        <div>
                          <h3 className="text-lg">{product.name}</h3>
                          <p className="text-xs font-light line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>1</TableCell>
                    <TableCell className="text-right">
                      {product.price}đ
                    </TableCell>
                    <TableCell>
                     <div className="flex space-x-2 items-start">
                       <Link href={`/admin/products/${product.id}/edit`}>
                         <Button variant={"outline"}>Edit</Button>
                       </Link>
                       <DeleteProduct product={product} />
                     </div>
                    </TableCell>
                  </TableRow>

                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
