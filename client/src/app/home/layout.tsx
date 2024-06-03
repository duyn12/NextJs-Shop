/* eslint-disable @next/next/no-async-client-component */
"use client";
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import '../globals.css'
import Header from '@/components/layout/header'
import { Toaster } from '@/components/ui/toaster'
import AppProvider from '@/app/app-provider'
import SlideSession from '@/components/slide-session'
import Footer from "@/components/Footer/Footer2";
import Intro from "@/components/Footer/Intro";
import Lenis from 'lenis';
import { useEffect } from "react";
const inter = Inter({ subsets: ['vietnamese'] })



export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
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
          <AppProvider>
            <Header />
            <div className='mt-20'>{children}</div>
            <SlideSession />
            <Intro />
            <Footer />
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}