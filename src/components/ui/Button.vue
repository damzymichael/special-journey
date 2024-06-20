<script setup lang="ts">
type ButtonProps = {border?: boolean; bgColor?: string; fullWidth?: boolean};
//Todo Add background color as props
//Todo Optimize it where is is used
const props = withDefaults(defineProps<ButtonProps>(), {
  border: true,
  bgColor: 'bg-white',
  fullWidth: false
});
</script>

<template>
  <button
    :class="`${bgColor} ${fullWidth ? 'w-full' : ''} text-black ${border && 'border'} border-[#E2E4E9] p-2`"
  >
    <div class="flex items-center justify-center gap-2">
      <slot></slot>
    </div>
  </button>
</template>
