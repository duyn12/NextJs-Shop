'use client'
import { ModeToggle } from "../mode-toggle";
import ButtonLogout from "@/components/button-logout";
import { Suspense } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUserRound, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import SearchInput from "../Search-input";
import { useAppContext } from '@/app/app-provider'
function SearchBarFallback() {
  return <>placeholder</>;
}
export default function Header() {
  const { user } = useAppContext()
  return (
    <header className="fixed bg-background w-full top-0 z-50 shadow">
      <div className="container w-full flex items-center justify-between gap-5 h-20">
        <Link href="/" className="logo text-3xl text-red-800 font-bold">
          REX-SHOP
        </Link>
        <div className="hidden font-bold lg:flex lg:flex-1 gap-x-7 justify-center">
          
          <Link href="/home">Trang chủ</Link>
          <Link href="/home/products">Sản phẩm</Link>
          <Link href="/home/support">Hỗ trợ</Link>
          
        </div>
        <Suspense fallback={<SearchBarFallback />}>
          <SearchInput />
        </Suspense>

        <ul className="border-l pl-4 flex gap-4">
          {/* <ModeToggle /> */}
          {/* <ShoppingCart /> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {!user ? (
                <>
                  <Link href="/home/login" className="">
                    <Button variant="ghost" size="icon">
                      <CircleUserRound />
                    </Button>
                  </Link> 
                </>
              ) : (
                <>
                  <Button variant="ghost" size="icon">
                    <CircleUserRound />
                  </Button>
                </>
              )}
            </DropdownMenuTrigger>
            {user ? (
              <>
                <DropdownMenuContent className="p-4">
                  <DropdownMenuLabel className="flex justify-center">
                    {user.email},
                  </DropdownMenuLabel>
                  <DropdownMenuLabel className="flex justify-center">
                    Chào {user.name},
                  </DropdownMenuLabel>
                  <DropdownMenuItem className="w-52 flex justify-center">
                    <Link
                      href="/home/me"
                      className="text-sm font-semibold leading-6 "
                    >
                      Thông tin của bạn
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex justify-center">
                    <ButtonLogout />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </>
            ) : (
              <></>
            )}
          </DropdownMenu>
        </ul>
      </div>
    </header>
  );
}
