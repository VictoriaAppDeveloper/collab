<template>
  <div class="overflow-x-auto overflow-y-hidden scrollbar-hide w-full">
    <div class="grid gap-2 grid-flow-col px-2 w-max">
      <UIButton v-for="(section, key) of modelValue"
                :key="key"
                :to="section.to"
                :active="route.path === section.to"
                size="sm"
                no-hover
      >
        {{section.title}}
      </UIButton>
    </div>
  </div>
</template>

<script>
import UIButton from "@/components/UI/UIButton";
import {useRoute} from "vue-router";
export default {
  name: "UITabs",
  components: {UIButton},
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    const route = useRoute()
    return {route}
  }
}
</script>

<style scoped>

</style>
