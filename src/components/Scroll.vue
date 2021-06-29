<template>
  <div class="scroll h-full overflow-auto" ref="scroll">
    <slot/>
  </div>
</template>

<script>

import {ref, onBeforeUnmount, onMounted, watch} from 'vue'
import {useRoute} from "vue-router";


export default {
  name: "Scroll",
  props: {
    callback: Function
  },
  setup(props) {
    const scroll = ref()
    const route = useRoute()


    const handleScroll = () => {
      if (scroll.value.scrollTop + 600 >= scroll.value.querySelector('.container').offsetHeight) {
        props.callback()
      }
    }
    watch(() => route.path, () => {
      scroll.value.classList.add('overflow-hidden')
    })
    onMounted(() => {
      scroll.value.addEventListener('scroll', handleScroll)
    })
    onBeforeUnmount(() => {
        scroll.value.removeEventListener('scroll', handleScroll)
    })

    return {scroll}
  }
}
</script>

<style scoped>

</style>
