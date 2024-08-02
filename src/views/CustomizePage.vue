<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import EclipseIcon from '@/components/svg/EclipseIcon.vue';
import {RouterLink} from 'vue-router';
import sweatshirt from '@/assets/images/sweatshirt.png';
import AlipayIcon from '@/components/svg/AlipayIcon.vue';
import OreosIcon from '@/components/svg/OreosIcon.vue';
import HandCoinIcon from '@/components/svg/HandCoinIcon.vue';
import AnchorIcon from '@/components/svg/AsteriskIcon.vue';
import SunIcon from '@/components/svg/SunIcon.vue';
import {House, CircleDot, Paintbrush, ChevronRight} from 'lucide-vue-next';
import {Plus, Minus, ShoppingCart, Info} from 'lucide-vue-next';

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
      <ul class="flex items-center gap-1 text-xs">
        <li class="flex gap-1 items-center">
          <House :size="15" color="#525866" />
          <RouterLink to="/" class="text-sub/500">Home</RouterLink>
        </li>
        <ChevronRight :size="15" color="#CDD0D5" />
        <li class="flex gap-1 items-center">
          <CircleDot :size="15" color="#525866" />
          <RouterLink to="/products" class="text-sub/500">
            Merch Selection
          </RouterLink>
        </li>
        <ChevronRight :size="15" color="#CDD0D5" />
        <li class="flex gap-1 items-center">
          <Paintbrush :size="15" color="#525866" />
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
        <!-- Description  -->
        <article>
          <h1 class="text-xl text-main/900">
            Rhapsody Sweat Shirt - <span class="text-sub/500">$10</span>
          </h1>
          <div class="text-sub/500">
            <p>
              Classic sweat shirt styling with updated little accents to keep
              things looking current!
            </p>
            <p>Not too flashy but still strong enough to make a statement</p>
            <ul class="list-disc px-4 py-1 marker:text-sub/500 mb-3">
              <li>Fleece with a soft brushed interior</li>
              <li>Embroidered Logo on Sleeve</li>
              <li>Side Seam Pocket with Contrasted Color</li>
              <li>Marques is wearing a Medium</li>
            </ul>
          </div>
        </article>

        <!-- sizes  -->
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

        <!-- color  -->
        <p class="text-main/900 text-lg mb-1">Choose a color</p>
        <div class="flex flex-wrap gap-2 mb-8">
          <button v-for="color in colors" class="p-2 border border-sub/300">
            <EclipseIcon :fill="color" />
          </button>
          <button class="p-2 border-2 border-main/900">
            <EclipseIcon :fill="colors[1]" />
          </button>
        </div>

        <!-- front-side graphics  -->
        <p class="text-main/900 text-lg mb-1">Front side graphics</p>
        <div class="flex flex-wrap gap-2 mb-8">
          <button class="p-2 border border-sub/300" v-for="icon in icons">
            <component :is="icon" class="w-8 h-8"></component>
          </button>
        </div>

        <!-- Quantity and Add to cart button  -->
        <div class="flex flex-wrap gap-3 mb-3">
          <div
            class="flex gap-5 justify-around py-1 border border-soft/200 w-full sm:w-1/3"
          >
            <button><Minus :size="20" color="#525866" /></button>
            <span class="text-main/900 text-lg">1</span>
            <button><Plus :size="20" color="#525866" /></button>
          </div>
          <div class="w-full sm:w-max">
            <Button bg-color="bg-surface/700" full-width>
              <ShoppingCart color="#fff" :size="15" class="ml-3" />
              <span class="text-white mr-3">Add to cart</span>
            </Button>
          </div>
        </div>
        <div
          class="border border-soft/200 flex items-center justify-between mb-3 p-2"
        >
          <p class="text-main/900">More details</p>
          <button><Plus :size="20" color="#525866" /></button>
        </div>
      </div>
    </section>
    <aside>
      <p>More details</p>
    </aside>
    <aside>
      <div class="border border-soft/200 mb-3 p-1">
        <Info :size="20" color="#375DFB" class="inline" />
        <span class="text-sub/500">
          Customized knitted products will be delivered within three weeks of
          order date, and will be shipped separately from any additional items
          in your order.
        </span>
      </div>
    </aside>
  </div>
</template>
