<template>
  <UIPage class="register-page">
    <div class="flex py-16 justify-center">
      <router-link to="/">
        <h1 class="text-5xl font-Orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-4x animate-gradient">
          Collab!
        </h1>
      </router-link>
    </div>
    <div class="flex">
      <form class="mx-auto w-11/12 sm:w-7/12 grid gap-6">
        <div class="relative z-0 w-full mb-5">
          <input type="text" name="code" placeholder="">
          <label for="code">Enter code</label>
          <span class="error">Code is required</span>
        </div>
        <div class="mt-4">
          <UIButton block>
            Вход
          </UIButton>
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
import UIButton from "@/components/UI/UIButton";
import UIPage from "@/components/UI/UIPage";
export default {
  name: "Login",
  components: {UIPage, UIButton},
}
</script>
