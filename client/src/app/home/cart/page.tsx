"use client";
import ProductBreadcrumb from "@/components/products/products-breadcrum";
import { Button } from "@/components/ui/button";
// import {
//   DecreaseQuantity,
//   DeleteCart,
//   IncreaseQuantity,
// } from "@/app/_redux/actions";
import Image from "next/image";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSelector, useDispatch } from "react-redux";

export default function CartPage() {
  const ListCart: any[] = [];
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state._todoProduct);
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });

  return (
    <div className="container py-8 ">
      <h2 className="text-2xl font-bold mb-6">Giỏ hàng</h2>
      <ProductBreadcrumb homeElement={undefined} separator={undefined} />
      <div className="grid gap-10 grid-cols-4">
        <div className="col-span-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sản phẩm</TableHead>
                <TableHead>Số lượng</TableHead>
                <TableHead className="text-right">Giá</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ListCart &&
                ListCart.map((cart: any, key: number) => {
                  return (
                    <TableRow key={items.id}>
                      <TableCell className="font-medium">
                        <div className="flex space-x-4">
                          <Image
                            src={items.image}
                            alt={items.name}
                            width={120}
                            height={60}
                            className="w-24 h-24 rounded-lg"
                          />
                          <div>
                            <h3 className="text-lg">{items.name}</h3>
                            <p className="text-xs font-light line-clamp-2">
                              {items.description}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {/* <div className="flex flex-row gap-2 justify-center">
                          <span
                            className="text-xl px-2 py-1 text-black font-bold cursor-pointer"
                            onClick={() => dispatch(DecreaseQuantity(key))}
                          >
                            -
                          </span>
                          <span className="bg-gray-400 w-10 text-center text-xl px-1 py-1 text-white font-bold">
                            {cart.quantity}
                          </span>
                          <span
                            className="text-xl px-2 py-1 text-black cursor-pointer"
                            onClick={() => dispatch(IncreaseQuantity(key))}
                          >
                            +
                          </span>
                        </div> */}
                      </TableCell>
                      <TableCell className="text-right">
                        {items.price}đ
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <div className="text-center">
          <p className="mb-2">
            Total : {Number(TotalCart).toLocaleString("en-US")} $
          </p>
          <Button size={"lg"}>Thanh toán</Button>
        </div>
      </div>
    </div>
  );
}
