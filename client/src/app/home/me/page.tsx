import accountApiRequest from "@/apiRequests/account";
import ProfileForm from "@/app/home/me/profile-form";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function MeProfile() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  // Vì dùng cookie nên api này không được cached trên server
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching

  const result = await accountApiRequest.me(sessionToken?.value ?? "");
  return (
    <div className="">
      <div className="p-24 mx-auto w-6/12">
        <div className="w-full rounded-lg dark:border-gray-700 shadow dark:border p-10">
          <h1 className="text-xl font-semibold text-center">Profile</h1>
          <ProfileForm profile={result.payload.data} />
        </div>
      </div>
    </div>
  );
}
