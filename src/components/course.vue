<template>
  <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :modules="modules"
      :breakpoints="breakpoints"
      :navigation="true"
      loop
      class="mySwiper courses"
  >
    <swiper-slide
        v-for="(course, index) in courses"
        :key="index"
        class="course"
        :class="{ activeCourse: course.activeCourse }"
        @mouseover="courseHover(course.id, course.activeCourse)"
        @mouseleave="courseHover(course.id, course.activeCourse)"
    >
      <div class="course__block">
        <img :src="`${course.img}`" alt="" class="course__img"/>
        <h3 class="course__title" :class="{ courseTitle: course.activeCourse }">
          {{ course.courseTitle }}
        </h3>
        <div
            class="course__date"
            :class="{ courseDuration: course.activeCourse }"
        >
          <div class="course__date-number">
            {{ course.courseDurationNumber }}
          </div>
          <div class="course__date-text">
            <!--            {{ course.courseDurationText }}-->
            years old
          </div>
        </div>
        <div
            class="course__rectangle hidden sm:flex"
            :class="{ courseRectangle: course.activeCourse }"
        ></div>
      </div
      >
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper/modules";

import "swiper/css/navigation";

const courses = ref([
  {
    id: 1,
    img: "/img/baha.jpg",
    courseTitle: "Saifidinov Bekturgan",
    courseDurationNumber: "22",
    courseDurationText: "месяц",
    activeCourse: true,
  },

  {
    id: 2,
    img: "/img/musu.jpg",
    courseTitle: "Nabiev Mustafa",
    courseDurationNumber: "21",
    courseDurationText: "месяц",
    activeCourse: false,
  },
  {
    id: 3,
    img: "/img/baha.jpg",
    courseTitle: "Saifidinov Bekturgan",
    courseDurationNumber: "21",
    courseDurationText: "месяц",
    activeCourse: false,
  },
  {
    id: 4,
    img: "/img/temi.jpg",
    courseTitle: "Saifidinov Bekturgan",
    courseDurationNumber: "21",
    courseDurationText: "месяц",
    activeCourse: false,
  },
  {
    id: 5,
    img: "/img/frontend.png",
    courseTitle: "Азамов Искендер",
    courseDurationNumber: "21",
    courseDurationText: "месяц",
    activeCourse: false,
  },
]);
const courseHover = ref((id: number, isActive: boolean) => {
  courses.value.forEach((el) => {
    if (id == el.id) {
      el.activeCourse = true;
    }
    if (id !== el.id) {
      el.activeCourse = false;
    }
  });
});
const modules = [Navigation];
const breakpoints = {
  "640": {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  "768": {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  "1400": {
    slidesPerView: 1,
    spaceBetween: 40,
  }
};
const scroll = ref();
const coursePrev = () => {
};
const courseNext = () => {
};
</script>

<style scoped lang="scss">
.courses {
  display: flex;
  width: 100%;

  .course {
    cursor: pointer;
    width: 14.3% !important;
    overflow: hidden;
    transition: 0.6s !important;
    @media screen and (max-width: 1100px) {
      width: 100% !important;

      .course__title {
        transform: rotate(0deg);
      }
      .course__rectangle {
        left: -120px;
      }
      .course__date {
        opacity: 1;
        z-index: 10;

      }
    }
  }

  .course__block {
    height: 560px;
    position: relative;
    overflow: hidden;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000000;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 13%, rgba(0, 0, 0, 0.77) 100%);
    }


  }

  .course__img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
    object-position: center;
  }

  .course__title {
    position: absolute;
    bottom: 15%;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 37px;
    display: flex;
    align-items: center;
    color: #ffffff;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    left: 20px;
    z-index: 2;
    width: 30%;
    transition: 0.7s;

  }

  .courseTitle {
    transform: rotate(0deg);
    width: 30%;
  }

  .course__date {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 15%;
    right: 20px;
    opacity: 0;
    @media screen and (max-width: 576px) {
      opacity: 1;
    }
  }

  .course__date-number {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 52px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }

  .courseDuration {
    opacity: 1;
    z-index: 10;
  }

  .course__date-text {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }

  .course__rectangle {
    width: 120px;
    height: 120px;
    background: #F58F00;
    position: absolute;
    bottom: 15%;
    left: 0px;
    z-index: 1;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
  }

  .courseRectangle {
    left: -120px;
  }

  .activeCourse {
    width: 30% !important;
    @media screen and (max-width: 1100px) {
      width: 100% !important;
      .course__rectangle {
        left: -120px;
      }
      .course__date {
        opacity: 1;
        z-index: 10;

      }
    }

    .course__img {
      object-fit: cover;
      object-position: center;
    }

    .course__title {
      //left: 20px;
    }
  }
}

@media screen and (max-width: 1100px) {
}
</style>
<style lang="scss">
.mySwiper {
  height: 600px !important;

  .swiper-slide {
    box-shadow: 0px 64px 50px -32px rgba(6, 7, 37, 0.03);
  }

  .swiper-wrapper {
    position: relative !important;
  }

  .swiper-button-next {
    display: none;
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
    background-image: url("../public/img/next.svg");
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    height: 40px;
    content: "";
  }

  .swiper-button-prev {
    display: none;
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
    background-image: url("../public/img/prev.svg");
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    height: 40px;
    content: "";
  }

  @media screen and (max-width: 1100px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: block !important;
    }
  }
}
</style>
