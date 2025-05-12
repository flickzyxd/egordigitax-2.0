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
    <card
      v-for="(product, index) in displayedProducts"
      :key="index"
      :image="product?.image"
      :id="product?.id"
      :description="product?.description"
      :name="product?.name"
      :price="product?.price?.amount"
      :old-price="product?.price?.currency"
      :is-ready="cardIsReady"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Card from "@/components/Card.vue";

const products = ref([]);
const cardIsReady = ref(false);

const placeholderCount = 24;

const displayedProducts = computed(() => {
  return cardIsReady.value
    ? products.value
    : Array.from({ length: placeholderCount });
});

async function fetchProductsMock() {
  const response = await fetch("http://45.9.74.215:3003/api/items");
  return await response.json();
}

onMounted(async () => {
  products.value = await fetchProductsMock();
  cardIsReady.value = true;
});
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

@media (max-width: 768px) {
  .product-list {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .last-drop {
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .last-drop__collection-name {
    font-size: 120%;
  }

  .last-drop__more-button {
    justify-content: flex-start;
  }
}
</style>