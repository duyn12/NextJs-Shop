"use client";

import authApiRequest from "@/apiRequests/auth";
import { useAppContext } from "@/app/app-provider";
import { Button } from "@/components/ui/button";
import { handleErrorApi } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function ButtonLogoutAdmin() {
  const { user } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();
  const handleLogout = async () => {
    try {
      await authApiRequest.logoutFromNextClientToNextServer();
      router.push("/admin/login");
    } catch (error) {
      handleErrorApi({
        error,
      });
      authApiRequest.logoutFromNextClientToNextServer(true).then((res) => {
        router.push(`/admin/login?redirectFrom=${pathname}`);
      });
    } finally {
      router.refresh();
    }
  };
  return (
    <Button onClick={handleLogout} variant="destructive" className="w-full mt-4">
      <LogOut className="w-4 h-4 mr-2" />
      Đăng xuất
    </Button>
  );
}
