<script setup lang="ts">
import {onMounted, onUnmounted} from 'vue';
import gsap from '@/utils/gsap.config';
import Button from '@/components/ui/Button.vue';
import MagicLineIcon from '@/components/svg/MagicLineIcon.vue';
import SearchIcon from '@/components/svg/SearchIcon.vue';
import Descriptions from '@/components/Descriptions.vue';
import Products from '@/components/Products.vue';
import {features, steps, products} from '@/utils/data';

function scrollToTop() {
  window.scrollTo(0, 0);
  // window.scroll({left: 0, top: 0, behavior: 'smooth'})
}

let ctx: gsap.Context;

onMounted(() => {
  //61px height of navigation
  ctx = gsap.context(() => {
    gsap.from('h2 span', {
      opacity: 0,
      left: '-200px',
      ease: 'power3.Out',
      stagger: 0.1,
      delay: 0.7
    });

    //Hero section 2 animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero2',
        start: 'top center'
      },
      yoyo: true
    });
    const mm = gsap.matchMedia();

    mm.add('(min-width: 640px)', () => {
      timeline.from('.hero2', {backgroundSize: '120%'});
    });

    mm.add('(max-width: 639px)', () => {
      timeline.from('.hero2', {backgroundPosition: '70% center'});
    });

    timeline.to('.banner2', {
      opacity: 1,
      left: 0,
      stagger: 0.1
    });
  });
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <main class="px-5 sm:px-10 sm:py-0">
    <!-- Hero section  -->
    <section
      class="hero h-screen bg-[#313133] -mx-5 sm:-mx-10 -mt-0 p-5 pt-0 sm:p-10 flex items-end"
    >
      <div class="mb-[20vh]">
        <h2
          class="uppercase relative mb-3 text-3xl sm:text-4xl overflow-x-hidden"
        >
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
    <section id="section2" class="min-h-screen">
      <Descriptions :data="features" />
      <!-- hero 2 -->
      <div
        class="hero2 mb-2 min-h-[31rem] sm:min-h-96 p-5 sm:p-10 flex flex-col justify-end items-start"
      >
        <h1 class="banner2 uppercase text-2xl sm:text-4xl w-full sm:w-3/4 mb-3">
          Start customizing your <br />
          own merch now.
        </h1>
        <p class="banner2 mb-4">
          We have made the process really easy to use to get your desired merch
        </p>
        <div class="banner2">
          <Button>
            <span class="text-sub/500">Get started now</span>
          </Button>
        </div>
      </div>
      <Descriptions :data="steps" />
    </section>

    <section class="products">
      <h1 class="uppercase text-black font-bold text-center mb-10">
        YOU CAN ALSO Pick and Pay from our list of Merch
      </h1>
      <Products :products="products" />
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

div.hero2 {
  background: url('../assets/merch-boy.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}

.banner2 {
  position: relative;
  opacity: 0;
  left: -200px;
}

@media screen and (max-width: 640px) {
  section.hero {
    background: url('../assets/girl_small.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  div.hero2 {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 75% center;
  }
}
</style>
