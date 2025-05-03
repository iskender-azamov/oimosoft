<template>
  <footer class="container flex flex-column mt-8">
    <div class="grid -ml-4">
      <div class="pl-4 pr-0 col-12 md:col-6 lg:col-4 sm:flex-nowrap">
        <router-link to="/"
        ><img src="../../assets/img/logo-white.svg" alt="" class="w-10rem"
        /></router-link>
      </div>
      <div class="pl-4 pr-0 col-12 md:col-6 lg:col-4 flex felx-wrap">
        <div class="w-full flex-wrap flex align-content-start">
          <div class="w-6 mb-3">
            <a href="#main" class="footer-menu">Главная</a>
          </div>
          <div class="w-6 mb-3">
            <a href="#categories" class="footer-menu">Продукты</a>
          </div>
          <div class="w-6 mb-3">
            <a href="#contact" class="footer-menu">Контакты</a>
          </div>
          <div class="w-6 mb-3">
            <a href="#about" class="footer-menu">О нас</a>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <div
        class="flex flex-column-reverse md:flex-row md:justify-content-between align-items-start md:align-items-center py-4"
    >
      <p class="mt-3 md:mt-0 text-sm md:text-base text-white">
        2025 onoisoft. Все права защищены
      </p>

      <div
          class="flex justify-content-between w-full md:w-auto md:justify-content-end"
      >
        <a
            target="_blank"
            href="https://www.facebook.com/biruni.kg?mibextid=LQQJ4d"
            class="icon ml-0 md:ml-4  border-circle flex align-items-center justify-content-center w-2rem h-2rem sm:w-3rem sm:h-3rem"
        >
          <img class="" src="../../../public/img/facebook.svg" alt=""/>
        </a>


        <a
            target="_blank"
            href="https://www.instagram.com/biruni.osh/"
            class="icon ml-0 md:ml-4  border-circle flex align-items-center justify-content-center w-2rem h-2rem sm:w-3rem sm:h-3rem"
        >
          <img class="" src="../../../public/img/instagram.svg" alt=""/>
        </a>
        <a
            href="https://www.facebook.com/biruni.kg?mibextid=LQQJ4d"
            class="icon ml-0 md:ml-4  border-circle flex align-items-center justify-content-center w-2rem h-2rem sm:w-3rem sm:h-3rem"
        >
          <img src="../../../public/img/tiltok.svg" class="w-1rem" alt=""/>
        </a>
        <a
            target="_blank"
            aria-label="Chat on WhatsApp"
            href="https://wa.me/771210001"
            class="icon ml-0 md:ml-4  border-circle flex align-items-center justify-content-center w-2rem h-2rem sm:w-3rem sm:h-3rem"
        >
          <img class="" src="../../../public/img/whatsapp.svg" alt=""/>
        </a>
        <a
            target="_blank"
            href="https://www.youtube.com/@biruniit1788"
            class="icon ml-0 md:ml-4  border-circle flex align-items-center justify-content-center w-2rem h-2rem sm:w-3rem sm:h-3rem"
        >
          <img class="" src="../../../public/img/youtube.svg" alt=""/>
        </a>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.footer-menu {
  position: relative;
  overflow: hidden;
  width: fit-content;
  display: block;
  color: white;
  @media screen and (max-width: 776px){

  }
}

.footer-menu::after {
  transition: 0.3s;
  height: 10px;
  position: absolute;
  left: 0px;
  width: 100%;
  content: "";
  display: block;
  background-color: #F58F00;
  @media screen and (max-width: 1100px) {
    background-color:transparent;

  }
}

.footer-menu:hover::after {
  transform: translateY(-8px);
}

.email {
  display: flex;
  box-shadow: 0px 46px 50px rgba(0, 0, 0, 0.03);
  width: fit-content;
  z-index: 50;

  &__input::placeholder {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1e1e2f;
    padding: 22px 26px;
    text-align: start;
  }

  &__input {
    border: none;
    outline: none;
    background-color: white;
    padding: 22px 26px;
    transition: 0.6s;
    text-align: start;
  }

  &__input:focus {
    border: 1px solid #524eb8;
    transition: 0.6s;
  }

  &__input:hover::after {
    background-color: rgb(246, 246, 246);
  }

  &__btn {
    background: #F58F00;
    border: none;
    cursor: pointer;
    position: relative;
    width: 64px;
    height: 64px;
    overflow: hidden;
  }

  &__btn--text {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    transition: 0s !important;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 5;
  }

  &__btn:hover &__btn--text {
    transition: 0s !important;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

  &__btn--rectanlge {
    width: 100%;
    height: 100%;
    background-color: #feba88;
    position: absolute;
    top: 100%;
    left: 0px;
    transition: 0.4s;
  }

  &__btn:hover &__btn--rectanlge {
    z-index: 1;
    top: 0px;
  }

  @media screen and (max-width: 1100px) {
    .email__input {
      padding: 20px 15px;
    }
    .email__input::placeholder {
      padding: 20px 15px;
    }
  }
  @media screen and (max-width: 620px) {
    position: static;
    margin-top: 20px;
    margin-bottom: 50px;
  }
}

.icon:hover {
  border: 1px solid white;
  @media screen and (max-width: 576px) {
    border: none;
  }
}

.icon img {
  width: 16px;
  @media screen and (min-width: 620px) {
    width: 22px;
  }
}

@media screen and (max-width: 470px) {
  .email__input {
    padding: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 14.4px;
    line-height: 17px;
    color: #1e1e2f;
  }
  .email__input::placeholder {
    padding: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 14.4px;
    line-height: 17px;
    text-align: start;
    color: #1e1e2f;
  }

  .email__btn {
    padding: 10px;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 24.48px;
    line-height: 16px;
    color: #fdfcfb;
  }
}
</style>
