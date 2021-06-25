<template>
  <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-4x layout animate-gradient h-screen overflow-hidden">
    <div class="flex min-h-screen">
      <div class="flex-1 hidden sm:block relative">
        <div class="absolute flex items-end w-full h-full">
          <div class="hidden lg:grid bg-white grid-cols-2 gap-8 p-4 max-w-max rounded-tr-lg z-10">
            <UIButton no-borders icon>
              <img src="@/assets/icons/google_play_store.svg" class="w-8 h-8">
            </UIButton>
            <UIButton no-borders icon>
              <img src="@/assets/icons/apple_store.webp" class="w-8 h-8">
            </UIButton>
          </div>
        </div>
        <Slides class="h-screen w-full">
          <Slide v-for="(slide, key) in slides" :key="key">
            <div class="h-full w-full flex items-center justify-center">
              <h2 class="glitch text-5xl lg:text-9xl font-extrabold text-white" :title="slide">{{ slide }}</h2>
            </div>
          </Slide>
        </Slides>
      </div>
      <div ref="viewport" class="bg-white h-screen w-full sm:w-96 lg:w-144 flex flex-col overflow-y-auto overflow-x-hidden relative">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import Slide from "@/components/Slide";
import Slides from "@/components/Slides";
import UIButton from "@/components/UI/UIButton";
import {ref, watch} from 'vue'
import {useRoute} from "vue-router";
export default {
name: "AuthLayout",
  components: {UIButton, Slides, Slide},
  setup() {
    const route = useRoute()
    const viewport = ref()

    watch(() => route.path, () => {
      viewport.value.scrollTop = 0
    })
    let slides = ["Смотри", "Снимай", "Удивляй"];
    return { slides, viewport };
  }
}
</script>

