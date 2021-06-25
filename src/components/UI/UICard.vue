<template>
  <div class="card lg:shadow-lg">
    <div class="card_head p-2">
      <slot name="head"/>
    </div>
    <div class="card_body">
      <slot name="body"/>
    </div>
    <div class="card_foot pb-2">
      <slot name="foot"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "UICard"
}
</script>

<style scoped>

</style>
