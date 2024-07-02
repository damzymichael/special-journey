<script setup lang="ts">
import type {Component} from 'vue';
defineProps<{label: string; icon?: Component; addClasses?: string}>();
</script>

<template>
  <label :class="`block mb-4 flex-grow ${addClasses ?? addClasses}`">
    <span class="block mb-1">{{ label }}</span>
    <div class="flex items-center py-2 px-3 border border-soft/200">
      <input type="text" class="block appearance-none outline-none w-full" />
      <component v-show="icon" :is="icon"></component>
    </div>
  </label>
</template>

<style scoped>
div:focus-within {
  border: 1px solid var(--main-900);
}
</style>
