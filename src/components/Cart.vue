<script setup lang="ts">
import sweatshirt from '@/assets/images/sweatshirt.png';
import Button from '@/components/ui/Button.vue';
import {useRouter} from 'vue-router';
import {Plus, Minus, X, Trash2} from 'lucide-vue-next';

defineEmits(['close-modal']);

const router = useRouter();

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
    class="fixed right-0 top-0 w-full md:w-3/5 lg:w-1/2 h-screen bg-white z-40 p-4 sm:p-6 border border-l-main/900 text-main/900"
  >
    <header class="flex items-center gap-3 mb-10">
      <h1 class="text-[#101928] text-xl font-semibold">My Cart</h1>
      <p class="bg-blue/base px-2 py-1 rounded-3xl text-sm text-white">3</p>
      <button class="ml-auto" @click="$emit('close-modal')">
        <X color="#525866" />
      </button>
    </header>

    <section class="mb-10">
      <div class="flex gap-2 items-center">
        <img
          :src="sweatshirt"
          alt="product-image"
          class="border border-main/900 w-[27%] min-w-[120px]"
        />
        <div class="flex-grow text-sm sm:text-base">
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
              <button><Minus :size="20" color="#525866" /></button>
              <span class="text-main/900">1</span>
              <button><Plus :size="20" color="#525866" /></button>
            </div>
            <button><Trash2 color="#0A0D14" /></button>
          </div>
        </div>
      </div>
    </section>
    <div class="flex items-center justify-between mb-3">
      <p>Subtotal:</p>
      <p class="w-max">
        <span class="text-sub/500">$</span>
        <span>15.</span>
        <span class="text-sub/500">00</span>
      </p>
    </div>

    <hr class="color-[#F0F2F5] h-2 mb-3" />

    <Button
      full-width
      bg-color="bg-surface/700"
      @click="
        () => {
          $emit('close-modal');
          router.push('/checkout');
        }
      "
    >
      <span class="text-white">Check out</span>
    </Button>
  </div>
</template>

<style>
@media screen and (min-width: 769px) {
  .cart-enter-active,
  .cart-leave-active {
    transition: right 0.5s ease;
  }
  .cart-enter-from,
  .cart-leave-to {
    right: -100%;
  }
}

@media screen and (max-width: 768px) {
  .cart-enter-active,
  .cart-leave-active {
    transition: top 0.5s ease;
  }
  .cart-enter-from,
  .cart-leave-to {
    top: -100%;
  }
}
</style>
