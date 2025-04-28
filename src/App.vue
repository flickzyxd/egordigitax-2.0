<script setup>
import Card from './pages/Card.vue';
import NewComponent from "@/NewComponent.vue";
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cascadia+Code:ital,wght@0,200..700;1,200..700&display=swap"
        rel="stylesheet">

  <NewComponent/>
  <div class="lastDrop">
    <div class="lastDropText">
      <div class="lastDropTextTop"></div>
      <div class="lastDropTextMiddle"></div>
      <button class="lastDropTextButton"></button>
    </div>
    <div class="lastDropImg"></div>
  </div>

  <div class="cards">
    <div class="cardsTop">
      <div class="cardsText"></div>
      <div class="cardsMore"></div>
    </div>
    <div class="cardsBottom">
      <div class="card">
        <div class="cardImg"></div>
        <div class="cardName"></div>
        <div class="cardDesc"></div>
        <div class="cardPrice"></div>
      </div>
      <div class="card">
        <div class="cardImg"></div>
        <div class="cardName"></div>
        <div class="cardDesc"></div>
        <div class="cardPrice"></div>
      </div>
      <div class="card">
        <div class="cardImg"></div>
        <div class="cardName"></div>
        <div class="cardDesc"></div>
        <div class="cardPrice"></div>
      </div>
      <div class="card">
        <div class="cardImg"></div>
        <div class="cardName"></div>
        <div class="cardDesc"></div>
        <div class="cardPrice"></div>
      </div>
    </div>
  </div>

  <div class="cards">
    <div class="cardsTop">
      <div class="cardsText"></div>
      <div class="cardsMore"></div>
    </div>
    <div class="cardsBottom">
      <div class="card">
        <div class="cardImg"></div>
        <div class="cardName"></div>
        <div class="cardDesc"></div>
        <div class="cardPrice"></div>
      </div>
      <div class="card">
        <div class="cardImg"></div>
        <div class="cardName"></div>
        <div class="cardDesc"></div>
        <div class="cardPrice"></div>
      </div>
      <div class="card">
        <div class="cardImg"></div>
        <div class="cardName"></div>
        <div class="cardDesc"></div>
        <div class="cardPrice"></div>
      </div>
      <div class="card">
        <div class="cardImg"></div>
        <div class="cardName"></div>
        <div class="cardDesc"></div>
        <div class="cardPrice"></div>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="footerLeft">
      <div class="vk"></div>
      <div class="tg"></div>
      <div class="inst"></div>
      <div class="yt"></div>
    </div>
    <div class="footerDirect"></div>
  </div>

  <card></card>
</template>

<style>
html {
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

</style>

