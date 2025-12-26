"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/images/carousel-images/image1.jpg",
  "/images/carousel-images/image2.jpg",
  "/images/carousel-images/image3.jpg",
  "/images/carousel-images/image4.jpg",
  "/images/carousel-images/image5.jpg",
];

export default function Carousel({className = ""}) {
  return (
    <div className={`w-full ${className}`}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true} // Infinite loop (5 -> 1)
        speed={300} // Your duration: 300ms
        autoplay={{
          delay: 4000, // Your delay: 4000ms
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="max-w-screen"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="max-w-[600px]">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="rounded-3xl object-cover aspect-16/9 shadow-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}