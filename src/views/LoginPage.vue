<script setup lang="ts">
import Logo from '@/components/svg/Logo.vue';
import AppleIcon from '@/components/svg/AppleIcon.vue';
import GoogleIcon from '@/components/svg/GoogleIcon.vue';
import EmailIcon from '@/components/svg/EmailIcon.vue';
import Input from '@/components/ui/Input.vue';
</script>

<template>
  <div class="w-screen h-screen bg-black p-1 text-main/900">
    <Logo class="mx-auto my-10" />
    <section class="bg-white w-2/5 mx-auto p-5">
      <h1 class="text-center text-lg sm:text-xl">Login to your account</h1>
      <h3 class="text-sub/500 text-center text-base sm:text-lg mb-3">
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
        <Input label="Email Address" :icon="EmailIcon" icon-position="begin" />
        <label>
          <span></span>
          <div>
            <Icon1 />
            <input type="password" />
            <Icon1 />
          </div>
        </label>
      </form>
    </section>
  </div>
</template>
