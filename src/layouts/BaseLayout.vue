<template>
  <div class="layout">
    base layout
    <AppHeader/>
    <slot/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
export default {
  components: {AppHeader}
}
</script>
