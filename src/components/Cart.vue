<script setup lang="ts">
import CloseIcon from './svg/CloseIcon.vue';
import sweatshirt from '@/assets/images/sweatshirt.png';
import DeleteIcon from '@/components/svg/DeleteIcon.vue';
import AddIcon from '@/components/svg/AddIcon.vue';
import SubtractIcon from '@/components/svg/SubtractIcon.vue';

defineEmits(['close-modal']);
//Todo Close cart when screen is resized
type Cart = {
  productName: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
};

const cartData: Cart[] = [];
</script>

<template>
  <div
    class="fixed right-0 top-0 hidden sm:block sm:w-[70%] md:w-3/5 lg:w-1/2 h-screen bg-white z-30 p-8 border border-l-main/900 text-main/900"
  >
    <header class="flex items-center gap-3 mb-5">
      <h1 class="text-[#101928] text-xl font-semibold">My Cart</h1>
      <p class="bg-blue/base px-2 py-1 rounded-3xl font-[300]">3</p>
      <button class="ml-auto" @click="$emit('close-modal')">
        <CloseIcon />
      </button>
    </header>

    <section>
      <div class="flex gap-2 items-center">
        <img
          :src="sweatshirt"
          alt="product-image"
          class="border border-main/900 w-[27%] min-w-[100px]"
        />
        <div class="flex-grow">
          <div class="flex items-center justify-between mb-2">
            <p class="text-[#101928]">Rhapsody Sweat Shirt</p>
            <p class="w-max">
              <span class="text-sub/500">$</span>
              <span>15.</span>
              <span class="text-sub/500">00</span>
            </p>
          </div>
          <p class="text-sub/500">Color: Black</p>
          <p class="text-sub/500 mb-2">Size: M</p>
          <div class="flex justify-between">
            <div
              class="flex gap-5 items-center justify-around py-1 px-3 border border-soft/200"
            >
              <button><SubtractIcon /></button>
              <span class="text-main/900 text-lg">1</span>
              <button><AddIcon /></button>
            </div>

            <button><DeleteIcon /></button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
