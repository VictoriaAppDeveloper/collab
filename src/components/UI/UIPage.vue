<template>
  <div class="page relative h-full z-10 flex flex-col" :class="{'overflow-hidden': !shadow}">
    <div class="page_shadow bg-black absolute w-full h-full left-full top-0">
    </div>
    <div class="page_shadow bg-black absolute w-full h-full right-full top-0">
    </div>
    <div class="page_content flex flex-col h-full bg-white">
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
