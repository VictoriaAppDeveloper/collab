<template>
  <div class="layout flex flex-col h-screen">
    <AppHeader back-button/>
    <div class="flex-1 overflow-hidden relative" ref="viewport">
      <slot/>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
export default {
name: "PostLayout",
  components: {AppHeader},
  setup () {
    const viewport = ref()
    const route = useRoute()
    watch(() => route.path, () => {
      if (viewport.value) {
        viewport.value.scrollTop = 0
      }
    })
  }
}
</script>

<style scoped>

</style>
