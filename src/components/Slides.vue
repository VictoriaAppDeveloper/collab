<template>
  <div class="slides overflow-hidden" ref="slides">
    <div class="slides__container relative transition-all out-expo" :style="{top: -(100 * state.current) + '%'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, onBeforeMount, onUnmounted } from 'vue'
export default {
  name: "Slides",
  setup(_, {slots}) {
    let interval = null
    const state = reactive({
      childrenCount: 0,
      current: 0

    });
    function animate () {
      state.current = (state.current <  state.childrenCount - 1) ? state.current +=1 : 0;
    }
    onBeforeMount(() => {
      state.childrenCount = slots.default()[0].children.length;
    })
    onUnmounted(() => {
      clearInterval(interval)
    })

    onMounted(() => {
      interval = setInterval(()=>{
        animate()
      },3000);
    })
    return {state}
  }
}
</script>

<style scoped>

</style>
