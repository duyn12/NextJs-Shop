/* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useState } from "react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroBanner = () => {
  const imageUrls = [
    "https://storage-asset.msi.com/global/picture/banner/banner_170445163774a272972e56c403d9e3c314dd97a0df.jpeg",
    "https://storage-asset.msi.com/global/picture/banner/banner_1695693289ebeb1f0bb341626b2d0bf870d3cb9254.jpeg",
    "https://storage-asset.msi.com/global/picture/banner/banner_170445142354207818e5028f0c1f969f8e17c9fbac.jpeg",
  ];

  return (

    <Carousel className="w-full">
        <CarouselContent>
          {imageUrls.map((imageUrl, index) => (
            <CarouselItem key={index}>
              <img src={imageUrl} alt={`Ảnh ${imageUrl}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="custombuttonPrevious" />
        <CarouselNext className="custombuttonNext" />
      </Carousel>
  );
};

export default HeroBanner;
