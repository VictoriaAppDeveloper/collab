<template>
  <div class="layout flex flex-col h-screen">
    <AppHeader/>
    <div class="flex-1 overflow-hidden relative">
      <slot/>
    </div>
    <UINav :modelValue="pages"/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import UINav from "@/components/UI/UINav";
export default {
  components: {UINav, AppHeader},
  setup () {
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

    return {pages}
  }
}
</script>
