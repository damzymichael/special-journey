<script setup lang="ts">
import {ref} from 'vue';
import CartIcon from '@/components/svg/CartIcon.vue';
import HomeIcon from '@/components/svg/HomeIcon.vue';
import DollarIcon from '@/components/svg/DollarIcon.vue';
import ArrowRightIcon from '@/components/svg/ArrowRightIcon.vue';
import LoginCircleIcon from '@/components/svg/LoginCircleIcon.vue';
import CardIcon from '@/components/svg/CardIcon.vue';
import Input from '@/components/ui/Input.vue';
import CalenderIcon from '@/components/svg/CalenderIcon.vue';
import Button from '@/components/ui/Button.vue';

const discount = ref('');

const paymentMethod = ref('card');

// watch(discount, current => {
//   console.log(current);
// });
</script>

<template>
  <div class="px-5 md:px-10 lg:px-20">
    <!-- Breadcrumbs -->
    <header class="pt-20 mb-5">
      <ul class="flex items-center gap-1 sm:gap-2 text-xs">
        <li class="flex gap-0.5 items-center">
          <HomeIcon />
          <RouterLink to="/" class="text-sub/500">Home</RouterLink>
        </li>
        <ArrowRightIcon />
        <li class="flex gap-1 items-center">
          <CartIcon />
          <RouterLink to="/products" class="text-sub/500">Cart</RouterLink>
        </li>
        <ArrowRightIcon />
        <li class="flex gap-1 items-center">
          <DollarIcon />
          <RouterLink to="#" class="text-sub/500">Checkout</RouterLink>
        </li>
      </ul>
    </header>
    <main class="text-main/900 mb-3 flex justify-between gap-1 flex-wrap">
      <section class="border border-sub/300 p-2 sm:p-4 w-full sm:w-[33%]">
        <h2 class="text-2xl mb-4">Payment Information</h2>
        <p class="font-[300] mb-3 text-lg">Apply Discount</p>
        <div
          class="flex items-start justify-between gap-1 border border-soft/200 mb-3 p-3 text-sm"
          @click="discount = discount == 'discount' ? '' : 'discount'"
        >
          <label for="discount">
            <p class="mb-1 text-[16px]">Discount with Rhapsody points</p>
            <p class="text-sub/500">
              Make use of your Rhapsody points as discount
            </p>
          </label>
          <input
            id="discount"
            type="radio"
            v-model="discount"
            value="discount"
            class="cursor-pointer"
          />
        </div>

        <div class="flex gap-1 items-center">
          <LoginCircleIcon />
          <p class="text-blue/base">Login to retrieve your points</p>
        </div>

        <hr class="my-6" />

        <div>
          <h1 class="text-lg mb-4">Pay with</h1>
          <label class="flex items-center gap-2 mb-2">
            <input type="radio" value="card" v-model="paymentMethod" />
            <span>Debit / Credit Card</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" value="delivery" v-model="paymentMethod" />
            <span>Payment on Delivery</span>
          </label>
        </div>

        <hr class="my-6" />

        <form action="">
          <h1 class="mb-3 text-lg">Enter Card Information</h1>
          <Input label="Card holder's name" />
          <Input label="Card number" :icon="CardIcon" />
          <div class="flex gap-1">
            <Input label="Expiry date" :icon="CalenderIcon" />
            <Input label="CVV" :icon="CalenderIcon" />
          </div>
        </form>

        <hr class="my-6" />

        <p class="flex justify-between mb-2">
          <span>Sub Total</span>
          <span>$45.00</span>
        </p>

        <p class="flex justify-between mb-2">
          <span>Tax(10%)</span>
          <span>$45.00</span>
        </p>

        <p class="flex justify-between mb-2">
          <span>Shipping</span>
          <span>$0.00</span>
        </p>

        <hr class="my-6" />

        <p class="flex justify-between mb-2">
          <span>Total</span>
          <span class="font-semibold">$54.00</span>
        </p>

        <Button bg-color="bg-main/900" full-width>
          <span class="text-white">Pay - $54.00</span>
        </Button>
      </section>
      <div class="w-full sm:w-[66%] order-first sm:order-last">
        <section class="border border-sub/300 p-2 sm:p-4 mb-3">
          <header class="flex items-center gap-3 mb-8">
            <h1 class="text-[#101928] text-xl font-semibold">Order Summary</h1>
            <p class="bg-blue/base px-2 py-1 rounded-3xl text-sm text-white">
              3
            </p>
          </header>
          <main>
            <figure class="flex items-center gap-3 mb-4">
              <img
                src="@/assets/images/sweatshirt.png"
                alt="product image"
                class="border border-main/900 w-[20%] min-w-[120px]"
              />
              <figcaption
                class="flex flex-col sm:flex-row items-center justify-between flex-grow"
              >
                <div class="self-start">
                  <h4 class="text-lg sm:text-xl font-medium mb-1">
                    Rhapsody Sweat Shirt
                  </h4>
                  <p class="font-light text-sm sm:text-base">Color: Black</p>
                  <p class="font-light text-sm sm:text-base">Size: M</p>
                </div>
                <p class="font-medium text-lg sm:text-xl self-start">$15.00</p>
              </figcaption>
            </figure>
            <hr class="color-[#F0F2F5] h-2 mb-3" />
          </main>
        </section>
        <form class="border border-sub/300 p-2 sm:p-4">
          <h1 class="text-[#101928] text-xl font-semibold mb-4">
            Delivery Information
          </h1>
          <div></div>
        </form>
      </div>
    </main>
  </div>
</template>

<style scoped>
input[type='radio'] {
  border: 0px;
  aspect-ratio: 1/1;
  height: 1em;
}
</style>
