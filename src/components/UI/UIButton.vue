<template>
  <component :is="(!!to) ? 'router-link' : 'button'"
             class="button inline-block text-center"
             :class="{
                'button--no-borders': noBorders,
                'button--icon': icon,
                'w-full': block,
                'button--inverted': inverted
              }"
             :to="to"
  >
    <span class="flex justify-center">
          <slot/>
    </span>
  </component>
</template>

<script>
export default {
  name: "UIButton",
  props: {
    noBorders: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    inverted: {
      type: Boolean,
      default: false
    },
    to: {
      default: '',
    }
  },
}
</script>

<style scoped>

</style>
