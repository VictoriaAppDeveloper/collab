<template>
  <div class="router-view h-full relative">
    <router-view v-slot="{ Component }">
      <transition
          :name="state.transitionName"
          :duration="state.duration"
          @after-enter="afterEnter"
          mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <div class="absolute w-full h-full overflow-hidden z-0 top-0">
      <component :is="state.currentComponent"/>
    </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {shallowReactive, watch} from "vue";

export default {
  name: "UIRouterView",
  setup() {
    const DEFAULT_TRANSITION = '';
    const route = useRoute()
    const state = shallowReactive({
      transitionName: DEFAULT_TRANSITION,
      duration: 500,
      nextComponent: null,
      toDepth: null,
      fromDepth: null,
      currentComponent: null
    })
    watch(() => route, (to, from) => {

          state.nextComponent = to.matched[to.matched.length - 1].components.default
          let transitionName = to.meta.transitionName || from.meta.transitionName;

          if (transitionName === 'slide') {
            state.toDepth = to.path.split('/').length
            state.fromDepth = from.path.split('/').length
            transitionName = (!window.history.state.forward) ? 'slide-left' : 'slide-right'
          }

          state.currentComponent = state.nextComponent

          state.transitionName = transitionName || DEFAULT_TRANSITION;
        },
        {deep: true}
    )
    const afterEnter = () => {
      state.currentComponent = null
    }


    return {route, state, afterEnter}

  }
}
</script>

<style scoped>

</style>
