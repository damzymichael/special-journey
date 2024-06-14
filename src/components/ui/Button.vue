<script setup lang="ts">
type ButtonProps = {border?: boolean};
//Todo Add background color as props
const props = withDefaults(defineProps<ButtonProps>(), {
  border: true
});
</script>

<template>
  <button
    :class="`bg-white text-black ${border && 'border'} border-[#E2E4E9] p-2`"
  >
    <slot></slot>
  </button>
</template>
