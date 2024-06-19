<script setup lang="ts">
import t_shirt from '@/assets/t-shirt.png';
import roundneck from '@/assets/roundneck.png';
import sweatshirt from '@/assets/sweatshirt.png';
import type {Product} from '@/utils/data';
import Products from '@/components/Products.vue';
import Descriptions from '@/components/Descriptions.vue';
import {steps, products} from '@/utils/data';
import Button from '@/components/ui/Button.vue';

const categories: Product[] = [
  {name: 'Polo t-shirt', image: t_shirt},
  {name: 'Round necks', image: roundneck},
  {name: 'Sweat shirt', image: sweatshirt}
];
</script>

<template>
  <div class="px-5 sm:px-20">
    <header class="py-6 sm:py-16 mx-auto">
      <h1 class="text-sub/500 text-center text-xl mt-10">
        Customize your merch
      </h1>
      <h2 class="text-center font-bold text-2xl sm:text-3xl text-main/900">
        Select the merch you want to <br />
        customize
      </h2>
    </header>
    <Products :products="categories" />
    <section class="bg-weak/100 -mx-5 sm:-mx-20 mb-10">
      <Descriptions :data="steps" :add-heading="true" />
    </section>
    <section>
      <h1
        class="text-black w-full mt-3 mb-10 font-bold text-lg uppercase text-center"
      >
        You can also pick and pay from our list of merch
      </h1>
      <Products :products="products.slice(0, 3)" />
      <div class="flex justify-center mb-3">
        <Button bg-color="bg-surface/700">
          <span class="text-white mx-3">See all </span>
        </Button>
      </div>
    </section>
  </div>
</template>
