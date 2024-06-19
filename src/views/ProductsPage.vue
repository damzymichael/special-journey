<script setup lang="ts">
import t_shirt from '@/assets/t-shirt.png';
import roundneck from '@/assets/roundneck.png';
import sweatshirt from '@/assets/sweatshirt.png';
import type {Product} from '@/utils/data';
import Products from '@/components/Products.vue';

const categories: Product[] = [
  {name: 'Polo t-shirt', image: t_shirt},
  {name: 'Round necks', image: roundneck},
  {name: 'Sweat shirt', image: sweatshirt}
];
</script>

<template>
  <div class="px-5">
    <header class="py-16 sm:py-20">
      <h1 class="text-sub/500 text-center text-xl">Customize your merch</h1>
      <h2 class="text-center font-bold text-2xl sm:text-3xl text-main/900">
        Select the merch you want to <br />
        customize
      </h2>
    </header>
    <Products :products="categories" />
  </div>
</template>
