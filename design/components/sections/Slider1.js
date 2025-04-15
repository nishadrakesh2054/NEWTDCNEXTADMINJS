// "use client";
// import Link from "next/link";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import './all.css'

// const swiperOptions = {
//   modules: [Autoplay, Pagination, Navigation],
//   effect: "fade",
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
// };

// export default function Slider1() {
//   return (
//     <>
//       <Swiper {...swiperOptions} className="tf-slider-widget  ">
//         <div className="tf-slider swiper-wrappers">
//           <SwiperSlide className="tf-banner swiper-slides">
//             <div className="image-slider">
//               <img
//                 src="assets/academy/futsal.jpg"
//                 alt="image"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//               <div className="overlays" />
//             </div>
//             <div className="themeflat-container">
//               <div className="slide-item">
//                 <div className="silde-content">
//                   <span></span>
//                   <h1 className="flat-title-slider">
//                     HOME OF THE THUNDERBOLTS
//                   </h1>
//                   <p className="flat-description-slider">
//                     Where Champions Are Made
//                   </p>
//                   <div className="button">
//                     <Link href="/register" className="flat-button">
//                       Join Us Now
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="tf-banner swiper-slides">
//             <div className="image-slider">
//               <img
//                 src="assets/academy/football.jpg"
//                 alt="image"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//               <div className="overlays" />
//             </div>
//             <div className="themeflat-container">
//               <div className="slide-item">
//                 <div className="silde-content">
//                   <h1 className="flat-title-slider">
//                     Run with Passion and Purpose
//                   </h1>
//                   <p className="flat-description-slider">
//                     The platform that turns aspirations into accomplishments.
//                     Join now and unleash your potential in the world of fitness
//                     and wellness.
//                   </p>
//                   <div className="button">
//                     <Link href="/register" className="flat-button">
//                       Join Us Now
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="tf-banner swiper-slides">
//             <div className="image-slider">
//               <img
//                 src="assets/contact/contactHead.jpg"
//                 alt="image"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//               <div className="overlays" />
//             </div>
//             <div className="themeflat-container">
//               <div className="slide-item">
//                 <div className="silde-content">
//                   <h1 className="flat-title-slider">
//                     Find Your Pace, Find Your Tribe
//                   </h1>
//                   <p className="flat-description-slider">
//                     The platform that turns aspirations into accomplishments.
//                     Join now and unleash your potential in the world of fitness
//                     and wellness.
//                   </p>
//                   <div className="button">
//                     <Link href="/register" className="flat-button">
//                       Join Us Now
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </div>
//       </Swiper>
//     </>
//   );
// }


"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import './all.css'

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
};

export default function Slider1() {
  return (
    <Swiper {...swiperOptions} className="tf-slider-widgets">
      <div className="tf-slider swiper-wrappers">
        <SwiperSlide className="tf-banner swiper-slides">
          <div className="image-slider">
            <img
              src="assets/academy/futsal.jpg"
              alt="image"
              className="swiper-image"
            />
            <div className="overlays" />
          </div>
          <div className="themeflat-container">
            <div className="slide-item">
              <div className="silde-content">
                <h1 className="flat-title-slider">
                  HOME OF THE THUNDERBOLTS
                </h1>
                <p className="flat-description-slider">
                  Where Champions Are Made
                </p>
                <div className="button">
                  <Link href="/register" className="flat-button">
                    Join Us Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="tf-banner swiper-slides">
          <div className="image-slider">
            <img
              src="assets/academy/football.jpg"
              alt="image"
              className="swiper-image"
            />
            <div className="overlays" />
          </div>
          <div className="themeflat-container">
            <div className="slide-item">
              <div className="silde-content">
                <h1 className="flat-title-slider">
                  Run with Passion and Purpose
                </h1>
                <p className="flat-description-slider">
                  The platform that turns aspirations into accomplishments.
                  Join now and unleash your potential in the world of fitness
                  and wellness.
                </p>
                <div className="button">
                  <Link href="/register" className="flat-button">
                    Join Us Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="tf-banner swiper-slides">
          <div className="image-slider">
            <img
              src="assets/contact/contactHead.jpg"
              alt="image"
              className="swiper-image"
            />
            <div className="overlays" />
          </div>
          <div className="themeflat-container">
            <div className="slide-item">
              <div className="silde-content">
                <h1 className="flat-title-slider">
                  Find Your Pace, Find Your Tribe
                </h1>
                <p className="flat-description-slider">
                  The platform that turns aspirations into accomplishments.
                  Join now and unleash your potential in the world of fitness
                  and wellness.
                </p>
                <div className="button">
                  <Link href="/register" className="flat-button">
                    Join Us Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
}
