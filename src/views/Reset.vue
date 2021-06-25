<template>
  <UIPage class="reset-page">
    <div class="py-16 grid grid-cols-4 mx-auto w-11/12 sm:w-7/12">
      <div class="col-start-1 col-end-2 flex items-center">
        <UIButton icon no-borders @click="$router.go(-1)" class="mt-1">
          <vue-feather type="arrow-left-circle" size="36"></vue-feather>
        </UIButton>
      </div>
      <div class="col-start-2 col-end-5">
        <router-link to="/">
          <h1 class="text-5xl font-Orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-4x animate-gradient">
            Collab!
          </h1>
        </router-link>
      </div>
    </div>
    <div class="flex">
      <form class="mx-auto w-11/12 sm:w-7/12 grid gap-6">
        <div class="relative z-0 w-full mb-5">
          <input type="text" name="email" id="email" placeholder="">
          <label for="email">Enter email</label>
          <span class="error">Email is required</span>
        </div>
        <div class="mt-4">
          <UIButton block to="/new-password">
            Далее
          </UIButton>
        </div>
      </form>
    </div>
  </UIPage>
</template>

<script>
import VueFeather from 'vue-feather';
import UIButton from "@/components/UI/UIButton";
import UIPage from "@/components/UI/UIPage";
export default {
  name: "Reset",
  components: {UIPage, UIButton, VueFeather},
}
</script>
