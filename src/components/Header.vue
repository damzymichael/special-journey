<script setup lang="ts">
import gsap from '@/utils/gsap.config';
import {ref} from 'vue';
import Button from '@/components/ui/Button.vue';
import MagicLineIcon from '@/components/svg/MagicLineIcon.vue';
import UserIcon from '@/components/svg/UserIcon.vue';
import CartIcon from '@/components/svg/CartIcon.vue';
import MenuIcon from '@/components/svg/MenuIcon.vue';
import CloseIcon from '@/components/svg/CloseIcon.vue';

const showMenu = ref(false);

const links: {text: string; link: string}[] = [];
</script>

<template>
  <!-- Add backdrop blur when scrolled  -->
  <header
    class="fixed backdrop-blur-xl z-10 w-full flex items-center gap-5 lg:gap-7 bg-opacity-0 py-3 px-5 sm:px-10"
  >
    <img src="@/assets/favicon.png" alt="Brand Logo" class="" />

    <nav class="hidden md:flex gap-3 lg:gap-4 text-sm">
      <RouterLink to="#">Store front</RouterLink>
      <RouterLink to="#">About us</RouterLink>
      <RouterLink to="#">Conect with us</RouterLink>
    </nav>

    <div class="button-group hidden md:flex gap-2 ml-auto">
      <Button>
        <div class="flex items-center gap-1">
          <MagicLineIcon />
          <span>Customize your merch</span>
        </div>
      </Button>
      <Button>
        <UserIcon />
      </Button>
      <Button>
        <CartIcon />
      </Button>
    </div>

    <div class="md:hidden ml-auto">
      <Button @click="showMenu = true">
        <MenuIcon />
      </Button>
    </div>
  </header>

  <Transition
    @enter="gsap.from('.link', {y: -50, opacity: 0, stagger: 0.06})"
    @before-leave="gsap.to('.link', {y: 50, opacity: 0, stagger: -0.05})"
  >
    <section
      class="md:hidden fixed bg-white w-screen h-screen z-40 text-black p-4 pt-6"
      v-if="showMenu"
    >
      <header class="flex items-center justify-between mb-10">
        <img src="@/assets/logo_black.png" alt="Brand Logo" />
        <Button :border="false" @click="showMenu = false">
          <CloseIcon :width="25" :height="25" />
        </Button>
      </header>
      <main>
        <ul class="text-sub/500 flex flex-col gap-3">
          <li @click="showMenu = false" class="link">
            <RouterLink to="#">Store front</RouterLink>
          </li>
          <li @click="showMenu = false" class="link">
            <RouterLink to="#">About us</RouterLink>
          </li>
          <li @click="showMenu = false" class="link">
            <RouterLink to="#">Connect with us</RouterLink>
          </li>
          <li @click="showMenu = false" class="link">
            <RouterLink to="#" class="flex gap-1 items-center">
              <UserIcon />
              <span class="font-[300]">Profile</span>
            </RouterLink>
          </li>
          <li @click="showMenu = false" class="link">
            <RouterLink to="#" class="flex gap-1 items-center">
              <CartIcon />
              <span>Cart</span>
            </RouterLink>
          </li>

          <li class="link mt-3" @click="showMenu = false">
            <Button>
              <div
                class="bg-surface/700 flex items-center gap-2 -m-2 py-2 px-3"
              >
                <MagicLineIcon />
                <span class="text-white">Customize my merch</span>
              </div>
            </Button>
          </li>
        </ul>
      </main>
    </section>
  </Transition>
</template>

<style scoped>
li {
  color: var(--sub-500);
  font-weight: 400;
}

li:nth-child(4),
li:nth-child(5) {
  font-weight: 300;
}

.v-enter-active,
.v-leave-active {
  transition: clip-path 0.5s ease;
  clip-path: circle(150% at 100% 1%);
}

/*Ensure all buttons animate out before clipath closes */
.v-leave-active {
  transition-delay: 0.3s;
}

.v-enter-from,
.v-leave-to {
  clip-path: circle(0% at 100% 0);
}

/* Style active link */
/* nav a.router-link-exact-active {
} */

/*Style active hover link */
/* nav a.router-link-exact-active:hover {
} */
</style>
