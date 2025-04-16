"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./all.css";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 60,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
};

export default function Partner() {
  return (
    <>
      <div className="tf-widget-partner background- py-5">
        <div className="container">
          <div className="tf-partner">
            <Swiper {...swiperOptions} className="sologan-logo ">
            <SwiperSlide>
                <img
                  className="image-logo"
                  src="assets/partners/Paro_FC_logo_final_JPG-min.png"
                  alt="image logo"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="image-logo "
                  src="assets/partners/avya.webp"
                  alt="image logo"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="image-logo "
                  src="assets/partners/gems-logo.png"
                  alt="image logo"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="image-logo"
                  src="assets/partners/HAMS.png"
                  alt="image logo"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="image-logo"
                  src="assets/partners/NOC.png"
                  alt="image logo"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="image-logo"
                  src="assets/partners/Paro_FC_logo_final_JPG-min.png"
                  alt="image logo"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="image-logo "
                  src="assets/partners/avya.webp"
                  alt="image logo"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="image-logo "
                  src="assets/partners/gems-logo.png"
                  alt="image logo"
                />
              </SwiperSlide>
            
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
