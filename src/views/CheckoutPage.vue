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
import PenIcon from '@/components/svg/PenIcon.vue';
import MapIcon from '@/components/svg/MapIcon.vue';
import PhoneIcon from '@/components/svg/PhoneIcon.vue';
import EmailIcon from '@/components/svg/EmailIcon.vue';

const discount = ref('');

const paymentMethod = ref('card');
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
          :class="`${
            discount == 'discount' && 'radio-checked'
          } radio flex items-start justify-between gap-1 border border-soft/200 mb-3 p-3 text-sm`"
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

        <form @submit.prevent="">
          <h1 class="mb-3 text-lg">Enter Card Information</h1>
          <Input label="Card holder's name" />
          <Input label="Card number" :icon="CardIcon"/>
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

        <p class="flex justify-between mb-2" v-show="discount == 'discount'">
          <span>Discount</span>
          <span class="text-state/error">- $19.00</span>
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
        <section class="border border-sub/300 p-3 sm:p-4 mb-3">
          <header class="flex items-center gap-3 mb-4 sm:mb-6">
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
        <form class="border border-sub/300 p-3 sm:p-4 mb-4" @submit.prevent="">
          <h1 class="text-[#101928] text-xl font-semibold mb-4">
            Delivery Information
          </h1>
          <div class="flex gap-2 flex-wrap justify-between">
            <Input label="First name" add-classes="w-full sm:w-[48%]" />
            <Input label="Last name" add-classes="w-full sm:w-[48%]" />
            <Input label="Address" add-classes="w-full" />
            <Input label="City/Town" add-classes="w-full sm:w-[48%]" />
            <Input label="Zip code" add-classes="w-full sm:w-[48%]" />
            <Input label="Mobile number" add-classes="w-full sm:w-[48%]" />
            <Input label="Email address" add-classes="w-full sm:w-[48%]" />
          </div>
          <Button full-width bg-color="bg-black">
            <span class="text-white">Save</span>
          </Button>
        </form>
        <section class="p-4 bg-weak/100 -mx-4 sm:mx-0 mb-3">
          <header class="mb-3 flex items-center justify-between">
            <h1 class="text-[#101928] text-xl font-semibold">
              Delivery Information
            </h1>
            <button class="flex items-center gap-1">
              <PenIcon />
              <span class="text-sub/500">Edit</span>
            </button>
          </header>
          <div>
            <h1 class="mb-3 text-lg font-medium">Alexandra McPherson</h1>
            <address class="flex mb-1 items-center gap-2">
              <MapIcon />
              <span class="text-sub/500 not-italic text-sm sm:text-base">
                20386 Donovans Rd, Georgetown, Delaware(DE)
              </span>
            </address>
            <p class="flex mb-1 items-center gap-2">
              <PhoneIcon />
              <span class="text-sub/500 text-sm sm:text-base">
                +1 23455246337
              </span>
            </p>
            <p class="flex mb-1 items-center gap-2">
              <EmailIcon />
              <span class="text-sub/500 text-sm sm:text-base">
                alexandramcpherson@email.com
              </span>
            </p>
          </div>
        </section>
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

div.radio {
  background-image: #fff;
  transition: background-image 1s ease-in;
  transform-origin: 0%;
}

div.radio-checked {
  background-image: radial-gradient(
    86.07% 185.2% at 8.64% 0%,
    #ebfaff 0%,
    #ffffff 77.53%
  );
  transition: background-image 1s ease-in;
  transform-origin: 0%;
}
</style>
