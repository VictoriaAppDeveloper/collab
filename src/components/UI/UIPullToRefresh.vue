<template>
  <div class="pull-to-reftesh h-full" ref="viewport">
    <slot/>
  </div>
</template>

<script>
import {onBeforeMount, ref, watch} from "vue";
import PullToRefresh from "pulltorefreshjs";
import {useRoute} from "vue-router";

export default {
  name: "UIPullToRefresh",
  props: {
    refresh: Function
  },
  setup (props) {
    const viewport = ref()
    const route = useRoute()


    onBeforeMount(() => {

      PullToRefresh.init({
        mainElement: viewport.value,
        iconArrow: '',
        iconRefreshing: '',
        getStyles: () => {

          return ".__PREFIX__ptr { " +
              "      position: absolute; " +
              "      z-index: 1000;  " +
              "      pointer-events: none; " +
              "      font-size: 0.85em; " +
              "      font-weight: bold; " +
              "      top: 0; " +
              "      height: 40px; " +
              "      margin-top: -55px; " +
              "      transition: height 0.3s, min-height 0.3s; " +
              "      text-align: center; " +
              "      width: 100%; " +
              "      overflow: hidden; " +
              "      display: flex; " +
              "      align-items: flex-end; " +
              "      align-content: stretch; " +
              "    } " +
              "      .__PREFIX__box { " +
              "    " +
              "    flex-basis: 100%; " +
              "  } " +
              ".__PREFIX__pull { " +
              "    transition: none; " +
              "  } " +
              ".__PREFIX__text { " +
              "    margin-top: .33em; " +
              "    color: rgba(0, 0, 0, 0.3); " +
              "  } " +
              ".__PREFIX__icon { " +
              "    color: rgba(0, 0, 0, 0.3); " +
              "    transition: transform .3s; " +
              "    display: none; " +
              "  } " +
              ".__PREFIX__top { " +
              "    touch-action: pan-x pan-down pinch-zoom; " +
              "  } " +
              ".__PREFIX__release .__PREFIX__icon { " +
              "    transform: rotate(180deg); " +
              "  }";
        },
        instructionsRefreshing: '<div class="font-Orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-4x animate-gradient">Обновляю...</div>',
        instructionsReleaseToRefresh: '<div class="font-Orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-4x animate-gradient">Загружаю...</div>',
        shouldPullToRefresh () {
          return (this.mainElement.querySelector('.scroll')) ? this.mainElement.querySelector('.scroll').scrollTop <= 100 : ''
         },
        onRefresh() {
          props.refresh()
        }
      });
    })

    watch(() => route.path, () => {
      PullToRefresh.destroyAll()
    })

    return {props}
  }
}
</script>

<style scoped>

</style>
