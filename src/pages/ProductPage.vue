<template>
  <div class="product-main">
    <div class="product-image">
      <div v-if="!cardIsReady" class="skeleton skeleton-image" />
      <img v-else :src="product.image" alt="product-img" />
    </div>

    <div class="product-info">
      <div class="product-info__text">
        <div v-if="!cardIsReady" class="skeleton skeleton-text" />
        <template v-else>
          {{ product.name }}
          <div class="product-info__description">
            {{ product.description }}
          </div>
        </template>
      </div>

      <router-link class="product-info__router-link" to="/">
        <button class="product-info__button">< Back</button>
      </router-link>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const product = ref({});
const cardIsReady = ref(false);

async function fetchProductById() {
  const response = await fetch(`http://45.9.74.215:3003/api/item/${route.params.id}`);
  return await response.json();
}

onMounted(async () => {
  product.value = await fetchProductById();
  cardIsReady.value = true;
});
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


.skeleton-image {
  width: 400px;
  height: 400px;
  border-radius: 8px;
  background-color: #e0e0e0;
  animation: pulse 1.5s infinite ease-in-out;
}


.skeleton-text {
  width: 300px;
  height: 28px;
  margin-bottom: 12px;
  border-radius: 4px;
  background-color: #e0e0e0;
  animation: pulse 1.5s infinite ease-in-out;
}

.skeleton-description {
  width: 500px;
  height: 60px;
  border-radius: 4px;
  background-color: #e0e0e0;
  animation: pulse 1.5s infinite ease-in-out;
}


</style>

