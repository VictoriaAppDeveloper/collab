<template>
  <UICard>
    <template #head>
      <div class="flex justify-between">
        <router-link to="/user/1" class="flex items-center">
          <UIAvatar>
            <img :src="modelValue.avatar" alt="" class="object-contain">
          </UIAvatar>
          <span class="ml-2 font-bold text-black">
                @{{modelValue.name}}
              </span>
        </router-link>
        <UIButton icon no-borders @click="state.showModal = true">
          <vue-feather type="more-vertical"></vue-feather>
        </UIButton>
        <vue-final-modal :modelValue="state.showModal"
                         @click-outside="state.showModal = false"
                         classes="flex justify-center items-center"
                         content-class="relative w-full flex flex-col max-h-full mx-4 p-4 border dark:border-gray-800 rounded bg-white dark:bg-gray-900"

        >
          <ul>
            <template v-if="route.meta.me">
              <li>
                <UIButton no-borders block>Удалить</UIButton>
              </li>
            </template>
            <template v-else>
              <li v-for="(link, key) of modalButtons"
                  :key="key"
              >
                <UIButton no-borders block>{{link.title}}</UIButton>
              </li>
            </template>
          </ul>
        </vue-final-modal>
      </div>
    </template>
    <template #body>
      <img :src="modelValue.resource" alt="" class="w-full object-contain"/>
      <div class="px-2">
        <p :class="{'line-clamp-3': state.clampText}" @click="maximize">{{modelValue.text}}</p>
      </div>
    </template>
    <template #foot>
      <div class="px-2">
        <div class="mt-2 flex justify-between">
          <UIButton icon no-borders>
            <vue-feather type="heart"></vue-feather>
          </UIButton>
          <UIButton icon no-borders>
            <vue-feather type="thumbs-down"></vue-feather>
          </UIButton>
        </div>
        <CommentsList class="block lg:hidden">
          <CommentsItem v-for="(comment, key) of modelValue.comments"
                        :key="key"
                        :modelValue="comment"
          />
        </CommentsList>
        <div v-if="modelValue.comments">
          <UIButton to="/1" no-borders block>Перейти к комментариям</UIButton>
        </div>
      </div>
    </template>
  </UICard>
</template>

<script>
import UIAvatar from "@/components/UI/UIAvatar";
import UICard from "@/components/UI/UICard";
import UIButton from "@/components/UI/UIButton";
import VueFeather from "vue-feather";
import {reactive} from "vue";
import CommentsList from "@/components/CommentsList";
import CommentsItem from "@/components/CommentsItem";
import {useRoute} from "vue-router";

export default {
  name: "FeedItem",
  components: {CommentsItem, CommentsList, UIAvatar, UICard, UIButton, VueFeather},
  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {}
      }
    },
  },
  setup () {
    const route = useRoute()

    const modalButtons = [
      {
        title: 'Поделиться ссылкой',
      },
      {
        title: 'Пожаловаться',
      },
      {
        title: 'В избранные',
      },
    ]


    const state = reactive({
      clampText: true,
      showModal: false
    })
    const maximize = () => {
      state.clampText = false
    }

    return {state, maximize, modalButtons, route}
  }
}
</script>

<style scoped>

</style>
