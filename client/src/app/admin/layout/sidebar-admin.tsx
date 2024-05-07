import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Command,
  CommandInput,
} from "@/components/ui/command";
import {
  BarChart4,
  EllipsisVertical,
  Home,
  Mail,
  MessageSquare,
  Package,
  Users,
} from "lucide-react";
import Link from "next/link";
import ButtonLogoutAdmin from "./button-logout-admin";

const AdminSidebar = () => {
  return (
    <aside
      id="sidebar"
      className="fixed left-0 top-0 z-40 h-screen w-64 transition-transform"
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 py-4 dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-8 flex items-center rounded-lg px-3 py-2 text-red-900 dark:text-white">
          <span className="text-2xl font-semibold">REX Shop</span>
        </div>
        <ul className="space-y-2 text-sm font-medium">
          <li>
            <Command className="rounded-lg border">
              <CommandInput placeholder="Search..." />
            </Command>
          </li>
          <li>
            <Link
              href={`/admin`}
              className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
            >
               <Home className="w-5 h-5" />
              <span className="text-sidebar">Trang chủ</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/user"
              className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
            >
              <Users className="w-5 h-5" />
              <span className="text-sidebar">Người dùng</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/products"
              className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
            >
              <BarChart4 className="w-5 h-5" />
              <span className="text-sidebar">Analytics</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/products"
              className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
            >
              <Package className="w-5 h-5" />
              <span className="text-sidebar">Products</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/products"
              className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="text-sidebar">Phản hồi</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/products"
              className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sidebar">Mail</span>
            </Link>
          </li>
        </ul>
        <div className="mt-auto">
          <div className="flex w-full justify-between">
            <Link
              href="#"
              className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                width="24"
                height="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="text-sidebar">Settings</span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger>
                {" "}
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ButtonLogoutAdmin />
        </div>
      </div>
      {/* <div className="h-full px-3 py-4 bg-zinc-200 dark:bg-gray-800">
              <Button variant="ghost" asChild><Link href="/admin" className="w-full my-2"><LayoutDashboard className="w-4 h-4 mr-2"/>  Trang chủ</Link></Button>
              <Button variant="ghost" asChild><Link href="/admin" className="w-full my-2"><LayoutDashboard className="w-4 h-4 mr-2"/>  Dashboard</Link></Button>
              <Button variant="ghost" asChild><Link href="/admin/products" className="w-full my-2"> <Package className="w-4 h-4 mr-2"/>Sản phẩm</Link></Button>
              <Button variant="ghost" asChild><Link href="/admin/" className="w-full my-2"> <ShoppingBag className="w-4 h-4 mr-2"/>Đơn hàng</Link></Button>
              <Button variant="ghost" asChild><Link href="/admin/user" className="w-full my-2"> <User className="w-4 h-4 mr-2"/>Người dùng</Link></Button>
              <ButtonLogoutAdmin />
          </div> */}
    </aside>
  );
};

export default AdminSidebar;
