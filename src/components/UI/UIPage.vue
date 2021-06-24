<template>
  <div class="page relative h-full z-10" :class="{'overflow-hidden': !shadow}">
    <div class="page_shadow bg-black absolute w-full h-full left-full">
    </div>
    <div class="page_content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "UIPage",
  props: {
    shadow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

</style>
