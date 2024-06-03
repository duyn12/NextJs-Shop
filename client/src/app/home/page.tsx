/* eslint-disable @next/next/no-img-element */
'use client'
import Card from "@/components/Card";
import HeroBanner from "@/components/banner";
import HomeContainer from "@/components/home-container";
import { useScroll } from "framer-motion";
import React, { useRef } from 'react';
import dynamic from "next/dynamic";
import RTXBox from "@/components/3DBox/page";
import Projects from "@/components/3Dscroll";
const Scene = dynamic(() => import('@/components/3Dscroll/Scene'), {
  ssr: false,
})

const isAuth = false;
export default function Home() {
  // if (!isAuth) {
  //   redirect('/login')
  // }
  const container = useRef();
  const { scrollYProgress } = useScroll({
    // target: container,
    offset: ['start start', 'end end']
  });

  return (
    <main>
      <HeroBanner />
      <HomeContainer />
      <div className="h-[150vh] bg-foreground">
        <div className="sticky top-10 h-screen">
          <div className="absolute right-10 top-20">
            <img width={300} height={300} src="https://storage-asset.msi.com/global/picture/image/feature/vga/NVIDIA/RTX-4060-GAMING-X-8G-MLG/kv-gaming-x.png" alt="" />
          </div>
          <Projects />
          <Scene scrollProgress={scrollYProgress}/>
        </div>
      </div>

      {/* <Vertical /> */}
      <RTXBox />
      <Card />
    </main>
  );
}
