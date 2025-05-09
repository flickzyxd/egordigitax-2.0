<template>
  <div class="product-main">
    <div v-if="products && products.image" class="product-image">
      <img :src="products.image" alt="product-img"/>
    </div>
    <div v-else class="skeleton skeleton-image"></div>

    <div class="product-info">
      <div v-if="products && products.name" class="product-info__text">
        {{ products.name }}
        <div class="product-info__description">
          {{ products.description }}
        </div>
      </div>
      <div v-else class="skeleton skeleton-text"></div>

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
  const response = await fetch(`http://45.9.74.215:3003/api/item/${route.params.id}`, {method: 'GET'})
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

.skeleton {
   background-color: #e0e0e0;
   border-radius: 4px;
   animation: pulse 1.5s infinite ease-in-out;
 }

.skeleton-image {
  width: 300px;
  height: 300px;
}

.skeleton-text {
  width: 60%;
  height: 80px;
  margin-bottom: 16px;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

</style>