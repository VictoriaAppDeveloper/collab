<template>
  <component :is="layout">
    <slot/>
  </component>
</template>

<script>
import BaseLayout from './BaseLayout'
import {shallowRef, watch} from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: "Layout",
  setup () {
    const layout = shallowRef(BaseLayout)
    const route = useRoute()

    watch(
        () => route.meta,
        async meta => {
          try {
            const component = await require(`@/layouts/${meta.layout}.vue`)
            layout.value = component?.default || BaseLayout
          } catch (e) {
            layout.value = BaseLayout
          }
        },
    )
    return { layout }
  }
}
</script>

