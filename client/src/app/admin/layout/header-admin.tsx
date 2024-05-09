/* eslint-disable @next/next/no-img-element */
import ProductBreadcrumb from "@/components/products/products-breadcrum";
import Link from "next/link";
import { BellRing, Mail } from "lucide-react";
import { AccountResType } from "@/schemaValidations/account.schema";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default async function HeaderAdmin({
  user,
}: {
  user: AccountResType["data"];
}) {
  return (
    <header className="fixed w-full bg-white top-0 z-0 shadow pl-[17%]">
      <div className="container flex items-center justify-between py-2 gap-5 h-10 border-b">
        <div className="text-black font-bold lg:flex lg:flex-1  gap-x-7 justify-end">
          <Link href="/home/products">
          <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                <Mail />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Mail</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
          </Link>
          <Link href="/" className="flex">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <BellRing className="mr-2" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Thông báo!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </div>
        <ul className="border-l pl-4 flex gap-2">
          <h2>Chào, {user.name}</h2>
        </ul>
      </div>
      <div className="p-2">
        <ProductBreadcrumb homeElement={undefined} separator={undefined} />
      </div>
    </header>
  );
}
