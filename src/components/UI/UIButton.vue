<template>
  <component :is="(!!to) ? 'router-link' : 'button'"
             class="button inline-block text-center"
             :class="[{
                'button--no-borders': noBorders,
                'button--icon': icon,
                'w-full': block,
                'button--inverted': inverted,
                'button--active': active,
              }, buttonSize()]"
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
    },
    active: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    }
  },
  setup(props) {
    const buttonSize = () => (props.size && props.size.length > 0) ? 'button--' + props.size : null;
    return {props, buttonSize}
  }
}
</script>

<style scoped>

</style>
