<template>
  <UIPage>
    <div class="grid grid-rows-6 h-full">
      <div class="flex justify-between items-center px-2 row-start-1 row-end-2">
        <div class="flex items-center">
          <UIAvatar size="12">
            <img src="https://www.kindpng.com/picc/m/41-414998_shoulder-human-behavior-head-user-profile-avatar-icon.png" alt="" class="object-contain">
          </UIAvatar>
          <span class="ml-2 font-bold">
            @kopyto
        </span>
        </div>
        <template v-if="route.meta.me">
          <UIButton icon no-borders to="/edit">
            <vue-feather type="edit"></vue-feather>
          </UIButton>
        </template>
      </div>
      <UITabs :modelValue="sections" class="row-start-2 row-end-3 border-gradient-l-red-600-purple-500-gray-50 border-b border-solid border-transparent"/>
      <div class="row-start-3 row-end-7 overflow-hidden relative">
        <UIRouterView/>
      </div>
    </div>
  </UIPage>
</template>

<script>
import UIPage from "@/components/UI/UIPage";
import UIAvatar from "@/components/UI/UIAvatar";
import UIButton from "@/components/UI/UIButton";
import VueFeather from "vue-feather";
import UITabs from "@/components/UI/UITabs";
import UIRouterView from "@/components/UI/UIRouterView";
import {useRoute} from "vue-router";

export default {
  name: "Profile",
  components: {UIRouterView, UITabs, UIButton, UIAvatar, UIPage, VueFeather},
  setup() {
    const route = useRoute()
    const partRoute = (route.params.id) ?
        route.matched[0].path.replace(':id', route.params.id) :
        route.matched[0].path

    const sections = [
      {
        to: partRoute,
        title: 'Все'
      },
      {
        to: partRoute + '/pictures',
        title: 'Изображения'
      },
      {
        to: partRoute + '/video',
        title: 'Видео'
      },
      {
        to: partRoute + '/translations',
        title: 'Трансляции'
      },
      {
        to: partRoute +'/conferences',
        title: 'Конференции'
      },
      {
        to: partRoute + '/3d',
        title: '3d'
      },
    ]

    return {sections, route}
  }

}
</script>

<style scoped>

</style>
