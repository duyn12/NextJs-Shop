// /app/layout.tsx
import { ReactNode } from "react";
import "../globals.css";
import AdminSidebar from "./layout/sidebar-admin";
import { Toaster } from "@/components/ui/toaster";
import HeaderAdmin from "./layout/header-admin";
import { cookies } from "next/headers";
import accountApiRequest from "@/apiRequests/account";
import { AccountResType } from "@/schemaValidations/account.schema";
import AppProvider from "../app-provider";
type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  let admin: AccountResType["data"] | null = null;
  if (sessionToken) {
    const data = await accountApiRequest.me(sessionToken.value);
    admin = data.payload.data;
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Toaster />
        <AppProvider inititalSessionToken={sessionToken?.value} user={admin}>
          {!admin ? (
            <>
              <div>{children}</div>
            </>
          ) : (
            <>
              <AdminSidebar />
              <div className="ml-[16.7%] pt-20">{children}</div>
              <HeaderAdmin user={admin} />
            </>
          )}
        </AppProvider>
      </body>
    </html>
  );
}
