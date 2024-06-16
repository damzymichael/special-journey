<script setup lang="ts">
type ButtonProps = {border?: boolean; bgColor: string};
//Todo Add background color as props
//Todo Optimize it where is is used
const props = withDefaults(defineProps<ButtonProps>(), {
  border: true,
  bgColor: 'bg-white'
});
</script>

<template>
  <button
    :class="`${bgColor} text-black ${border && 'border'} border-[#E2E4E9] p-2`"
  >
    <div class="flex items-center gap-2">
      <slot></slot>
    </div>
  </button>
</template>
