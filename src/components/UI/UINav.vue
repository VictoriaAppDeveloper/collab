<template>
  <nav class="nav rounded-t-xl shadow-up relative z-30">
    <div class="container mx-auto">
      <ul class="flex justify-between py-4">
        <li v-for="(item, key) of modelValue" :key="key">
          <UIButton icon :to="{path: item.to}">
            <vue-feather :type="item.icon" size="36"></vue-feather>
          </UIButton>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import UIButton from "@/components/UI/UIButton";
import VueFeather from 'vue-feather';

export default {
  name: "UINav",
  components: {UIButton, VueFeather},
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style scoped>

</style>
