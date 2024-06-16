<script setup lang="ts">
import type {Product} from '@/utils/data';
defineProps<{products: Product[]}>();

//Todo Add animations
</script>

<template>
  <div class="flex gap-1 flex-wrap mb-10">
    <figure v-for="product in products" class="w-[49%] sm:w-[33%] mb-4">
      <img :src="product.image" alt="" class="mb-2" />
      <figcaption class="text-main/900">
        <h4>{{ product.name }}</h4>
        <div class="flex gap-2 font-thin">
          <p>${{ product.price.toString() }}</p>
          <p class="text-blue/base">
            {{ product.quantity.toString() }} colors available
          </p>
        </div>
      </figcaption>
    </figure>
  </div>
</template>
