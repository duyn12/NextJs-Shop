// /app/layout.tsx
import { ReactNode } from "react";
import "../globals.css";
import AdminSidebar from "./layout/sidebar-admin";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import HeaderAdmin from "./layout/header-admin";
import { cookies } from 'next/headers'
import accountApiRequest from '@/apiRequests/account'
import { AccountResType } from "@/schemaValidations/account.schema";
import AppProvider from "../app-provider";
type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')
  let user: AccountResType['data'] | null = null
  if (sessionToken) {
    const data = await accountApiRequest.me(sessionToken.value)
    user = data.payload.data
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Toaster />
        <AppProvider inititalSessionToken={sessionToken?.value} user={user}>
          <AdminSidebar /> 
          <HeaderAdmin user={user} />
          <div className="ml-[17%] pt-20">{children}</div>
          </AppProvider>
      </body>
    </html>
  );
}
