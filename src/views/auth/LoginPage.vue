<script setup lang="ts">
import Logo from '@/components/svg/Logo.vue';
import LogoBlack from '@/components/svg/LogoBlack.vue';
import GoogleIcon from '@/components/svg/GoogleIcon.vue';
import Input from '@/components/ui/Input.vue';
import {Mail, LockKeyhole, Eye, ChevronRight} from 'lucide-vue-next';
import {CircleAlert} from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen py-3 bg-white sm:bg-black text-main/900">
    <Logo class="mx-auto my-8 hidden sm:block" />
    <LogoBlack class="mx-auto my-8 block sm:hidden" />
    <section class="bg-white min-w-[370px] w-2/5 mx-auto mb-5 p-2 sm:p-5">
      <h1 class="text-center font-bold text-lg sm:text-xl mb-5">
        Login to your account
      </h1>
      <button
        class="flex gap-3 items-center justify-center w-full border border-soft/200 rounded-lg py-2"
      >
        <GoogleIcon />
        <span>Sign in with google</span>
      </button>
      <div class="p-1 h-10 flex items-center my-2">
        <span class="block flex-grow h-0.5 bg-soft/200" />
        <p class="text-soft/400 text-center px-3 bg-white">OR</p>
        <span class="block flex-grow h-0.5 bg-soft/200" />
      </div>
      <h3 class="text-sub/500 text-center text-base sm:text-lg mb-3">
        Enter your details to login
      </h3>
      <form>
        <Input label="Email Address" :BeginIcon="Mail" />
        <div class="flex items-center gap-2 mb-2">
          <CircleAlert :size="15" color="#DF1C41" />
          <p class="text-state/error">An account with this email exists</p>
        </div>
        <Input label="Password" :BeginIcon="LockKeyhole" :EndIcon="Eye" />
        <div class="flex items-center justify-between mb-3">
          <label class="flex gap-2 items-center">
            <input type="checkbox" />
            <span>Keep me logged in</span>
          </label>
          <RouterLink
            to="/auth/reset-password"
            class="underline text-sub/500 font-medium"
          >
            Forgot password?
          </RouterLink>
        </div>
        <button class="w-full bg-surface/700 text-white py-3">Login</button>
      </form>
    </section>
    <div class="flex items-center justify-center">
      <RouterLink
        to="/auth/signup"
        class="flex items-center text-office/brown50 text-sm bg-surface/700 py-3 px-5 rounded-full"
      >
        <span>Don't have an account? Sign up</span>
        <ChevronRight :size="15" />
      </RouterLink>
    </div>
  </div>
</template>
