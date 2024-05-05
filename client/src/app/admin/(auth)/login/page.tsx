import LoginForm from "@/app/admin/(auth)/login/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
      <div className="rounded-lg dark:border-gray-600 shadow dark:border p-10 w-4/12">
        <h1 className="text-xl font-semibold text-center">Đăng nhập Admin</h1>
        <div className="flex justify-center px-5 py-2.5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
