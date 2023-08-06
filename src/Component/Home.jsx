import React from "react";
import Products from "./Products";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

function Home() {
  return (
    <div className="hero w-100">
      <Swiper
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.vexels.com/content/194698/preview/shop-online-slider-template-4f2c60.png"
            width="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.vexels.com/content/196482/preview/buy-online-sale-slider-template-002a39.png"
            width="100%"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.vexels.com/content/194732/preview/online-shopping-web-slider-3fe85b.png"
            width="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.vexels.com/content/196481/preview/mega-sale-online-slider-template-3a56d9.png"
            width="100%"
          />
        </SwiperSlide>
      </Swiper>
      <Products />
    </div>
  );
}

export default Home;
