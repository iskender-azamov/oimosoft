<template>

  <div id="main" style="height: 100px;"></div>
  <div class="container">
    <div class="banner">
      <Course></Course>
    </div>
  </div>
  <div id="categories" style="height: 75px;"></div>
  <CourseInfo ></CourseInfo>
  <div id="about"  style="height: 95px;"></div>
  <div class="about-us">
    <div class="container">
      <div class="about-us__nav">
        <h2 class="about-us__nav-title">
          О НАС
        </h2>
        <p class="about-us__nav-subtitle">
          Ученики не просто слушают теорию, а сразу же начинают
          работать над реальными задачами, что позволяет им быстрее применять знания на
          практике и усваивать материал более эффективно.
        </p>
      </div>


    </div>
  </div>
<!--  <div class="feedback">-->
<!--    <h3 class="feedback__title text-center mb-5">Что говорят о нас</h3>-->
<!--    <swiper-->
<!--      :modules="modules"-->
<!--      :slidesPerView="5"-->
<!--      :edgeSwipeThreshold="1000"-->
<!--      :spaceBetween="30"-->
<!--      :navigation="true"-->
<!--      :slidesPerGroup="1"-->
<!--      :breakpoints="breakpoints"-->
<!--      class="mySwiper2"-->
<!--    >-->
<!--      <swiper-slide-->
<!--        v-for="(slideContent, index) in products"-->
<!--        :key="index"-->
<!--        class="bg-white border-round-xl p-4 h-14rem flex flex-column justify-content-between swiper-slide"-->
<!--      >-->
<!--        <p class="mb-3 pr-2">-->
<!--          {{ slideContent.comment }}-->
<!--        </p>-->
<!--        <div class="flex align-items-center">-->
<!--          <img :src="slideContent.img" alt="" class="mr-3" />-->
<!--          <div class="flex-column">-->
<!--            <h4 class="mb-1">{{ slideContent.name }}</h4>-->
<!--            <p>{{ slideContent.busyness }}</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </swiper-slide>-->
<!--    </swiper>-->
<!--  </div>-->
  <div id="contact"></div>
</template>
<script setup lang="ts">
import Course from "../components/course.vue";
import Search from "../components/search.vue";
import CourseInfo from "../components/course-info.vue";
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/virtual";

// import Swiper core and required modules
import { Navigation } from "swiper/modules";

// Create array with 500 slides
const products = ref([
  {
    img: "../../public/img/617fa55023c6a906cc955301_customers_ava-02.webp.png",
    name: "Rob Zuber",
    busyness: "CEO",
    comment:
      "I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client",
  },
  {
    img: "../../public/img/617fa55023c6a906cc955301_customers_ava-02.webp.png",
    name: "Rob Zuber",
    busyness: "CEO",
    comment:
      "I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client",
  },
  {
    img: "../../public/img/617fa55023c6a906cc955301_customers_ava-02.webp.png",
    name: "Rob Zuber",
    busyness: "CEO",
    comment:
      "I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client",
  },
  {
    img: "../../public/img/617fa55023c6a906cc955301_customers_ava-02.webp.png",
    name: "Rob Zuber",
    busyness: "CEO",
    comment:
      "I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client",
  },
  {
    img: "../../public/img/617fa55023c6a906cc955301_customers_ava-02.webp.png",
    name: "Rob Zuber",
    busyness: "CEO",
    comment:
      "I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client",
  },
  {
    img: "../../public/img/617fa55023c6a906cc955301_customers_ava-02.webp.png",
    name: "Rob Zuber",
    busyness: "CEO",
    comment:
      "iskenderely apply my knowledge in my work, found myself a new client",
  },
  {
    img: "../../public/img/617fa55023c6a906cc955301_customers_ava-02.webp.png",
    name: "Rob Zuber",
    busyness: "CEO",
    comment:
      "I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client",
  },
]);
const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  414: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  820: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  1100: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
};
const modules = [Navigation];

