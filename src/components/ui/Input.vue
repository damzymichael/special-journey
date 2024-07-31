<script setup lang="ts">
import type {FunctionalComponent} from 'vue';
import type {LucideProps} from 'lucide-vue-next';

type Props = {
  label: string;
  BeginIcon?: FunctionalComponent<LucideProps, {}, any, {}>;
  EndIcon?: FunctionalComponent<LucideProps, {}, any, {}>;
  addClasses?: string;
};

withDefaults(defineProps<Props>(), {});
</script>

<template>
  <label :class="`block mb-4 flex-grow ${addClasses ?? addClasses}`">
    <span class="block mb-1">{{ label }}</span>
    <div class="flex items-center gap-1 py-2 px-3 border border-soft/200">
      <BeginIcon />
      <input type="text" class="block appearance-none outline-none w-full" />
      <EndIcon />
    </div>
  </label>
</template>

<style scoped>
div:focus-within {
  border: 1px solid var(--main-900);
}
</style>
