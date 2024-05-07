import { ShoppingCart } from "lucide-react";

export default function ButtonAddCart() {
  return (
    <>
      <button className="bg-red-600 flex justify-center text-white py-[8px] w-full duration-300 hover:bg-red-500 group-hover:-translate-y-10" >
        <ShoppingCart className="mr-2 h-4 w-4" />
        Thêm vào giỏ hàng
      </button>
    </>
  );
}
