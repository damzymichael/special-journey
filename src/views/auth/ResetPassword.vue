<script setup lang="ts">
import Logo from '@/components/svg/Logo.vue';
import LogoBlack from '@/components/svg/LogoBlack.vue';
import Input from '@/components/ui/Input.vue';
import {Mail, Key} from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen py-3 bg-white sm:bg-black text-main/900">
    <Logo class="mx-auto my-8 hidden sm:block" />
    <LogoBlack class="mx-auto my-8 block sm:hidden" />
    <section class="bg-white min-w-[370px] w-2/5 mx-auto mb-5 p-2 sm:p-5">
      <div class="bg-key-gradient rounded-full mx-auto w-max p-4 mb-4">
        <div class="bg-white rounded-full shadow-md p-4">
          <Key color="#525866" />
        </div>
      </div>
      <h1 class="text-center font-bold text-xl sm:text-2xl mb-3">
        Reset your password
      </h1>
      <p class="text-sub/500 text-center mb-4">
        Enter your email to reset your password
      </p>
      <hr class="my-4" />
      <form class="mb-4">
        <Input label="Email Address *" :BeginIcon="Mail" />
        <button class="w-full bg-surface/700 text-white py-3">
          Reset Password
        </button>
      </form>
      <p class="text-soft/400 text-center">Don't have access anymore?</p>
      <p class="text-main/900 text-center font-medium underline">
        Try another method
      </p>
    </section>
  </div>
</template>
