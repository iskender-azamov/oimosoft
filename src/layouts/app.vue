<template>
  <Nav class="navbar mb-3" />
  <slot></slot>
  <Footer></Footer>
</template>
<script setup lang="ts">
import Nav from "./component/nav.vue";
import Footer from "./component/footer.vue";
</script>
<style scoped lang="scss">
.navbar {
  position: fixed;
  height: 85px;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6); // прозрачный фон
  backdrop-filter: blur(10px); // эффект размытия
  -webkit-backdrop-filter: blur(10px); // поддержка Safari
  border-bottom: 1px solid rgba(255, 255, 255, 0.3); // опционально — граница


}

</style>
