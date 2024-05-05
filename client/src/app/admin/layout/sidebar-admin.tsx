import { Button } from "@/components/ui/button";
import { LayoutDashboard, LogOut, Package, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import ButtonLogoutAdmin from "./button-logout-admin";

const AdminSidebar = () => {
  return (

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        
        <div className="h-full px-3 py-4 bg-zinc-200 dark:bg-gray-800">
        <h2 className="p-4 p">Hello, Admin</h2>
            <Button variant="ghost" asChild><Link href="/" className="w-full my-2"><LayoutDashboard className="w-4 h-4 mr-2"/>  Dashboard</Link></Button>
            <Button variant="ghost" asChild><Link href="/admin/products" className="w-full my-2"> <Package className="w-4 h-4 mr-2"/>Sản phẩm</Link></Button>
            <Button variant="ghost" asChild><Link href="/admin/" className="w-full my-2"> <ShoppingBag className="w-4 h-4 mr-2"/>Đơn hàng</Link></Button>
            <Button variant="ghost" asChild><Link href="/admin/user" className="w-full my-2"> <User className="w-4 h-4 mr-2"/>Người dùng</Link></Button>
            <ButtonLogoutAdmin />
        </div>
      </aside>
  );
};

export default AdminSidebar;
