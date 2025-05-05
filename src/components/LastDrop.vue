<template>
  <div class="lastDrop">
    <div class="lastDropLeft">
      <div class="lastDropTextTop">Winter 2025 out now</div>
      <div class="lastDropTextMiddle">First look at new bag&clothes collection First look at new bag&clothes collection
        First look at new bag&clothes collection First look at new.
      </div>
      <router-link class="lastDropTextButton" style="text-decoration: none; display: inline-block;" to="/details">
        Details
      </router-link>
    </div>
    <div class="lastDropImg">
      <img src="../images/stars.jpg" alt="altuha">
    </div>
  </div>
</template>
<script>
export default {
  name: 'lastDrop'
}
</script>
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

.lastDrop {
  display: flex;
  justify-content: space-between;
  background-color: lightgray;
  margin-bottom: 24px;
  border-radius: 12px;
}

.lastDropLeft {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
  width: 50%;
  height: 100%;
  margin: auto;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}

.lastDropTextTop {
  font-size: 36px;
  align-items: center;
  margin-bottom: 24px;
  color: dimgrey;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 450;
  font-style: normal;
}

.lastDropTextMiddle {
  display: flex;
  font-size: 16px;
  line-height: 1.5;
  align-items: center;
  margin-bottom: 24px;
  justify-content: center;
  color: dimgrey;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 465;
  font-style: normal;
  max-width: 460px;
  width: 100%;
}

.lastDropTextButton {
  padding: 10px 64px;
  background-color: lightgray;
  border: 1px solid #000;
  color: dimgrey;
  cursor: pointer;
  font-size: 14px;
  border-radius: 16px;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 450;
  font-style: normal;
}

.lastDropImg {
  max-width: 744px;
  width: 100%;
}

.lastDropImg img {
  width: 100%;
  height: 100%;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
</style>