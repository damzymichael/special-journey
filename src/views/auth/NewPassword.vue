<script setup lang="ts">
import Logo from '@/components/svg/Logo.vue';
import LogoBlack from '@/components/svg/LogoBlack.vue';
import Input from '@/components/ui/Input.vue';
import {LockKeyhole, LockIcon} from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen py-3 bg-white sm:bg-black text-main/900">
    <Logo class="mx-auto my-8 hidden sm:block" />
    <LogoBlack class="mx-auto my-8 block sm:hidden" />
    <section class="bg-white min-w-[370px] w-2/5 mx-auto mb-5 p-2 sm:p-5">
      <div class="bg-key-gradient rounded-full mx-auto w-max p-4 mb-4">
        <div class="bg-white rounded-full shadow-md p-4">
          <LockIcon color="#525866" />
        </div>
      </div>
      <h1 class="text-center font-bold text-xl sm:text-2xl mb-3">
        New password
      </h1>
      <p class="text-sub/500 text-center mb-4">
        Set a new password for your account
      </p>
      <hr class="my-4" />
      <form class="mb-4">
        <Input label="New password*" :BeginIcon="LockKeyhole" />
        <Input label="Confirm password*" :BeginIcon="LockKeyhole" />
        <button class="w-full bg-surface/700 text-white py-3">
          Save password and Login
        </button>
      </form>
      <p class="text-soft/400 text-center">Need further assistance ?</p>
      <p class="text-main/900 text-center font-medium underline">
        Contact support
      </p>
    </section>
  </div>
</template>
