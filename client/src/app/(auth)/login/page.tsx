import LoginForm from "@/app/(auth)/login/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
      <div className="rounded-lg dark:border-gray-600 shadow dark:border p-10 w-4/12">
        <h1 className="text-xl font-semibold text-center">Đăng nhập</h1>
        <div className="flex justify-center px-5 py-2.5">
          <LoginForm />
        </div>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-center">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}
