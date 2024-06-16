<script setup lang="ts">
import Header from '@/components/Header.vue';
import LogoBlack from '@/components/svg/LogoBlack.vue';
</script>

<template>
  <Header />
  <RouterView />
  <footer
    class="bg-soft/200 py-10 sm:py-20 flex flex-col items-center text-sub/500"
  >
    <LogoBlack class="mb-4" />
    <nav class="flex gap-3 sm:gap-5 mb-5 sm:mb-10">
      <a href="#">Website</a>
      <a href="#">Instagram</a>
      <a href="#">Twitter</a>
      <a href="#">Dribble</a>
    </nav>
    <p>
      &copy; {{ new Date().getFullYear() }} Powered by Ryvision. All Rights
      Reserved.
    </p>
  </footer>
</template>
