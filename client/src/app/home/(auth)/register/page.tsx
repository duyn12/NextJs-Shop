'use client'

import RegisterForm from '@/app/home/(auth)/register/register-form'
import Link from 'next/link'

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
      <div className="rounded-lg dark:border-gray-700 shadow dark:border p-10 w-4/12">
        <h1 className="text-xl font-semibold text-center">Đăng nhập</h1>
        <div className="flex justify-center px-5 py-2.5">
          <RegisterForm />
        </div>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-center">
          Don’t have an account?{" "}
          <Link
            href="/home/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage