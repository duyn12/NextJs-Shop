import accountApiRequest from "@/apiRequests/account";
import ProfileForm from "@/app/home/me/profile-form";
import { cookies } from "next/headers";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hồ sơ người dùng'
}
export default async function MeProfile() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  const result = await accountApiRequest.me(sessionToken?.value ?? "");
  return (
    <div className="mt-12 mx-auto w-6/12 shadow-xl">
        <div className="w-full rounded-lg dark:border-gray-700 shadow dark:border p-10">
          <h1 className="text-xl font-semibold text-center">Profile</h1>
          <ProfileForm profile={result.payload.data} />
        </div>
    </div>
  );
}
