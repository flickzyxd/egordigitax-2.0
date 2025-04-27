<script setup>

</script>

<template>
  <div>
    <header class="header">
      <div class="info">
        <a class="anyIssue" href="https://t.me/sometimesblanked" style="text-decoration: none;" target="_blank">If you
          had
          any issue</a>
        <div class="infoRight">
          <div class="Language">Language</div>
          <a class="vk" href="https://vk.com/egordigitax" target="_blank">
            <img alt="Кнопка" src="./images/2986208_logo_media_social_vk_icon.png">
          </a>
          <a class="tg" href="https://t.me/edigitax" target="_blank">
            <img alt="Кнопка" src="./images/3380451_telegram_communication_social%20media_message_icon.png">
          </a>
          <a class="inst" href="https://www.instagram.com/egordigitax?igsh=cm84OXpxeXZxZXg5" target="_blank">
            <img alt="Кнопка" src="./images/5279112_camera_instagram_social%20media_instagram%20logo_icon.png">
          </a>
          <a class="yt" href="https://www.youtube.com/@egordigitax" target="_blank">
            <img alt="Кнопка" src="./images/5305164_play_video_youtube_youtube%20logo_icon.png">
          </a>
        </div>
      </div>
      <div class="underHeader">
        <div class="egordigitax">egordigitax</div>

        <div class="navigator">
          <div class="clothingButton"></div>
          <div class="bagsButton"></div>
          <div class="accessoriesButton"></div>
          <div class="jewelleryButton"></div>
          <div class="legitButton"></div>
        </div>

        <div class="headerRight">
          <div class="searchButton"></div>
          <button class="featuresButton"></button>
          <button class="accountButton"></button>
          <button class="basketButton"></button>
        </div>
      </div>
    </header>

    <main>
      <slot/>
    </main>

    <footer class="footer">
      <div class="footerLeft">
        <div class="vk"></div>
        <div class="tg"></div>
        <div class="inst"></div>
        <div class="yt"></div>
      </div>
      <div class="footerDirect"></div>
    </footer>
  </div>
</template>

<style scoped>
.anyIssue {
  color: dimgrey;
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

.egordigitax {
  color: dodgerblue;
  font-family: "Cascadia Code", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 150%;
}
</style>
