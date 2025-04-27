<template>
  <div class="header">
    <div class="header__info">
      <a class="header__help" href="https://t.me/sometimesblanked" target="_blank">
        If you had any issue
      </a>
      <div class="header__links">
        <div class="header__language">Language</div>
        <a href="https://vk.com/egordigitax" target="_blank">
          <img :src="vkIcon" alt="Кнопка">
        </a>
        <a href="https://t.me/edigitax" target="_blank">
          <img alt="Кнопка" :src="tgIcon">
        </a>
        <a href="https://www.instagram.com/egordigitax?igsh=cm84OXpxeXZxZXg5" target="_blank">
          <img alt="Кнопка" :src="instagramIcon">
        </a>
        <a href="https://www.youtube.com/@egordigitax" target="_blank">
          <img alt="Кнопка" :src="youtubeIcon">
        </a>
      </div>
    </div>
    <div class="header__nav">
      <a class="header__logo">
        <img alt="egordigitax-text-logo" :src="logo">
      </a>
      <div class="header__linkbar">
        <button class="header__link">Clothing</button>
        <button class="header__link">Bags</button>
        <button class="header__link">Accessories</button>
        <button class="header__link">Jewellery</button>
        <button class="header__link">Legit</button>
      </div>

      <div class="header__actions">
        <div class="header__search"></div>
        <button class="header__action"></button>
        <button class="header__action"></button>
        <button class="header__action"></button>
      </div>
    </div>
  </div>
</template>
<script setup>
import vkIcon from '@/images/2986208_logo_media_social_vk_icon.png'
import tgIcon from '@/images/3380451_telegram_communication_social media_message_icon.png'
import instagramIcon from '@/images/5279112_camera_instagram_social media_instagram logo_icon.png'
import youtubeIcon from '@/images/5305164_play_video_youtube_youtube logo_icon.png'
import logo from '@/images/egordigitax.jpg'
</script>
<style>
.header {
}

.header .header__info {
  display: flex;
  justify-content: space-between;
  color: dimgrey;
  margin-bottom: 10px;
}

.header .header__help {
  color: #E1E1E1;
  font-size: 18px;
  text-decoration: none;
}

.header .header__links {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.header .header__language {
  display: flex;
  justify-content: center;
  font-size: 130%;
}

.header .header__nav {
  display: flex;
  flex-direction: row;
}

.header .header__linkbar {
  display: flex;
  gap: 8px;
}

.header .header__link {
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

.header .header__logo > img {
  height: 27px;
  margin-right: 71px;
}

.header .header__actions {
  margin-left: auto;
}
.header .header__action {}
.header .header__search {}
</style>
