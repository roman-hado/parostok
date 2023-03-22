import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const instaSection = () => ({
  slider: null,

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.initImagesSlider();
    });
  },

  initImagesSlider() {
    this.slider = new Swiper(this.$refs.instaSliderImages, {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1000,
      pagination: {
        el: ".insta-slider-images-pagination",
        clickable: true,
      },
    });
  },
});
