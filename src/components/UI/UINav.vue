<template>
  <nav class="nav rounded-t-xl shadow-up relative">
    <div class="container mx-auto px-4">
      <ul class="flex justify-between py-4">
        <li v-for="(item, key) of modelValue" :key="key">
          <UIButton icon
                    :to="{path: item.to}"
                    :active="route.path.includes(item.to)"
          >
            <div  class="w-12 h-12 flex justify-center items-center">
              <vue-feather :type="item.icon"></vue-feather>
            </div>
          </UIButton>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import UIButton from "@/components/UI/UIButton";
import VueFeather from 'vue-feather';
import {useRoute} from "vue-router";

export default {
  name: "UINav",
  components: {UIButton, VueFeather},
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
