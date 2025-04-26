<template>
  <div>
    <div v-for="product in products" :key="product.id" class="product-card">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>{{ product.price }} Р</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const products = ref([])

async function fetchProductsMock() {
  return [
    { id: 1, name: 'Товар 1', description: 'Описание', price: 14990 },
    { id: 2, name: 'Товар 2', description: 'Описание', price: 14990 },
    { id: 3, name: 'Товар 3', description: 'Описание', price: 14990 },
  ]
}

onMounted(async () => {
  products.value = await fetchProductsMock()
})
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 8px;
}
</style>