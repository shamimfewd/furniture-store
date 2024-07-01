import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const ProductShowcase = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="max-w-4xl mx-auto">
      <Swiper
        onSwiper={setSwiperRef}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={3}
        spaceBetween={15}
        loop={true}
        centeredSlides={true}
        pagination={{
          type: "fraction",
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/618-aRMot3L._AC_SL1000_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/618-aRMot3L._AC_SL1000_.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/618-aRMot3L._AC_SL1000_.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/618-aRMot3L._AC_SL1000_.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/618-aRMot3L._AC_SL1000_.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/618-aRMot3L._AC_SL1000_.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/618-aRMot3L._AC_SL1000_.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/618-aRMot3L._AC_SL1000_.jpg"
            alt=""
          />
        </SwiperSlide>
        <div className="swiper-button-prev bg-blue-500 text-white p-2 rounded"></div>
        <div className="swiper-button-next bg-blue-500 text-white p-2 rounded"></div>
      </Swiper>
    </div>
  );
};

export default ProductShowcase;
