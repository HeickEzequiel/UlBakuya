import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { AdvancedImage } from '@cloudinary/react';
import { img2, img3, img4, img5, img6, img7 } from '../../config/cloudinary';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carousel() {
  return (
    <div className="mt-24 flex justify-center items-center bg-gradient-to-b from-white to-gray-100 py-10">
      <div className="relative w-full max-w-6xl rounded-xl overflow-hidden shadow-xl">

        {/* Lado izquierdo - barra con flecha */}
        <div className="hidden sm:flex items-center absolute left-0 top-0 h-full w-14 bg-white/70 backdrop-blur-md z-20 rounded-l-xl">
          <div className="swiper-button-prev swiper-button-prev-custom text-gray-700 hover:text-black w-full h-10 pointer-events-auto select-none cursor-pointer"></div>
        </div>

        {/* Lado derecho - barra con flecha */}
        <div className="hidden sm:flex items-center absolute right-0 top-0 h-full w-14 bg-white/70 backdrop-blur-md z-20 rounded-r-xl">
          <div className="swiper-button-next swiper-button-next-custom text-gray-700 hover:text-black w-full h-10 pointer-events-auto select-none cursor-pointer"></div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          loop={true}
          speed={1000}
          slidesPerView={1}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          className="rounded-xl"
        >
          {[img2, img3, img4, img5, img6, img7].map((img, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-[500px] relative">
              <AdvancedImage
                cldImg={img}
                className="absolute inset-0 w-full h-full object-cover object-center rounded-xl transition-transform duration-500 hover:scale-105"
              />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
