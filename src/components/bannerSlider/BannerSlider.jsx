import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./BannerSlider.css";
const images = import.meta.glob("../../assets/*", { eager: true });

const banners = [
  { id: 1, title: "Spicy Noodles", desc: "Lorem ipsum dolor sit amet consectetur a dolor cumque?", image: images["../../assets/banner-3.jpg"].default },
  { id: 2, title: "Spicy Noodles", desc: "Lorem ipsum dolor sit amet consectetur is dolor cumque?", image: images["../../assets/banner-4.jpg"].default },
  { id: 3, title: "Spicy Noodles", desc: "Lorem ipsum dolor sit amet consectetur the dolor cumque?", image: images["../../assets/banner-9.jpg"].default }
];

const BannerSlider = () => {
  return (
    <section className="banner-5">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="swiper-slide slide" style={{ backgroundImage: `url(${banner.image})` }}>
              <div className="content">
                <span>Our Special Dish</span>
                <h3>{banner.title}</h3>
                <p>{banner.desc}</p>
                <a href="#" className="btn3" aria-label={`Order ${banner.title}`}>
                  Order Now <i className="bx bx-chevron-right"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSlider;
