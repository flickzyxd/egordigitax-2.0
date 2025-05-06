<template>
  <div class="product-card">
    <router-link :to='`/product/${id}`'>
    <img :src="image" :alt="image" />
    </router-link>
    <h3 class="product-card__name">{{ name }}</h3>
    <p class="product-card__description">{{ description }}</p>
    <span class="product-card__old-price">{{ oldPrice }}</span>
    <span class="product-card__discount">{{ discount }}%</span>
    <span class="product-card__price">{{ price }} Р</span>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
defineProps(['id', 'image', 'name', 'description', 'oldPrice', 'discount', 'price'])


</script>

<style scoped>

.product-card {
  margin-bottom: 8px;
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

.product-card__name {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 380;
  font-style: normal;
  margin-top: 12px;
}

.product-card__description {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 350;
  font-style: normal;
}

.product-card__old-price {
  text-decoration: line-through;
  color: #636363;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 350;
  font-style: normal;
  margin-right: 5px;
}

.product-card__discount {
  color: #636363;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 350;
  font-style: normal;
  margin-right: 5px;
}

.product-card__price {
  color: #C12020;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 350;
  font-style: normal;
  margin-right: 5px;
}
</style>