<script setup lang="ts">
import Header from '@/components/Header.vue';
import LogoBlack from '@/components/svg/LogoBlack.vue';
import {useRoute} from 'vue-router';

const route = useRoute();

const excludedLinks = ['/login'];
</script>

<template>
  <Header v-show="!excludedLinks.includes(route.fullPath)" />
  <main>
    <RouterView />
  </main>
  <footer
    class="bg-soft/200 py-10 sm:py-14 flex flex-col items-center text-sub/500"
    v-show="!excludedLinks.includes(route.fullPath)"
  >
    <LogoBlack class="mb-4" />
    <nav class="flex gap-3 sm:gap-5 mb-3 sm:mb-6">
      <a href="#">Website</a>
      <a href="#">Instagram</a>
      <a href="#">Twitter</a>
      <a href="#">Dribble</a>
    </nav>
    <p class="text-center">
      &copy; {{ new Date().getFullYear() }} Powered by Ryvision. All Rights
      Reserved.
    </p>
  </footer>
</template>
