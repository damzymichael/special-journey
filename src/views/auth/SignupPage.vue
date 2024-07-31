<script setup lang="ts">
import Logo from '@/components/svg/Logo.vue';
import LogoBlack from '@/components/svg/LogoBlack.vue';
import GoogleIcon from '@/components/svg/GoogleIcon.vue';
import Input from '@/components/ui/Input.vue';
import {Mail, LockKeyhole, Eye, ChevronRight, User} from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen py-3 bg-white sm:bg-black text-main/900">
    <Logo class="mx-auto my-8 hidden sm:block" />
    <LogoBlack class="mx-auto my-8 block sm:hidden" />
    <section class="bg-white min-w-[370px] w-2/5 mx-auto mb-5 p-2 sm:p-5">
      <h1 class="text-center font-bold text-xl sm:text-2xl mb-5">
        Create your new account
      </h1>
      <button
        class="flex gap-3 items-center justify-center w-full border border-soft/200 rounded-lg py-2"
      >
        <GoogleIcon />
        <span>Sign up with google</span>
      </button>
      <div class="p-1 h-10 flex items-center my-2">
        <span class="block flex-grow h-0.5 bg-soft/200" />
        <p class="text-soft/400 text-center px-3 bg-white">OR</p>
        <span class="block flex-grow h-0.5 bg-soft/200" />
      </div>
      <h3 class="text-sub/500 text-center text-base sm:text-lg mb-3">
        Enter your details to register
      </h3>
      <form class="mb-4">
        <Input label="Full name *" :BeginIcon="User" />
        <Input label="Email Address *" :BeginIcon="Mail" />
        <Input label="Password *" :BeginIcon="LockKeyhole" :EndIcon="Eye" />
        <button class="w-full bg-surface/700 text-white py-3">Register</button>
      </form>
      <p class="text-soft/400 text-sm text-center">
        By clicking Register, you agree to accept Apex Financial's
      </p>
      <p class="text-main/900 text-center font-medium underline">
        Terms and conditions
      </p>
    </section>
    <div class="flex items-center justify-center">
      <RouterLink
        to="auth/login"
        class="flex items-center text-office/brown50 text-sm bg-surface/700 py-3 px-5 rounded-full"
      >
        <span>Already have an account? Login</span>
        <ChevronRight :size="17" />
      </RouterLink>
    </div>
  </div>
</template>
