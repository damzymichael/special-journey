<script setup lang="ts">
//Use the vue and ref approach first
import {ref} from 'vue';
import {RouterLink, RouterView} from 'vue-router';
import logo from '@/assets/favicon.png';
import Button from './components/Button.vue';
import MagicLineIcon from '@/components/svg/MagicLineIcon.vue';
import UserIcon from '@/components/svg/UserIcon.vue';
import CartIcon from '@/components/svg/CartIcon.vue';
import MenuIcon from '@/components/svg/MenuIcon.vue';

const showMenu = ref(false);
</script>

<template>
  <header
    class="flex items-center gap-5 lg:gap-7 bg-opacity-0 fixed w-full py-3 px-10"
  >
    <img :src="logo" alt="Brand Logo" class="" />
    <nav class="hidden md:flex gap-3 lg:gap-4 text-sm">
      <RouterLink to="/">Store front</RouterLink>
      <RouterLink to="/about">About us</RouterLink>
      <RouterLink to="/connect">Conect with us</RouterLink>
    </nav>
    <div class="hidden md:flex gap-2button-group ml-auto">
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

    <div class="ml-auto">
      <Button>
        <MenuIcon />
      </Button>
    </div>
  </header>
  <div></div>
  <RouterView />
</template>

<style scoped>
/* css variables from main css file can be used here*/

/*Style active link */
nav a.router-link-exact-active {
}

/*Style active hover link */
nav a.router-link-exact-active:hover {
}
</style>
