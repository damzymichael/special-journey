<script setup lang="ts">
import {onMounted, onUnmounted} from 'vue';
import gsap from '@/utils/gsap.config';
import Button from '@/components/ui/Button.vue';
import MagicLineIcon from '@/components/svg/MagicLineIcon.vue';
import SearchIcon from '@/components/svg/SearchIcon.vue';

const message = ['Customize your', 'merch, the way you', 'want it'];

onMounted(() => {
  gsap.from('h2 span', {
    opacity: 0,
    left: '-200px',
    ease: 'power3.Out',
    stagger: 0.1
  });

  gsap.to('h2 span', {
    scrollTrigger: {
      trigger: 'h2 span',
      start: 'top 61px',
      end: 'bottom top',
      scrub: true
    },
    immediateRender: false,
    opacity: 0,
    left: '200px',
    ease: 'power3.Out',
    stagger: -0.1
  });
});
</script>

<template>
  <main>
    <!-- Hero section  -->
    <section class="hero h-screen bg-[#313133] flex items-end p-5 sm:p-10 pb-0">
      <div class="mb-[25vw]">
        <h2 class="uppercase mb-3 text-3xl sm:text-4xl overflow-x-hidden">
          <!-- <span v-for="text in message" class="block relative">{{ text }}</span> -->
          <span class="block relative">Customize your </span>
          <span class="block relative">merch, the way you</span>
          <span class="block relative">want it</span>
        </h2>
        <div class="button-group flex gap-2">
          <Button>
            <div class="flex items-center gap-1">
              <MagicLineIcon />
              <span class="text-sub/500">Create your merch</span>
            </div>
          </Button>
          <Button :border="false">
            <div class="bg-surface/700 flex items-center gap-2 -m-2 py-2 px-3">
              <SearchIcon />
              <span class="text-disabled/300">Pick and pay</span>
            </div>
          </Button>
        </div>
      </div>
    </section>
    <section class="h-screen bg-[#313133]"></section>
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
