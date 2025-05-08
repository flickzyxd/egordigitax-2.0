<template>
  <div class="last-drop">
    <div class="last-drop__collection-name">
      New: Summer 2033 Hand Sewed Drop
    </div>
    <router-link to="/details">
    <button class="last-drop__more-button">More ></button>
    </router-link>
  </div>
  <div class="product-list">
    <card v-for="product in displayProducts" :image="product.image" :id="product.id" :description="product.description"
          :discount="product.discount" :name="product.name" :old-price="product.currency" :price="product.amount"/>
  </div>
</template>
<script setup>
import {computed, onMounted, ref} from "vue";
import Card from '@/components/Card.vue'

const products = ref([])

const displayProducts = computed(() => {
  return products.value.map(el => {
    return {
      ...el,
      image: 'https://placehold.co/600x400',
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
.last-drop {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 55px;
}

.last-drop__collection-name {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 450;
  font-style: normal;
  font-size: 140%;
}

.last-drop__more-button {
  display: flex;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  border: none;
  background: none;
  color: dodgerblue;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 21px;
  margin-bottom: 40px;
}

.product-card img {
  width: 100%;
  object-fit: cover;
}

h3 {
  margin: 0;
}

p {
  margin-top: 2px;
}

</style>