<script setup lang="ts">
import type {Component} from 'vue';

type Props = {
  label: string;
  icon?: Component;
  iconPosition?: 'begin' | 'end';
  addClasses?: string;
};

withDefaults(defineProps<Props>(), {
  iconPosition: 'end'
});
</script>

<template>
  <label :class="`block mb-4 flex-grow ${addClasses ?? addClasses}`">
    <span class="block mb-1">{{ label }}</span>
    <div class="flex items-center gap-1 py-2 px-3 border border-soft/200">
      <component
        v-show="icon && iconPosition == 'begin'"
        :is="icon"
      ></component>
      <input type="text" class="block appearance-none outline-none w-full" />
      <component v-show="icon && iconPosition == 'end'" :is="icon"></component>
    </div>
  </label>
</template>

<style scoped>
div:focus-within {
  border: 1px solid var(--main-900);
}
</style>
