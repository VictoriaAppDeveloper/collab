<template>
  <div class="layout flex flex-col h-screen">
    <AppHeader back-button/>
    <div class="flex-1 overflow-hidden relative" ref="viewport">
      <slot/>
    </div>
    <EntryField/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import EntryField from "@/components/EntryField";
export default {
name: "PostLayout",
  components: {EntryField, AppHeader},
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
