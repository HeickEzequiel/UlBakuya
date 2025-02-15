import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { AdvancedImage } from '@cloudinary/react'
import { img2, img3, img4, img5, img6, img7 } from '../../config/cloudinary'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/scrollbar";

function Carousel() {
 
  return (
    <div className='mt-8'
      style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="swiper-container custom-swiper-container relative"
        style={{
          width: "83.5%",
          justifyItems: "center",
          alignItems: "center",
          placeContent: "center",
          position: "relative",
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          loop={true}
          speed={1000}
          style={{
            overflow: "hidden",
            margin: "auto 1",
          }}
          slidesPerView={1}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <AdvancedImage cldImg={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <AdvancedImage cldImg={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <AdvancedImage cldImg={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <AdvancedImage cldImg={img5} />
          </SwiperSlide>
          <SwiperSlide>
            <AdvancedImage cldImg={img6} />
          </SwiperSlide>
          <SwiperSlide>
            <AdvancedImage cldImg={img7} />
          </SwiperSlide>
        </Swiper>
        {/* Flecha izquierda y derecha */}
        <div className="swiper-button-prev swiper-button-prev-custom text-deco font-extrabold  px-6 rounded-full"></div>
        <div className="swiper-button-next swiper-button-next-custom text-deco font-extrabold  px-6 rounded-full"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  )
}
export default Carousel