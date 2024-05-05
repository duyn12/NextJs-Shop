import productApiRequest from "@/apiRequests/product";
import Image from "next/image";
import { cache } from "react";
import ProductBreadcrumb from "@/components/products/products-breadcrum";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
const getDetail = cache(productApiRequest.getDetail);
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProductDetail({ params, searchParams }: Props) {
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

  return (
    <div className="container pt-6">
      {!product && <div>Không tìm thấy sản phẩm</div>}
      {product && (
        <div>
          <ProductBreadcrumb homeElement={undefined} separator={undefined} />
          <div className="lg:w-4/5 mx-auto flex flex-wrap my-8">
            <Image
              src={product.image}
              alt={product.name}
              width={450}
              height={400}
              className="max-h-[450px] rounded-lg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl mb-16">{product.name}</h1>

              <p className="text-sm my-4">{product.description}</p>
              <form className="my-6">
                <label
                  htmlFor="quantity-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Số lượng:
                </label>
                <div className="relative flex items-center max-w-[8rem]">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="quantity-input"
                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      className="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="quantity-input"
                    data-input-counter
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1"
                    required
                  />
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="quantity-input"
                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      className="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </form>
              <span className="font-bold text-2xl text-red-600">
                {product.price}đ
              </span>
              <div className="flex my-6 gap-6">
                <Link href={`/home/cart`}>
                  <Button
                    variant="secondary"
                    className="flex ml-auto lg:w-1/2 w-full"
                  >
                    <ShoppingCart className="mr-2" />
                    Thêm vào giỏ hàng
                  </Button>
                </Link>

                {isAuthenticated && (
                    //  <Link href={`/home/checkout/${product.id}`}></Link>
                  <Link href={`/home/cart`}>
                    <Button
                      variant="destructive"
                      className="flex ml-auto w-32  w-full"
                    >
                      Mua ngay
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-4 justify-items-center">
        {iconProduct.map((iconproduct, index) => (
          <div key={index}>
            <img src={iconproduct} width={80} height={120} />
          </div>
        ))}
      </div>
    </div>
  );
}