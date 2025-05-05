<template>
  <div class="product-main">
    <div class="product-image">
      <img src="https://placehold.co/600x400" alt="product-img">
    </div>
    <div class="product-info">
      <div class="product-info__text">
        {{ products.name }}
      </div>
      <div class="product-info__description">
        {{ products.description }}
      </div>
    </div>
    <router-link to="/">
      <button class="product-info__button">< Back</button>
    </router-link>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import ProductPage from "@/pages/ProductPage.vue";
import {useRoute} from 'vue-router'

const route = useRoute()

const products = ref([])

const displayProducts = computed(() => {
  return products.value
})

async function fetchProductsMock() {
  const response = await fetch('http://45.133.246.204/catalogue/1', {method: 'GET'})
  return await response.json()
}

onMounted(async () => {
  products.value = await fetchProductsMock()
})
</script>

<style scoped>
.product-main {
  display: flex;
  flex-direction: row;
  margin-top: 36px;
  margin-bottom: 44px;
}

.product-info {
  margin-left: 46px;
}

.product-info__button {
  display: flex;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 22px;
  border: none;
  background: none;
  text-decoration: none;
  color: dodgerblue;
}

.product-info__text {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 550;
  font-style: normal;
  font-size: 24px;
  color: dimgrey;
  margin-bottom: 7px;
}

.product-info__description {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 450;
  font-style: normal;
  font-size: 18px;
  color: dimgrey;
}
</style>