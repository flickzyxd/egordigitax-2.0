<script setup>
import Card from './pages/Card.vue';
import Header from "@/Header.vue";
import Footer from "@/Footer.vue";
import LastDrop from "@/LastDrop.vue";
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cascadia+Code:ital,wght@0,200..700;1,200..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

  <div class="container">

  <Header/>

    <lastDrop/>

  <card></card>

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

