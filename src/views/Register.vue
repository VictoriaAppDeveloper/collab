<template>
  <UIPage class="register-page">
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
          <input type="text" name="email" placeholder="">
          <label for="email">Enter name</label>
          <span class="error">Email is required</span>
        </div>
        <div class="relative z-0 w-full mb-5">
          <input type="text" name="password" placeholder="">
          <label for="password">Enter password</label>
          <span class="error">Password is required</span>
        </div>
        <div class="mt-4">
            <UIButton block to="/confirm">
              Далее
            </UIButton>
        </div>
        <div class="flex justify-center">
          <div class="grid grid-cols-2 gap-6">
            <div>
              <UIButton no-borders icon>
                <img src="@/assets/icons/google_logo.svg" class="w-8 h-8">
              </UIButton>
            </div>
            <div>
              <UIButton no-borders icon>
                <img src="@/assets/icons/facebook_logo.png" class="w-8 h-8">
              </UIButton>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="lg:hidden flex justify-center w-11/12 sm:w-7/12 mx-auto flex-1">
      <UIButton no-borders icon>
        <img src="@/assets/icons/google_play_store.svg" class="w-8 h-8">
      </UIButton>
      <UIButton no-borders icon class="ml-8">
        <img src="@/assets/icons/apple_store.webp" class="w-8 h-8">
      </UIButton>
    </div>
  </UIPage>
</template>

<script>
import VueFeather from 'vue-feather';
import UIButton from "@/components/UI/UIButton";
import UIPage from "@/components/UI/UIPage";
export default {
  name: "Login",
  components: {UIPage, UIButton, VueFeather},
}
</script>
