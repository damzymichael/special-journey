<script setup lang="ts">
import gsap from '@/utils/gsap.config';
import {ref, watchEffect} from 'vue';
import Button from '@/components/ui/Button.vue';
import MenuIcon from '@/components/svg/MenuIcon.vue';
import CloseIcon from '@/components/svg/CloseIcon.vue';
import Logo from '@/components/svg/Logo.vue';
import LogoBlack from '@/components/svg/LogoBlack.vue';
import Cart from '@/components/Cart.vue';
import {UserRound, ShoppingCart, Paintbrush} from 'lucide-vue-next';

const showMenu = ref(false);
const showCart = ref(false);

watchEffect(() => {
  const modalOpened = showMenu.value || showCart.value;
  document.body.style.overflow = modalOpened ? 'hidden' : 'auto';
});

const openCart = () => {
  showMenu.value = false;
  showCart.value = true;
};

// const links: {text: string; link: string}[] = [];
</script>

<template>
  <div>
    <!-- Cart component  -->
    <Transition name="cart">
      <Cart v-show="showCart" @close-modal="showCart = false" />
    </Transition>

    <!-- Overlay when cart opens  -->
    <div
      @click="showCart = false"
      class="bg-[#87828259] fixed cursor-pointer top-0 w-screen h-screen z-20 opacity-75"
      v-show="showCart"
    />

    <!-- Desktop Navigation  -->
    <header
      class="fixed z-10 w-full flex items-center gap-5 lg:gap-7 py-3 px-5 sm:px-10 text-white"
    >
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <nav class="hidden md:flex gap-3 lg:gap-4 text-sm">
        <RouterLink to="/">Store front</RouterLink>
        <RouterLink to="#">About us</RouterLink>
        <RouterLink to="#">Conect with us</RouterLink>
      </nav>

      <div class="button-group hidden md:flex gap-2 ml-auto">
        <RouterLink
          to="/products"
          class="inline-flex gap-2 items-center py-2 px-3 bg-white"
        >
          <Paintbrush :size="20" color="#525866" />
          <span class="text-[#525866]">Customize my merch</span>
        </RouterLink>

        <Button>
          <UserRound color="#525866" :size="20" />
        </Button>

        <Button @click="showCart = true">
          <ShoppingCart color="#525866" :size="20" />
        </Button>
      </div>

      <div class="md:hidden ml-auto">
        <Button @click="showMenu = true">
          <MenuIcon />
        </Button>
      </div>
    </header>

    <!-- Mobile Navigation  -->
    <Transition
      @enter="gsap.from('nav ul li', {y: -50, opacity: 0, stagger: 0.06})"
      @before-leave="gsap.to('nav ul li', {y: 50, opacity: 0, stagger: -0.05})"
      @after-leave="gsap.to('nav ul li', {y: 0, opacity: 1})"
    >
      <section
        class="md:hidden fixed bg-white w-screen h-screen z-30 text-black p-5 pt-6"
        v-show="showMenu"
      >
        <header class="flex items-center justify-between mb-14">
          <LogoBlack />
          <Button :border="false" @click="showMenu = false">
            <CloseIcon :width="25" :height="25" />
          </Button>
        </header>
        <nav>
          <ul class="text-sub/500 text-lg flex flex-col gap-7">
            <li @click="showMenu = false">
              <RouterLink to="/">Store front</RouterLink>
            </li>
            <li @click="showMenu = false">
              <RouterLink to="#">About us</RouterLink>
            </li>
            <li @click="showMenu = false">
              <RouterLink to="#">Connect with us</RouterLink>
            </li>
            <li @click="showMenu = false">
              <RouterLink to="#" class="flex gap-1 items-center">
                <UserRound color="#525866" :size="20" />
                <span>Profile</span>
              </RouterLink>
            </li>
            <li @click="openCart" class="flex gap-1 items-center">
              <ShoppingCart color="#525866" :size="20" />
              <span>Cart</span>
            </li>
            <li class="mt-3" @click="showMenu = false">
              <RouterLink
                to="/products"
                class="inline-flex gap-2 items-center py-2 px-3 bg-surface/700"
              >
                <Paintbrush :size="20" color="#525866" />
                <span class="text-white">Customize my merch</span>
              </RouterLink>
            </li>
          </ul>
        </nav>
      </section>
    </Transition>
  </div>
</template>

<style scoped>
header.fixed {
  backdrop-filter: blur(16px);
  background-color: var(--surface-700);
}

li {
  color: var(--sub-500);
  font-weight: 400;
}

.v-enter-active,
.v-leave-active {
  transition: clip-path 0.5s ease;
  clip-path: circle(150% at 100% 1%);
}
.v-enter-from,
.v-leave-to {
  clip-path: circle(0% at 100% 0);
}
/*Ensure all buttons animate out before clipath closes */
.v-leave-active {
  transition-delay: 0.3s;
}

/* Style active link */
/* nav a.router-link-exact-active {
} */

/*Style active hover link */
/* nav a.router-link-exact-active:hover {
} */
</style>
