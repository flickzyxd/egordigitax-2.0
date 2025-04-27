<script setup>
defineProps({
  img: String,
  name: String,
  description: String,
  price: String,
})
</script>

<template>
  <div>
    <div class="card__img">
      <img :src="img" alt="">
    </div>
    <div class="card__name">{{ name }}</div>
    <div class="card__description">{{ description }}</div>
    <div class="card__price">{{ price }}</div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
}

.card .card__img {
  width: 100%;
  height: 100%;

}

.card .card__name {

}

.card .card__description {

}

.card .card__price {

}
</style>
