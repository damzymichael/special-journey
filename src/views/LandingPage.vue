<script setup lang="ts"></script>

<template>
  <main>
    <!-- Hero section  -->
    <section class="hero h-screen bg-[#313133]"></section>
  </main>
</template>

<style scoped>
section.hero {
  background: url('../assets/girl.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media screen and (max-width: 640px) {
  section.hero {
    background: url('../assets/girl_small.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
</style>
