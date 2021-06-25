<template>
  <UIPage class="confirm-page">
    <div class="py-16 grid grid-cols-4 mx-auto w-11/12 sm:w-7/12">
      <div class="col-start-1 col-end-2 flex items-center">
        <UIButton icon no-borders to="/register"  class="mt-1">
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
          <input type="text" name="code" placeholder="">
          <label for="code">Enter code</label>
          <span class="error">Code is required</span>
        </div>
        <div class="flex justify-center">
          <span v-if="state.timer > 0" class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-4x animate-gradient">
              Осталось: {{state.timer}} секунд
          </span>
        </div>
        <div class="mt-4">
          <UIButton block to="/feed">
            Вход
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
import {reactive} from "vue";
export default {
  name: "Confirm",
  components: {UIPage, UIButton, VueFeather},
  setup () {
    const state = reactive({
      timer: 60
    })

    let interval = setInterval(() => {
      if (state.timer === 0) {
        clearInterval(interval)
      } else {
        state.timer--
      }
    }, 1000)
    return {state}
  }
}
</script>
