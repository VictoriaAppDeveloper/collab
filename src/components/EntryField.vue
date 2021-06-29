<template>
  <div class="entry-field rounded-t-xl shadow-up relative z-30 p-4">
      <div class="flex items-center">
        <div class="flex-1 max-h-40 overflow-y-auto" contenteditable="true">

        </div>
        <div class="ml-4">
          <UIButton icon>
            <vue-feather type="send"/>
          </UIButton>
        </div>
      </div>
  </div>
</template>

<script>
import VueFeather from "vue-feather";

import UIButton from "@/components/UI/UIButton";
export default {
  name: "EntryField",
  components: {UIButton, VueFeather}
}
</script>

<style scoped>

</style>
