<script setup lang="ts">
import {onMounted} from 'vue';
import gsap from '@/utils/gsap.config';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import type {Product} from '@/utils/data';

defineProps<{products: Product[]}>();

//Todo Animation not working
onMounted(() => {
  gsap.defaults({ease: 'power3'});

  gsap.set('.product', {y: 100, opacity: 0});

  ScrollTrigger.batch('.product', {
    start: 'top bottom-=100px',
    onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15}),
    onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: 100, stagger: 0.1})
  });
});
</script>

<template>
  <div class="product-container flex gap-1 justify-center flex-wrap mb-10">
    <figure v-for="product in products" class="product w-[49%] sm:w-[33%] mb-4">
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
