<script setup>
import Card from './components/Card.vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import LastDrop from "@/components/LastDrop.vue";
</script>

<template>
  <div class="container">

  <Header/>

    <router-view>

    </router-view>

  <Footer/>

  </div>

</template>

<style>
template {
  max-width: 1320px;
  padding: 0 16px;
  margin: 0 auto;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.container {
  max-width: 1320px;
  padding: 0 16px;
  margin: 0 auto;
}

.lastDropImg img {
  width: 100%;
  height: 100%;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
</style>

