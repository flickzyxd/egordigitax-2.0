<template>
  <div class="last-drop">
    <div class="last-drop__collection-name">
      New: Summer 2033 Hand Sewed Drop
    </div>
    <button class="last-drop__more-button">More ></button>
  </div>
  <div class="product-list">
    <card v-for="product in products" :image="product.image" :description="product.description"
          :discount="product.discount" :name="product.name" :old-price="product.oldPrice" :price="product.price"/>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import cardStar from '@/images/cardStar.jpg';
import Card from '@/components/Card.vue'

const products = ref([])

function fetchProductsMock() {
  return Promise.resolve([
    {
      id: 1,
      name: 'Treasure Bag',
      description: 'The true natural leather',
      oldPrice: 14990,
      discount: 40,
      price: 10000,
      image: cardStar
    },
    {
      id: 2,
      name: 'Treasure Bag',
      description: 'The true natural leather',
      oldPrice: 14990,
      discount: 40,
      price: 10000,
      image: cardStar
    },
    {
      id: 3,
      name: 'Treasure Bag',
      description: 'The true natural leather',
      oldPrice: 14990,
      discount: 40,
      price: 10000,
      image: cardStar
    },
    {
      id: 4,
      name: 'Treasure Bag',
      description: 'The true natural leather',
      oldPrice: 14990,
      discount: 40,
      price: 10000,
      image: cardStar
    },
    {
      id: 5,
      name: 'Treasure Bag',
      description: 'The true natural leather',
      oldPrice: 14990,
      discount: 40,
      price: 10000,
      image: cardStar
    },
    {
      id: 6,
      name: 'Treasure Bag',
      description: 'The true natural leather',
      oldPrice: 14990,
      discount: 40,
      price: 10000,
      image: cardStar
    },
    {
      id: 7,
      name: 'Treasure Bag',
      description: 'The true natural leather',
      oldPrice: 14990,
      discount: 40,
      price: 10000,
      image: cardStar
    },
    {
      id: 8,
      name: 'Treasure Bag',
      description: 'The true natural leather',
      oldPrice: 14990,
      discount: 40,
      price: 10000,
      image: cardStar
    },
  ])
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