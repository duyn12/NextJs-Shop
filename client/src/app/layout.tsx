
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import Header from '@/components/header'
import { Toaster } from '@/components/ui/toaster'
import AppProvider from '@/app/app-provider'
import { cookies } from 'next/headers'
import SlideSession from '@/components/slide-session'
import accountApiRequest from '@/apiRequests/account'
import { AccountResType } from '@/schemaValidations/account.schema'

const inter = Inter({ subsets: ['vietnamese'] })



export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')
  let user: AccountResType['data'] | null = null
  if (sessionToken) {
    const data = await accountApiRequest.me(sessionToken.value)
    user = data.payload.data
  }
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Toaster />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <AppProvider inititalSessionToken={sessionToken?.value} user={user}>
            <Header user={user} />
            <div className='gap-x-10 py-10 container'>{children}</div>
            <SlideSession />
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}