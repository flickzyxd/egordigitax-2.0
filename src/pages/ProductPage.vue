<template>
  <div class="product-main">
    <div class="product-image">
      <img src="https://placehold.co/600x400" alt="product-img" />
    </div>

    <div class="product-info">
      <div class="product-info__text">
        {{ products.name }}
        <div class="product-info__description">
          {{ products.description }}
        </div>
      </div>

      <router-link class="product-info__router-link" to="/">
        <button class="product-info__button">< Back</button>
      </router-link>
    </div>
  </div>
</template>


<script setup>
import {computed, onMounted, ref} from "vue";
import {useRoute} from 'vue-router'

const route = useRoute()

const products = ref([])

const displayProducts = computed(() => {
  return products.value
})

async function fetchProductsMock() {
  const response = await fetch(`http://94.232.248.56/api/catalogue/${route.params.id}`, {method: 'GET'})
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
  gap: 2rem;
}

.product-info {
  margin-left: 46px;
}

.product-info__button {
  display: flex;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 22px;
  border: none;
  background: none;
  text-decoration: none;
  color: dodgerblue;
  flex-direction: column;
  justify-content: space-between;
  max-height: 100%;
  cursor: pointer;
  padding: 0;
}

.product-info__text {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 550;
  font-style: normal;
  font-size: 24px;
  color: dimgrey;
  margin-bottom: 16px;
  height: calc(100% - 42px);
}

.product-info__description {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 450;
  font-style: normal;
  font-size: 18px;
  color: dimgrey;
}

.product-info__router-link {
  display: flex;
  max-height: 450px;
  justify-content: flex-end;
}
</style>