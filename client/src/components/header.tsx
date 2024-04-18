/* eslint-disable @next/next/no-img-element */
import { ModeToggle } from "./mode-toggle";
import ButtonLogout from "@/components/button-logout";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { Button } from "./ui/button";
import SearchInput from "./Search-input";
import { AccountResType } from "@/schemaValidations/account.schema";

export default async function Header({
  user,
}: {
  user: AccountResType["data"] | null;
}) {
  return (
    <header className=" header-fixed-top">
      <ul
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <li className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </li>
        <div className="flex lg:flex lg:flex-1 gap-x-7 items-center">
          <li>
            <Link href="/" className="text-[15px] font-medium text-secondary hover:text-theme_color">
              Trang chủ
            </Link>
          </li>

          <li>
            <Link href="/products" className="text-[15px] font-medium text-secondary hover:text-theme_color">
              Sản phẩm
            </Link>
          </li>
        </div>
        {/* User */}
        <SearchInput />
        <ul className=" border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link href="/login" className="">
                <Button variant="ghost" size="icon">
                  <CircleUserRound />
                </Button>
              </Link>
            </DropdownMenuTrigger>
            {user ? (
              <>
                <DropdownMenuContent className="p-4">
                  <DropdownMenuLabel className="flex justify-center">{user.email},</DropdownMenuLabel>
                  <DropdownMenuLabel className="flex justify-center">Chào {user.name},</DropdownMenuLabel>
                  <DropdownMenuItem className="w-52 flex justify-center">
                    <Link
                      href="/login"
                      className="text-sm font-semibold leading-6 "
                    >
                      Thông tin của bạn
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="w-52 flex justify-center">
                    <ButtonLogout  />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </>
            ) : (
              <></>
            )}
          </DropdownMenu>
        </ul>
      </ul>
    </header>
  );
}
