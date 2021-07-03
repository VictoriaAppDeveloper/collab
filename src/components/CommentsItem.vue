<template>
  <UICard :id="modelValue.id">
    <template #head>
      <div class="flex justify-between">
        <router-link to="/user/1" class="flex items-center">
          <UIAvatar size="8">
            <img :src="modelValue.avatar" alt="" class="object-contain">
          </UIAvatar>
          <span class="ml-2 font-bold" :class="{'font-sm': minimized}">
                @{{modelValue.name}}
              </span>
        </router-link>
      </div>
    </template>
    <template #body>
      <div class="px-2">
        <p :class="{'line-clamp-1 font-sm text-gray-700': minimized}">
          <span v-if="modelValue.replyId && modelValue.replyName">
            <a :href="'#' + modelValue.replyId">@{{modelValue.replyName}}</a>,
          </span>
          {{modelValue.text}}
          <span><UIButton no-borders icon>Ответить</UIButton></span>
        </p>
      </div>
    </template>
    <template #foot>
      <div class="pl-4 pr-2">
        <slot/>
      </div>
    </template>
  </UICard>
</template>

<script>
import UIAvatar from "@/components/UI/UIAvatar";
import UICard from "@/components/UI/UICard";
import UIButton from "@/components/UI/UIButton";
export default {
  name: "CommentsItem",
  components: {UIButton, UICard, UIAvatar},
  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {}
      }
    },
    minimized: {
      type: Boolean,
      default: true
    }
  },
}
</script>

<style scoped>

</style>
