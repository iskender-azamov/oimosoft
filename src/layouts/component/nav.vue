<template>
  <div class="container">
    <div class="container">
      <nav ref="nav">
        <a href="#main" class="logo w-7rem flex align-items-center" @click="">
          <img src="../../assets/img/logo-white.svg" alt="" class="w-full"/>

        </a>
        <ul class="menu">
          <li>
            <a class="menu__link" href="#main"
            >Главная</a
            >
          </li>
          <li>
            <a class="menu__link" href="#categories"
            >Продукты</a
            >
          </li>
          <li>
            <a class="menu__link" href="#about">О нас</a>
          </li>
          <li>
            <a class="menu__link" href="#contact">Контакты</a>
          </li>
        </ul>

        <router-link
            to="#"
            @click="callMenu"
            class="burger"
            ref="burger"
            :class="{ burgerClick: isTrue }"
        >
          <div class="burger__item"></div>
          <div class="burger__item"></div>
        </router-link>
      </nav>
    </div>

    <div ref="burgerMenu" class="burger__menu" :class="{ 'burger__menu-height': isTrue }">
      <div class="container">
        <ul class="menu">
          <li>
            <a href="#main" class="menu__link"
               @click="menuClick">
              Главная</a>
          </li>
          <hr/>
          <li>
            <a href="#categories" class="menu__link"
               @click="menuClick">
              Продукты</a>
          </li>
          <hr/>
          <li>
            <a class="menu__link" href="#about"
               @click="menuClick">О
              нас</a>
          </li>
          <hr/>
          <li>
            <a class="menu__link" href="#contact"
               @click="menuClick">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";

const isTrue = ref(false);
const callMenu = () => {
  if (isTrue.value == true) {
    isTrue.value = false;
  } else {
    isTrue.value = true;
  }
};
const menuClick = () => {
  burgerMenu.value.classList.remove('burger__menu-height');
  isTrue.value = false;
}
const nav = ref();
const burgerMenu = ref();
const burger = ref();
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 10) {
    nav.value.classList.add("navSticky");
  } else {
    nav.value.classList.remove("navSticky");
  }
});

const handleClickOutside = (event: MouseEvent) => {
  const menuEl = burgerMenu.value;
  const iconEl = burger.value;

  if (
      isTrue.value &&
      menuEl &&
      iconEl &&
      !menuEl.contains(event.target as Node) &&
      !iconEl.contains(event.target as Node)
  ) {
    isTrue.value = false;
  }
};
// ⬇️ закрытие при скролле
const handleScroll = () => {
  if (isTrue.value) {
    isTrue.value = false;
  }

  if (window.scrollY > 10) {
    nav.value?.classList.add("navSticky");
  } else {
    nav.value?.classList.remove("navSticky");
  }
};
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  document.addEventListener("click", handleClickOutside);
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped lang="scss">
.container {
  position: relative;
}

nav {
  position: sticky;
  top: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85px;

  .menu {
    display: flex;
    color: black;
  }

  .menu__link {
    margin-left: 40px;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    position: relative;
    z-index: 2;
  }

  .menu__link:after {
    height: 0px;
    transition: 0.3s;
    position: absolute;
    z-index: 1;
    content: "";
    display: block;
    background-color: #F58F00;
    width: 100%;
    bottom: 0;
  }

  .menu__link:hover:after {
    height: 10px;
  }

  .servies {
    display: flex;
    align-items: center;
  }

  .free__btn {
    width: 160px;
    height: 42px;
    background-color: #1e1e2f;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 100px;
    position: relative;
    overflow: hidden;
  }

  .free__btn--rectanlge {
    position: absolute;
    width: 101%;
    height: 101%;
    top: 100%;
    border-radius: 100px;
    left: 0px;
    background-color: #feba88;
    z-index: 2;
    transition: 0.2s;
  }

  .free__btn:hover .free__btn--rectanlge {
    position: absolute;
    top: 0px;
    border-radius: 0;
    z-index: 2;
  }

  .free__btn:hover .free__btn--text {
    position: absolute;
    z-index: 3;
  }

  .free__btn--text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    font-family: "Gilroy";
    z-index: 3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .burger {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    cursor: pointer;
    transition: 0.4s;

  }

  .burger__item {
    background-color: white;
    height: 2px;
    width: 15px;
    margin: 3px;
    transition: 0.4s;
  }

  .burgerClick {
    position: relative;

    .burger__item:nth-child(1) {
      position: absolute;
      transform-origin: 50% 50%;
      transform: translateX(-70%) translateY(-80%) rotate(45deg);
      top: 50%;
      left: 50%;
      transition: 0.4s;
    }

    .burger__item:nth-child(2) {
      position: absolute;
      transform-origin: 50% 50%;
      transform: translateX(-70%) translateY(-80%) rotate(-45deg);
      top: 50%;
      left: 50%;
      transition: 0.4s;
    }
  }

  @media screen and (max-width: 1100px) {
    .menu,
    .servies {
      display: none;
    }

    .burger {
      display: flex;
    }
  }
}

.burger__menu {

  position: fixed;
  top: 85px;
  left: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding: 0 20px;
  background-color: black;
  z-index: 999;

  // Стеклянный фон
  background-color: rgba(30, 30, 30, 0.4); // прозрачность
  backdrop-filter: blur(14px) saturate(180%);
  -webkit-backdrop-filter: blur(14px) saturate(180%); // Safari
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  transition-timing-function: ease-in-out;

  .menu {
    display: flex;
    flex-direction: column;
    color: black;
    width: 100%;
    @media screen and (max-width: 470px) {
      // position: static;
      width: 90%;
    }
  }

  .menu__link {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    position: relative;
    z-index: 2;
    margin: 10px 0px;
    margin-right: 40px;
    width: fit-content;
  }

  .menu__link:after {
    height: 0px;
    transition: 0.6s;
    position: absolute;
    z-index: 1;
    content: "";
    display: block;
    background-color: #feba88;
    width: 100%;
    bottom: 0;
    @media screen and (max-width: 576px) {
      background-color: transparent;
    }
  }

  .menu__link:hover:after {
    height: 10px;
  }

  .servies {
    display: flex;
    align-items: center;
  }

  .free__btn {
    width: 160px;
    height: 42px;
    background-color: #1e1e2f;
    outline: none;
    border: none;
    border: 0.1px solid #ffffff;
    cursor: pointer;
    border-radius: 100px;
    position: relative;
    overflow: hidden;
  }

  .free__btn--rectanlge {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 100%;
    border-radius: 100px;
    left: 0px;
    background-color: #8682fe;
    z-index: 2;
    transition: 0.2s;
  }

  .free__btn:hover .free__btn--rectanlge {
    position: absolute;
    top: 0px;
    border-radius: 0;
    z-index: 2;
  }

  .free__btn:hover .free__btn--text {
    position: absolute;
    z-index: 3;
    font-weight: 600;
  }

  .free__btn--text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    font-family: "Gilroy";
    z-index: 3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.burger__menu-height {
  height: 173px;
  position: fixed;
  top: 85px;
  left: 0;
  width: 100%;
  overflow: hidden;
  padding: 0 20px;


  z-index: 999;
}
.burger__menu.burger__menu-height {
  // 🎯 Стеклянный эффект
  background-color: rgba(0, 0, 0, 0.87);
}
</style>
