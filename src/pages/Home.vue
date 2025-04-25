<script setup>
import ProductCard from "@/components/ProductCard.vue";

const cards = [
  {
    id:1,
    img: 'https://placehold.co/380x400',
    name: 'Treasure Bag',
    description: 'The true natural leather',
    price: '599$  -40%  $199',
  },
  {
    id:2,
    img: 'https://placehold.co/380x400',
    name: 'Treasure Bag',
    description: 'The true natural leather',
    price: '599$  -40%  $199',
  },
  {
    id:3,
    img: 'https://placehold.co/380x400',
    name: 'Treasure Bag',
    description: 'The true natural leather',
    price: '599$  -40%  $199',
  },
  {
    id:4,
    img: 'https://placehold.co/380x400',
    name: 'Treasure Bag',
    description: 'The true natural leather',
    price: '599$  -40%  $199',
  },
  {
    id:5,
    img: 'https://placehold.co/380x400',
    name: 'Treasure Bag',
    description: 'The true natural leather',
    price: '599$  -40%  $199',
  },
]
</script>

<template>

  <div class="lastDrop">
    <div class="lastDropText">
      <div class="lastDropTextTop"></div>
      <div class="lastDropTextMiddle"></div>
      <button class="lastDropTextButton"></button>
    </div>
    <div class="lastDropImg"></div>
  </div>

  <div class="cards">
    <div class="cardsTop">
      <div class="cardsText"></div>
      <div class="cardsMore"></div>
    </div>
    <div class="card-list">
      <product-card
          v-for="item in cards"
          :key="item.id"
          :img="item.img"
          :name="item.name"
          :description="item.description"
          :price="item.price"
      />
    </div>
  </div>

  <div class="cards">
    <div class="cardsTop">
      <div class="cardsText"></div>
      <div class="cardsMore"></div>
    </div>
    <div class="cardsBottom">
      <div class="card">
        <div class="cardImg"></div>
        <div class="cardName"></div>
        <div class="cardDesc"></div>
        <div class="cardPrice"></div>
      </div>
      <div class="card">
        <div class="cardImg"></div>
        <div class="cardName"></div>
        <div class="cardDesc"></div>
        <div class="cardPrice"></div>
      </div>
      <div class="card">
        <div class="cardImg"></div>
        <div class="cardName"></div>
        <div class="cardDesc"></div>
        <div class="cardPrice"></div>
      </div>
      <div class="card">
        <div class="cardImg"></div>
        <div class="cardName"></div>
        <div class="cardDesc"></div>
        <div class="cardPrice"></div>
      </div>
    </div>
  </div>
</template>

<style>
.card-list {
  display: flex;
  gap: 1.25rem;
}
</style>
