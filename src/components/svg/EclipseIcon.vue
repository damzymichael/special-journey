<script setup lang="ts">
defineProps<{fill: string}>();
</script>

<template>
  <svg
    width="25"
    height="25"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" :fill="fill" />
    <circle
      cx="20"
      cy="20"
      r="20"
      fill="url(#paint0_linear_1256_5181)"
      fill-opacity="0.12"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1256_5181"
        x1="20"
        y1="0"
        x2="20"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
</template>
