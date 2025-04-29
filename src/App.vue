<script setup>
import Card from './pages/Card.vue';
import Header from "@/Header.vue";
import Footer from "@/Footer.vue";
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cascadia+Code:ital,wght@0,200..700;1,200..700&display=swap"
        rel="stylesheet">

  <Header/>

  <div class="lastDrop">
    <div class="lastDropText">
      <div class="lastDropTextTop"></div>
      <div class="lastDropTextMiddle"></div>
      <button class="lastDropTextButton">Details</button>
    </div>
    <div class="lastDropImg"></div>
  </div>

  <card></card>

  <Footer/>

</template>

<style>
html {
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

</style>

