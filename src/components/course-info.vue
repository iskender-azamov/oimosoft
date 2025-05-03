<template>
  <div class="container">
    <h2 class="mb-3 mt-4 text-white text-5xl uppercase">
      Продукты
    </h2>

    <swiper
        :modules="modules"
        :slidesPerView="4"
        :spaceBetween="30"
        :breakpoints="breakpoints"
        :navigation="true"
        class="mySwiper3"
    >
      <swiper-slide
          v-for="(slideContent, index) in products"
          :key="index"
          class="sticky top-50"
          @click="openModal(slideContent)"
      >
        <div
            @click="visible = true"
            class="cursor-pointer"
        >
          <img :src="slideContent.img" alt="" class="slide-image"
               style="object-fit: cover; object-position: center; border-radius: 15px"/> >/>
          <h3 class="text-white">{{ slideContent.name }}</h3>
          <p class="text-white">{{ slideContent.duration }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <div class=" flex justify-content-center">
    <Dialog class="card w-11 sm:w-8 md:w-5 lg:w-4" v-model:visible="visible" modal :header="card.name">
      <div class="flex flex-column align-items-center">
        <img :src="card.img" alt="" class="w-5rem h-5rem mb-2"
             style="object-fit: cover; object-position: center; border-radius: 50%"/>
        <p class="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>


        <div class="flex flex-column align-items-start w-full py-2">
          <a href="#" class="flex align-items-center link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google-play"
                 viewBox="0 0 16 16">
              <path
                  d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
            </svg>

            <p class="ml-2 cursor-pointer ">Посмотреть в Goolge Play</p>
          </a>
          <a href="#" class="flex align-items-center link">
            <svg  fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
              <path
                  d="M15,27c6.627,0,12-5.373,12-12S21.627,3,15,3C8.373,3,3,8.373,3,15S8.373,27,15,27z M9.848,20.53 C9.658,20.833,9.333,21,8.999,21c-0.181,0-0.364-0.049-0.529-0.152c-0.469-0.293-0.611-0.91-0.318-1.378l0.27-0.432 C8.595,19.016,8.782,19,9,19c0.604,0,1.105,0.191,1.526,0.445L9.848,20.53z M9,18c-0.552,0-1-0.448-1-1s0.448-1,1-1h1.321l3.5-5.6 l-1.169-1.87c-0.292-0.468-0.15-1.085,0.318-1.378c0.468-0.292,1.085-0.149,1.378,0.318L15,8.513l0.652-1.043 c0.293-0.469,0.91-0.612,1.378-0.318c0.469,0.293,0.611,0.91,0.318,1.378L12.679,16h3.187c0.255,0.183,0.537,0.467,0.835,0.941 C16.922,17.292,17.03,17.65,17.09,18H9z M21.848,19.47c0.292,0.468,0.15,1.085-0.318,1.378C21.365,20.951,21.182,21,21.001,21 c-0.333,0-0.659-0.167-0.849-0.47l-4.52-7.232c0.08-0.199,0.183-0.413,0.336-0.657c0.277-0.441,0.632-0.748,1.007-0.968L19.679,16 H21c0.552,0,1,0.448,1,1s-0.448,1-1,1h-0.071L21.848,19.47z"/>
            </svg>

            <p class="ml-2 cursor-pointer ">Посмотреть в App Store</p>
          </a>
        </div>
      </div>
    </Dialog>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import {Navigation} from "swiper/modules";

const modules = ref([Navigation]);
const products = ref([
  {
    img: "/img/617fa550c4055a4a51c6d4ff_categories_03.webp.png",
    name: "Front-End",
    duration: "6 ай",
  },
  {
    img: "/img/617fa5505ecb8e2f5f217405_categories_01.webp.png",
    name: "UX/UI design",
    duration: "3 ай",
  },
  {
    img: "/img/617fa550a239182daefe2e21_categories_02.webp.png",
    name: "Проект менеджмент",
    duration: "6 ай",
  },
  {
    img: "/img/617fa550c4055a4a51c6d4ff_categories_03.webp.png",
    name: "Front-End",
    duration: "6 ай",
  },
  {
    img: "/img/617fa550a23918491cfe2e20_categories_04-p-500.webp.png",
    name: "Scratch",
    duration: "2 ай",
  },
  {
    img: "/img/617fa550c4055a4a51c6d4ff_categories_03.webp.png",
    name: "Front-End",
    duration: "6 ай",
  },
  {
    img: "/img/617fa550a23918491cfe2e20_categories_04-p-500.webp.png",
    name: "Scratch",
    duration: "2 ай",
  },
]);
const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  576: {
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
    slidesPerView: 4,
    spaceBetween: 30,
  },
};
const openModal = (item: any) => {
  console.log(item)
  card.value = item;
}
const visible = ref(false);
const card = ref<any>({});
// let myEmodji = [
//     "😁",
//     "😎",
//     "😂",
//     "😍",
//     "😒",
// ]
// let urlAnimate = ()=>{
//   window.location.hash = myEmodji[Math.floor((Date.now()/100)%myEmodji.length)];
//   setTimeout(urlAnimate,200)
// }
//
// urlAnimate();
</script>
<style scoped lang="scss">
.sticky-element {
  position: sticky !important;
  top: 40% !important;
}

.h-80 {
  height: auto !important;
}


</style>
<style lang="scss">
.card {
  background: transparent;
  border-radius: 10px;
  overflow: hidden !important;

  .p-dialog-title {
    color: #fff;
  }

  .p-dialog-header-icon .p-dialog-header-close .p-link svg path {
    stroke: #fff !important;
    fill: #fff !important;
  }

  .p-dialog-header, .p-dialog-content {
    background-color: rgba(30, 30, 30, 0.4); // прозрачность
    backdrop-filter: blur(14px) saturate(180%);
    -webkit-backdrop-filter: blur(14px) saturate(180%); // Safari
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 10px !important;
  }

  .p-dialog-content {
    color: #fff;
    padding-top: 20px;
  }

  .link {
    svg{
      width: 20px;
    }
    &:hover {
      svg,path{
        fill: #F58F00;

      }
      p{
        color: #F58F00;
      }
    }
  }
}

.mySwiper3 {
  height: 550px;

  .swiper-slide {
    box-shadow: 0px 64px 50px -32px rgba(6, 7, 37, 0.03);
  }

  .slide-image {
    height: 400px;
    width: 100%;
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
    border: 1px solid #ffffff;
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
    border: 1px solid #ffffff;
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


  @media screen and (max-width: 1300px) {
    height: 450px !important;
    .slide-image {
      height: 310px;
    }
  }
  @media screen and (max-width: 1100px) {
    height: 530px !important;
    .slide-image {
      height: 370px;
    }
  }
  @media screen and (max-width: 620px) {
    height: 470px !important;
    .slide-image {
      height: 320px;
    }
  }
  @media screen and (max-width: 414px) {
    height: 450px !important;
    .slide-image {
      height: 300px;
    }
  }
}
</style>
