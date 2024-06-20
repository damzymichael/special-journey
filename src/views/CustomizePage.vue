<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import HomeIcon from '@/components/svg/HomeIcon.vue';
import ArrowRightIcon from '@/components/svg/ArrowRightIcon.vue';
import EclipseIcon from '@/components/svg/EclipseIcon.vue';
import AsteriskIcon from '@/components/svg/AsteriskIcon.vue';
import MagicLineIcon from '@/components/svg/MagicLineIcon.vue';
import {RouterLink} from 'vue-router';
import sweatshirt from '@/assets/images/sweatshirt.png';
import AlipayIcon from '@/components/svg/AlipayIcon.vue';
import OreosIcon from '@/components/svg/OreosIcon.vue';
import HandCoinIcon from '@/components/svg/HandCoinIcon.vue';
import AnchorIcon from '@/components/svg/AsteriskIcon.vue';
import SunIcon from '@/components/svg/SunIcon.vue';
import CartIcon from '@/components/svg/CartIcon.vue';

const sizes = ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl'];
const colors = [
  '#F6F8FA',
  '#9C23A9',
  '#693D11',
  '#20232D',
  '#176448',
  '#DF1C41',
  '#F2AE40',
  '#253EA7'
];
const icons = [AlipayIcon, OreosIcon, HandCoinIcon, AnchorIcon, SunIcon];
</script>

<template>
  <div class="px-5 sm:px-20">
    <!-- Breadcrumbs -->
    <header class="pt-20 mb-5">
      <ul class="flex items-center gap-2 text-xs">
        <li class="flex gap-0.5 items-center">
          <HomeIcon />
          <RouterLink to="#" class="text-sub/500">Home</RouterLink>
        </li>
        <ArrowRightIcon />
        <li class="flex gap-1 items-center">
          <AsteriskIcon />
          <RouterLink to="#" class="text-sub/500">Merch Selection</RouterLink>
        </li>
        <ArrowRightIcon />
        <li class="flex gap-1 items-center">
          <MagicLineIcon />
          <RouterLink to="#" class="text-sub/500">Customization</RouterLink>
        </li>
      </ul>
    </header>
    <section class="flex flex-col md:flex-row gap-3 mb-4">
      <!-- Image and variants -->
      <div class="w-full md:w-[48%]">
        <img :src="sweatshirt" alt="sweatshirt" />
      </div>

      <!-- sizes and color variants  -->
      <div class="w-full md:w-[48%]">
        <p class="text-main/900 text-lg mb-1">Your size</p>
        <div class="flex flex-wrap gap-3 mb-8">
          <span
            v-for="size in sizes"
            class="w-8 h-8 flex items-center justify-center text-xs border border-sub/300 font-thin uppercase text-sub/500 cursor-pointer"
          >
            {{ size }}
          </span>
          <span
            class="w-8 h-8 flex items-center justify-center text-xs border-2 border-main/900 font-thin uppercase text-sub/500"
          >
            XL
          </span>
        </div>
        <p class="text-main/900 text-lg mb-1">Choose a color</p>
        <div class="flex flex-wrap gap-2 mb-8">
          <button v-for="color in colors" class="p-2 border border-sub/300">
            <EclipseIcon :fill="color" />
          </button>
          <button class="p-2 border-2 border-main/900">
            <EclipseIcon :fill="colors[1]" />
          </button>
        </div>
        <p class="text-main/900 text-lg mb-1">Front side graphics</p>
        <div class="flex flex-wrap gap-2 mb-8">
          <button class="p-2 border border-sub/300" v-for="icon in icons">
            <component :is="icon" class="w-8 h-8"></component>
          </button>
        </div>
        <Button bg-color="bg-surface/700">
          <CartIcon fill="#fff" class="ml-3" />
          <span class="text-white mr-3">Add to cart</span>
        </Button>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* img {
  filter: opacity(0.5) drop-shadow(0 0 0 blue);
} */
</style>
