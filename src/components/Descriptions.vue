<script setup lang="ts">
import type {Description} from '@/utils/data';
defineProps<{data: Description[]; addBg?: boolean; addHeading?: boolean}>();
</script>

<template>
  <div
    class="features mb-20 flex flex-wrap items-center justify-center mt-20 py-3"
  >
    <h1
      v-show="addHeading"
      class="text-black w-full mt-3 mb-10 font-bold text-base sm:text-lg uppercase text-center"
    >
      Steps to get your customized merch
    </h1>
    <div
      v-for="single in data"
      class="flex flex-col mb-4 w-10/12 sm:w-2/4 md:w-1/4 py-2 px-2 lg:px-5 gap-2 items-center"
    >
      <div class="border border-soft/200 p-2 rounded-full">
        <component :is="single.icon"></component>
      </div>
      <h3 class="text-main/900">{{ single.title }}</h3>
      <p class="text-sub/500 text-center text-sm">
        {{ single.desc }}
      </p>
    </div>
  </div>
</template>
