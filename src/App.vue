<script>
import Card from './pages/Card.vue';

export default {
  components: {
    Card
  }
}
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cascadia+Code:ital,wght@0,200..700;1,200..700&display=swap"
        rel="stylesheet">

  <div class="header">
    <div class="info">
      <a class="anyIssue" href="https://t.me/sometimesblanked" target="_blank" style="text-decoration: none;">If you had
        any issue</a>
      <div class="infoRight">
        <div class="Language">Language</div>
        <a href="https://vk.com/egordigitax" target="_blank" class="vk">
          <img src="./images/vk.jpg" alt="Кнопка">
        </a>
        <a href="https://t.me/edigitax" target="_blank" class="tg">
          <img src="./images/tg.jpg" alt="Кнопка">
        </a>
        <a href="https://www.instagram.com/egordigitax?igsh=cm84OXpxeXZxZXg5" target="_blank" class="inst">
          <img src="./images/inst.jpg" alt="Кнопка">
        </a>
        <a href="https://www.youtube.com/@egordigitax" target="_blank" class="yt">
          <img src="./images/yt.jpg" alt="Кнопка">
        </a>
      </div>
    </div>
    <div class="underHeader">
      <a class="egordigitax">
        <img src="./images/egordigitax_photo-resizer.ru.jpg" alt="altuha">
      </a>

      <div class="other__header">
        <div class="navigator">
          <button class="navButton">Clothing</button>
          <button class="navButton">Bags</button>
          <button class="navButton">Accessories</button>
          <button class="navButton">Jewellery</button>
          <button class="navButton">Legit</button>
        </div>

        <div class="headerRight">
          <div class="searchButton"></div>
          <button class="featuresButton"></button>
          <button class="accountButton"></button>
          <button class="basketButton"></button>
        </div>
      </div>
    </div>
  </div>
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
</template>

<style>
html {
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

.anyIssue {
  color: dimgrey;
  font-size: 110%;
}

.info {
  display: flex;
  justify-content: space-between;
  color: dimgrey;
}

.infoRight {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.Language {
  display: flex;
  justify-content: center;
  font-size: 130%;
}

.underHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.navigator {
  padding-right: 1000px;
}

.navButton {
  background: none;
  border: none;
  padding: 5px;
  margin: 0;
  font: inherit;
  color: dimgrey;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: "Cascadia Code", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.other__header {
  display: flex;
  flex-direction: row;
}
.egordigitax {
  color: dodgerblue;
  font-family: "Cascadia Code", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>

