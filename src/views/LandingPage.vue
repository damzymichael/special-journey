<script setup lang="ts">
import {onMounted} from 'vue';
import gsap from '@/utils/gsap.config';
import Button from '@/components/ui/Button.vue';
import MagicLineIcon from '@/components/svg/MagicLineIcon.vue';
import SearchIcon from '@/components/svg/SearchIcon.vue';
import {features} from '@/utils/data';

function scrollToTop() {
  window.scrollTo(0, 0);
  // window.scroll({left: 0, top: 0, behavior: 'smooth'})
}

onMounted(() => {
  gsap.from('h2 span', {
    opacity: 0,
    left: '-200px',
    ease: 'power3.Out',
    stagger: 0.1,
    delay: 0.7
  });

  //61px height of navigation
  gsap.to('h2 span', {
    scrollTrigger: {
      trigger: 'h2 span',
      start: 'top 61px',
      end: 'bottom top',
      scrub: true,
      onEnter: () => {
        window.addEventListener('beforeunload', scrollToTop);
      },
      onLeave: () => {
        window.removeEventListener('beforeunload', scrollToTop);
      }
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
  <main class="p-5 sm:p-10 pb-0">
    <!-- Hero section  -->
    <section
      class="hero h-screen bg-[#313133] -m-5 sm:-m-10 p-5 sm:p-10 pb-0 flex items-end"
    >
      <div class="mb-[20vh]">
        <h2 class="uppercase mb-3 text-3xl sm:text-4xl overflow-x-hidden">
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

    <!-- Next Section  -->
    <section class="min-h-screen">
      <!-- flex-container -->
      <div class="features flex flex-wrap justify-center mt-20">
        <div
          v-for="feature in features"
          class="flex flex-col mb-4 w-10/12 sm:w-2/4 md:w-1/4 py-2 px-2 lg:px-5 gap-2 items-center"
        >
          <div class="border border-soft/200 p-2 rounded-full">
            <component :is="feature.Icon"></component>
          </div>
          <h3 class="text-main/900">{{ feature.title }}</h3>
          <p class="text-sub/500 text-center text-sm">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </section>
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
