<template>
  <header class="shadow-lg bg-white relative z-30">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
          <template v-if="backButton">
            <UIButton icon no-borders @click="$router.go(-1)" class="mt-1">
              <vue-feather type="arrow-left-circle" size="36"></vue-feather>
            </UIButton>
          </template>
          <h1 class="text-3xl font-Orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-4x animate-gradient">
            Collab!
          </h1>
      </div>
    </div>
  </header>
</template>

<script>
import UIButton from "@/components/UI/UIButton";
import VueFeather from 'vue-feather';

export default {
  name: "AppHeader",
  components: {UIButton, VueFeather},
  props: {
    backButton: {
      type: Boolean,
      default: false
    }
  }
}
</script>
