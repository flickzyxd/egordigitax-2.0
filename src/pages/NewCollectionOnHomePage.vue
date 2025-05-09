<template>
  <div class="details-main">Concept items designed by me. Some of them is physical, some is not.</div>
  <div class="details-list">
    <card v-for="product in displayProducts" :image="product.image" :id="product.id" :description="product.description"
          :discount="product.discount" :name="product.name" :old-price="product.currency" :price="product.amount"/>
  </div>
</template>

<script setup>

import {computed, onMounted, ref} from "vue";
import cardStar from '@/images/cardStar.jpg';
import Card from '@/components/Card.vue'

const products = ref([])

const displayProducts = computed(() => {
  return products.value.map(el => {
    return {
      ...el,
    }
  })
})

async function fetchProductsMock() {
  const response = await fetch('http://45.9.74.215:3003/api/items', {method: 'GET'})
  return await response.json()
}


onMounted(async () => {
  products.value = await fetchProductsMock()
})
</script>

<style scoped>
.details-main {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 450;
  font-style: normal;
  font-size: 16px;
  color: dimgrey;
  margin-top: 48px;
}

.details-main {
  margin-bottom: 21px;
}

.details-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 21px;
  margin-bottom: 40px;
}
</style>