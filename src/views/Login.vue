<template>
  <div class="flex min-h-screen">
    <div class="flex-1 hidden sm:block">
      <Slides class="h-screen w-full">
        <Slide v-for="(slide, key) in slides" :key="key">
          <div class="h-full w-full flex items-center justify-center">
            <h2 class="glitch text-5xl lg:text-9xl font-extrabold text-white" :title="slide">{{ slide }}</h2>
          </div>
        </Slide>
      </Slides>
    </div>
    <div class="bg-white min-h-screen w-full sm:w-144">
      <div class="flex py-16 justify-center">
        <router-link to="/">
          <h1 class="text-5xl font-Orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-4x animate-gradient">
            Collab!
          </h1>
        </router-link>
      </div>
      <div class="flex">
        <form class="mx-auto w-11/12 sm:w-7/12 grid gap-4">
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
          <div class="grid sm:grid-cols-2 sm:gap-4 gap-6 mt-4">
            <div class="flex items-center justify-center sm:justify-start row-start-2 row-end-3 sm:row-start-1 sm:row-end-2">
              <router-link to="/">Забыли пароль?</router-link>
            </div>
            <div>
              <button class="w-full">
              <span>
                   Войти
              </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Slides from "@/components/Slides";
import Slide from "@/components/Slide";
export default {
name: "Login",
  components: {Slide, Slides},
  setup() {
    let slides = ["Смотри", "Снимай", "Удивляй"];
    return { slides };
  }
}
</script>
