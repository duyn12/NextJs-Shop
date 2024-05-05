import product from "@/apiRequests/product";
import { useAppContext } from "@/app/app-provider";
import { Button } from "@/components/ui/button";
import { handleErrorApi } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import productApiRequest from "@/apiRequests/product";
import { cookies } from "next/headers";

export default async function ButtonBuy() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  const { payload } = await productApiRequest.getList();
  const productList = payload.data;
  const { user } = useAppContext();
  const router = useRouter();
  const handleBuy = async () => {
    if (user) {
      // Nếu đã đăng nhập, chuyển hướng đến trang thanh toán
      router.push("/home/checkout");
    } else {
      // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
      router.push("/home/login");
    }
  };
  return (
    // <Button size={'sm'} onClick={handleLogout}>
    //   Đăng xuất
    // </Button>
      <Button
        variant="destructive"
        className="flex ml-auto w-32 lg:w-1/2 w-full"
        onClick={handleBuy}
      >
        Mua ngay
      </Button>
  );
}
