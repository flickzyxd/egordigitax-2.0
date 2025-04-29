<template>
  <div class="footer">
    <div class="footerLeft">
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
    <a class="anyIssue" href="https://t.me/sometimesblanked" target="_blank" style="text-decoration: none;">Direct
      message</a>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
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

.footer {
  display: flex;
  justify-content: space-between;
  color: dimgrey;
}

.footerLeft {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>