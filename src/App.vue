<template>
  <Layout>
    <router-view v-slot="{ Component }">
        <transition
            :name="state.transitionName"
            :duration="state.duration"
            @enter="afterEnter"
            mode="out-in">
                <component :is="Component" />
        </transition>
      </router-view>
      <div class="absolute w-full h-full overflow-hidden z-0">
          <component :is="state.currentComponent"/>
      </div>
  </Layout>
</template>

<script>
import { watch, reactive } from "vue";
import { useRoute } from "vue-router";
export default {
  name: 'App',
  setup() {
    const DEFAULT_TRANSITION = '';
    const route = useRoute()
    const state = reactive({
      transitionName: DEFAULT_TRANSITION,
      duration: 500,
      nextComponent: null,
      prevComponent: null,
      toDepth: null,
      fromDepth: null,
      currentComponent: null
    })

    watch(() => route, (to, from) => {
          state.nextComponent = to.matched[to.matched.length - 1].components.default
          state.prevComponent = from.matched[from.matched.length - 1].components.default
          let transitionName = to.meta.transitionName || from.meta.transitionName;
          if (transitionName === 'slide') {
            state.toDepth = to.path.split('/').length
            state.fromDepth = from.path.split('/').length
            transitionName = state.toDepth < state.fromDepth ? 'slide-right' : 'slide-left'
          }

          if (transitionName === 'slide-left') {
            state.currentComponent = state.nextComponent
          }

          state.transitionName = transitionName || DEFAULT_TRANSITION;
        },
        {deep: true}
    )
    const afterEnter = () => {
        state.currentComponent = null
    }

    return {route, state, afterEnter}
  },
}
</script>

<style>

</style>
