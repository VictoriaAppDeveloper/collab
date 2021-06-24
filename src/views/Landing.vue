<template>
    <UIPage class="landing-page">
      <div class="flex py-16 justify-center">
        <router-link to="/">
          <h1 class="text-5xl font-Orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-4x animate-gradient">
            Collab!
          </h1>
        </router-link>
      </div>
      <div class="flex pb-16">
        <form class="mx-auto w-11/12 sm:w-10/12 md:w-7/12 grid gap-6">
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
          <div class="grid lg:grid-cols-2 sm:gap-4 gap-6 mt-4">
            <div class="flex items-center justify-center lg:justify-start row-start-2 row-end-3 sm:row-start-1 sm:row-end-2">
              <router-link to="/">Забыли пароль?</router-link>
            </div>
            <div>
              <UIButton block>
                 Войти
              </UIButton>
            </div>
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
          <div>
            <UIButton block inverted to="/register">
              Регистрация
            </UIButton>
          </div>
        </form>
      </div>
      <div class="lg:hidden flex justify-center w-11/12 sm:w-7/12 mx-auto flex-1 pb-16">
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
name: "Landing",
  components: {UIPage, UIButton},
}
</script>
