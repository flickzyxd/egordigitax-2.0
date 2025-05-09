<template>
  <div class="header">
    <div class="info">
      <a class="any-issue" href="https://t.me/AIsxght" target="_blank" style="text-decoration: none;">If you had
        any issue</a>
      <div class="infoRight">
        <div class="Language">Language</div>
        <a href="https://vk.com/egordigitax" target="_blank" class="vk">
          <img src="../images/vk.jpg" alt="Кнопка">
        </a>
        <a href="https://t.me/edigitax" target="_blank" class="tg">
          <img src="../images/tg.jpg" alt="Кнопка">
        </a>
        <a href="https://www.instagram.com/egordigitax?igsh=cm84OXpxeXZxZXg5" target="_blank" class="inst">
          <img src="../images/inst.jpg" alt="Кнопка">
        </a>
        <a href="https://www.youtube.com/@egordigitax" target="_blank" class="yt">
          <img src="../images/yt.jpg" alt="Кнопка">
        </a>
      </div>
    </div>
    <div class="underHeader">

      <div class="other__header">
        <div class="teachSanya">
          <router-link to="/" class="egordigitax">
            <img src="../images/egordigitax_photo-resizer.ru.jpg" alt="altuha">
          </router-link>
          <div class="navigator">
            <router-link to="/clothing">
              <button class="navButton">Clothing</button>
            </router-link>

            <router-link to="/bags">
              <button class="navButton">Bags</button>
            </router-link>

            <router-link to="/accessories">
              <button class="navButton">Accessories</button>
            </router-link>

            <router-link to="/jewellery">
              <button class="navButton">Jewellery</button>
            </router-link>

            <router-link to="/legit">
              <button class="navButton">Legit</button>
            </router-link>

          </div>
        </div>

        <div class="headerRight">
          <input type="text" class="searchButton">
          <a href="https://t.me/edigitax" target="_blank" class="featuresButton">
            <img src="../images/features.jpg" alt="Кнопка">
          </a>
          <a href="https://t.me/edigitax" target="_blank" class="accountButton">
            <img src="../images/account.jpg" alt="Кнопка">
          </a>
          <a href="https://t.me/edigitax" target="_blank" class="basketButton">
            <img src="../images/busket.jpg" alt="Кнопка">
          </a>
        </div>
      </div>
    </div>
    <div class="burger">&#9776;</div> <!-- Гамбургер -->
  </div>
</template>
<script>

export default {
  name: 'Header'
}
</script>
<style>
html {
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

.any-issue {
  color: #f0f0f0;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
}

.info {
  display: flex;
  justify-content: space-between;
  color: dimgrey;
  margin-bottom: 16px;
}

.infoRight {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.Language {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}

.underHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.headerRight {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.navigator {
  display: flex;
  gap: 8px;

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
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 475;
  font-style: normal;
}

.other__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 24px;
}

.egordigitax {
  color: dodgerblue;
  font-family: "Cascadia Code", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.teachSanya {
  display: flex;
  gap: 70px;

}

.searchButton {
  width: 200px;
  height: 36px;
  border-radius: 14px;
  border: none;
  background-color: #f0f0f0;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
}

.featuresButton {
  margin-right: 12px;
  margin-left: 12px;
  outline: none;
}

.accountButton {
  margin-right: 12px;
  outline: none;
}

.basketButton {
  margin-right: 12px;
  outline: none;
}

.burger {
  display: none; /* скрыт по умолчанию */
  font-size: 24px;
  cursor: pointer;
}

/* Адаптив под мобильный */
@media (max-width: 768px) {
  .underHeader,
  .headerRight {
    display: none; /* скрываем всё */
  }

  .burger {
    display: block; /* показываем гамбургер */
  }
}
</style>