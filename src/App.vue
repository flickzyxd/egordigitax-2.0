<script setup>
import {computed} from "vue";
import Default from "@/layout/default.vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();

const layout = computed(() => {
  if (route?.meta?.layout) {
    return route.meta.layout
  } else {
    return Default
  }
})
</script>

<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<style>
html {
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>

