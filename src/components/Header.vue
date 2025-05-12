<template>
  <div class="header">
    <div class="info">
      <a class="any-issue" href="https://t.me/AIsxght" target="_blank" style="text-decoration: none;">If you had any issue</a>
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

    <div class="mobile-header">
      <router-link to="/" class="mobile-logo">
        <img src="../images/egordigitax_photo-resizer.ru.jpg" alt="altuha">
      </router-link>
      <div class="burger" @click="toggleMenu">&#9776;</div>
    </div>

    <div class="mobile-menu" :class="{ 'active': isMenuOpen }">
      <div class="mobile-nav-container">
        <div class="mobile-navigator">
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
        <div class="mobile-search">
          <input type="text" class="searchButton" placeholder="Search...">
        </div>
        <div class="mobile-icons">
          <a href="https://t.me/edigitax" target="_blank" class="featuresButton">
            <img src="../images/features.jpg" alt="Features">
          </a>
          <a href="https://t.me/edigitax" target="_blank" class="accountButton">
            <img src="../images/account.jpg" alt="Account">
          </a>
          <a href="https://t.me/edigitax" target="_blank" class="basketButton">
            <img src="../images/busket.jpg" alt="Basket">
          </a>
        </div>
        <div class="mobile-language">
          <span>Language</span>
        </div>
      </div>
    </div>

    <div class="desktop-header">
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
            <div style="margin-right: 12px;"></div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style>
html {
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

.header {
  position: relative;
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

.desktop-header {
  display: block;
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
  padding: 8px 12px;
  margin: 0;
  font: inherit;
  color: dimgrey;
  cursor: pointer;
  outline: none;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 475;
  font-style: normal;
  text-align: left;
  width: 100%;
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
  border: 1px solid #e0e0e0;
  background-color: #f0f0f0;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 12px;
}

.featuresButton,
.accountButton,
.basketButton {
  margin-right: 12px;
  outline: none;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  right: 20px;
  width: 280px;
  background: white;
  z-index: 1000;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  padding: 15px;
  max-height: calc(100vh - 90px);
  overflow-y: auto;
}

.mobile-menu.active {
  display: block;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-nav-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mobile-navigator {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mobile-search {
  padding: 10px 0;
}

.mobile-search .searchButton {
  width: 100%;
  margin: 0;
}

.mobile-icons {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}

.mobile-language {
  text-align: center;
  padding: 10px 0;
  color: #666;
  font-size: 14px;
}

.mobile-header {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  z-index: 1001;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  align-items: center;
  justify-content: space-between;
}

.mobile-logo {
  height: 30px;
}

.burger {
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
}

@media (max-width: 768px) {
  .desktop-header {
    display: none;
  }

  .infoRight {
    display: none;
  }

  .mobile-header {
    display: flex;
  }

  .any-issue {
    display: none !important;
  }
}
</style>