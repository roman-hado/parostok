import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
import "swiper/css";

export const sliderSection = () => ({
  init() {
    const arrows = document.querySelector(".arrows");
    const slide = document.querySelector(".swiper-slide");
    const swiperDiff = document.querySelector(".swiper-diff");
    document.addEventListener("DOMContentLoaded", () => {
      if (swiperDiff) {
        if (window.innerWidth >= 1365) {
          if (slide.classList.contains("destroy")) {
            arrows.style.display = "none";
          }
        }
        new Swiper(swiperDiff, {
          slidesPerView: 1,
          spaceBetween: 32,
          speed: 600,
          breakpoints: {
            767: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1023: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1365: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          },
          navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} h-[8px] w-[8px] !bg-white border !border-[#161925] !opacity-[1] !mx-[12px] rounded-[100%]"></span>`;
            },
            bulletActiveClass: "swiper-pagination-bullet-active !bg-dark-100",
          },
        });
      }
    });
  },
});
