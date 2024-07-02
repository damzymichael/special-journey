<script setup lang="ts">
import Logo from '@/components/svg/Logo.vue';
import AppleIcon from '@/components/svg/AppleIcon.vue';
import GoogleIcon from '@/components/svg/GoogleIcon.vue';
import Input from '@/components/ui/Input.vue';
</script>

<template>
  <div class="w-screen h-screen bg-black p-1 text-main/900">
    <Logo class="mx-auto my-10" />
    <section class="bg-white w-1/2 mx-auto p-3">
      <h1 class="text-center text-xl sm:text-2xl mb-1">
        Login to your account
      </h1>
      <h3 class="text-sub/500 text-center text-lg sm:text-xl mb-5">
        Enter your details to login
      </h3>
      <div class="flex gap-2 mb-4">
        <button class="flex-grow border border-soft/200 rounded-lg py-2">
          <AppleIcon class="mx-auto" />
        </button>
        <button class="flex-grow border border-soft/200 rounded-lg py-2">
          <GoogleIcon class="mx-auto" />
        </button>
      </div>

      <div class="p-1 h-10 flex items-center">
        <span class="block flex-grow h-0.5 bg-soft/200" />
        <p class="text-soft/400 text-center px-3 bg-white">OR</p>
        <span class="block flex-grow h-0.5 bg-soft/200" />
      </div>

      <form>
        <Input label="Email Address" />
      </form>
    </section>
  </div>
</template>
