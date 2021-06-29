<template>
  <div class="layout flex flex-col h-screen">
    <AppHeader/>
    <div class="flex-1 overflow-hidden relative" ref="viewport">
      <slot/>
    </div>
    <UINav :modelValue="pages"/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import UINav from "@/components/UI/UINav";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
export default {
  components: {UINav, AppHeader},
  setup () {
    const route = useRoute()
    const viewport = ref()
    let pages = [
      {
        name: "Feed",
        to: '/feed',
        icon: 'align-left'

      },
      {
        name: "Shuffle",
        to: '/shuffle',
        icon: 'shuffle'

      },
      {
        name: "Add",
        to: '/add',
        icon: 'plus'

      },
      {
        name: "Feed",
        to: '/profile',
        icon: 'user'

      }
    ];

    watch(() => route.path, () => {
      if (viewport.value) {
        viewport.value.scrollTop = 0
      }
    })

    return {pages, viewport}
  }
}
</script>
