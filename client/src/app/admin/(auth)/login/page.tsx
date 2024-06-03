/* eslint-disable @next/next/no-img-element */
import LoginForm from "@/app/admin/(auth)/login/login-form";
// import Picture from "../public/secure-login.png";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center w-full p-12 mt-16">
      <div className="rounded-lg dark:border-gray-600 shadow dark:border p-10 w-4/12">
        <h1 className="text-xl font-semibold text-center">Đăng nhập Admin</h1>
        <div className="flex justify-center px-5 py-2.5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
