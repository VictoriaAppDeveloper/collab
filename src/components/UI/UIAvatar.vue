<template>
  <div class="border-2 border-solid border-transparent
   border-gradient-l-red-600-purple-500-gray-50 rounded-full overflow-hidden"
       :class="'w-'+ size + ' h-'+size"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: "UIAvatar",
  props: {
    size: {
      type: String,
      default: '12'
    }
  }
}
</script>

<style scoped>

</style>
