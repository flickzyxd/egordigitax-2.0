<template>
  <div class="product-card">
    <template v-if="isReady">
      <router-link :to="`/product/${id}`">
        <img :src="image" :alt="image" class="product-card__image" />
      </router-link>
      <h3 class="product-card__name">{{ name }}</h3>
      <p class="product-card__description">{{ description }}</p>
      <span class="product-card__discount">{{ discount }}</span>
      <span class="product-card__price">{{ price }}</span>
      <span class="product-card__old-price">{{ oldPrice }}</span>
    </template>
    <template v-else>
      <div class="skeleton skeleton-image"></div>
      <div class="skeleton skeleton-name"></div>
      <div class="skeleton skeleton-description"></div>
      <div class="skeleton skeleton-price"></div>
    </template>
  </div>
</template>

<script setup>
defineProps([
  "id",
  "isReady",
  "currency",
  "amount",
  "image",
  "name",
  "description",
  "oldPrice",
  "discount",
  "price",
]);
</script>

<style scoped>
.product-card {
  margin-bottom: 8px;
}

.product-card img {
  width: 100%;
  object-fit: cover;
}

h3,
p {
  margin: 0;
  margin-top: 4px;
}

.product-card__name,
.product-card__description,
.product-card__old-price,
.product-card__discount,
.product-card__price {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 350;
  font-style: normal;
}

.product-card__name {
  font-weight: 380;
  margin-top: 12px;
}

.product-card__image {
  width: 300px;
  height: 300px;
}

.product-card__old-price {
  color: #c12020;
}

.product-card__discount {
  color: #636363;
}

.product-card__price {
  color: #c12020;
  margin-right: 5px;
}

/* Skeleton styles */
.skeleton {
  background-color: #e0e0e0;
  border-radius: 6px;
  animation: pulse 1.5s infinite ease-in-out;
}

.skeleton-image {
  width: 300px;
  height: 300px;
}

.skeleton-name {
  width: 60%;
  height: 24px;
  margin-top: 12px;
}

.skeleton-description {
  width: 100%;
  height: 16px;
  margin-top: 8px;
}

.skeleton-price {
  width: 50%;
  height: 20px;
  margin-top: 6px;
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