</script>
<style  lang="scss">
.banner {
  display: flex;
  align-items: flex-start;
  .title {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 76px;
    line-height: 76px;
    display: flex;
    align-items: center;
    color: #1e1e2f;
    width: 30%;
    margin-top: 50px;
    margin-right: 40px;
  }

  @media screen and (max-width: 1100px) {
    .title {
      font-weight: 600;
      font-size: 50px;
      line-height: 60px;
      margin-right: 60px;
      width: 100%;
    }
  }
  @media screen and (max-width: 620px) {
    flex-direction: column;
    .title {
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 470px) {
    .title {
      margin-top: 10px;
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 45px;
      display: flex;
      align-items: center;
      color: #1e1e2f;
      width: 50%;
    }
  }
}

.about-us {
  margin-bottom: 100px;
  &__nav {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  &__nav-title {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    display: flex;
    align-items: center;
    color: #ffffff;
    width: 50%;
    padding-right: 20%;
    margin-bottom: 20px;
  }
  &__nav-subtitle {
    padding-right: 120px;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #ffffff;
    width: 50%;
  }
  &__info {
    display: flex;
    align-items: center;
    margin-top: 50px;
  }
  &__info-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 68px;
    justify-content: flex-start;
    width: 25%;
  }
  &__info-text-row {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  &__info-text--logo {
    width: 55px !important;
    height: 55px !important;
    background-color: gray;
    border-radius: 50%;
    margin-right: 20px;
  }
  &__info-text--caption {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #1e1e2f;
  }
  &__info-text-line {
    height: 52px;
    margin-left: 27.5px;
    border-left: 1px dashed #000000;
    margin-bottom: 20px;
  }
  &__video-relative {
    width: 75%;
  }
  &__info-video {
    width: 100%;
    border-radius: 17px;
    position: relative;
  }
  &__info-rec {
    width: 60%;
    height: 125px;
    background: #5853e4;
    position: absolute;
    left: 33%;
    top: 0px;
    transform: translateY(-24%);
  }

  @media screen and (max-width: 1300px) {
    &__info {
      flex-wrap: wrap;
    }
    &__info-text {
      width: 100%;
    }
    &__info-text--logo {
      width: 90px !important;
      height: 90px !important;
    }
    &__info-text-line {
      margin-left: 45px;
    }
    &__info-rec {
      width: 60%;
      height: 100px;
    }
    &__video-relative {
      width: 100%;
      margin-top: 50px;
    }
  }

  @media screen and (max-width: 1100px) {
    &__nav {
      flex-wrap: wrap;
    }
    &__nav-title {
      width: 100%;
      margin-bottom: 20px;
    }
    &__nav-subtitle {
      width: 100%;
    }
  }

  @media screen and (max-width: 820px) {
    &__info-text {
      padding-right: 0px;
    }
  }

  @media (hover: hover) {
  }

  @media screen and (max-width: 620px) {
    &__nav-title {
      padding-right: 0px;
    }
    &__nav-subtitle {
      padding-right: 0px;
    }
    &__info-text--logo {
      width: 55px !important;
      height: 55px !important;
    }
    &__info-text-line {
      margin-left: 27.5px;
    }
    &__info-rec {
      width: 60%;
      height: 70px;
    }
  }

  @media screen and (max-width: 470px) {
  }
}

.feedback {
  .padding {
    padding-left: 300px;
  }
  .profile {
    width: 56px;
    height: 56px;
  }
  .p-carousel-content {
    display: none !important;
  }
  .p-carousel-indicators {
    display: none !important;
  }
}
</style>
<style lang="scss">
.mySwiper2 {
  height: 300px;
  .swiper-slide {
    box-shadow: 0px 64px 50px -32px rgba(6, 7, 37, 0.03);
  }
  .swiper-wrapper {
  }
  .swiper-button-next {
    display: block;
    width: 40px;
    height: 40px;
    top: 90%;
    left: 51%;
    border-radius: 50%;
    border: 1px solid transparent;
  }
  .swiper-button-next:hover {
    border: 1px solid black;
    border-radius: 50%;
  }
  .swiper-button-next:after {
    display: block;
    background-image: url("../../public/img/next.svg");
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    height: 40px;
    content: "";
  }
  .swiper-button-prev {
    display: block;
    width: 40px;
    height: 40px;
    top: 90%;
    left: auto;
    right: 51%;
    border-radius: 50%;
    border: 1px solid transparent;
  }
  .swiper-button-prev:hover {
    border: 1px solid black;
    border-radius: 50%;
  }
  .swiper-button-prev:after {
    display: block;
    background-image: url("../../public/img/prev.svg");
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    height: 40px;
    content: "";
  }
  @media screen and (max-width: 992px) {
    .swiper-button-prev {
      left: auto;
      right: 51%;
    }
  }
}
</style>
