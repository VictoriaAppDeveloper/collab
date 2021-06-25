<template>
  <UIPage>
    <div class="container mx-auto lg:p-4 py-4 overflow-auto">
      <div class="grid lg:grid-cols-4 gap-6">
        <UICard v-for="(post, key) of posts" :key="key">
          <template #head>
            <div class="flex justify-between">
              <div class="flex items-center">
                <UIAvatar>
                  <img :src="post.avatar" alt="" class="object-contain">
                </UIAvatar>
                <span class="ml-2 font-bold">
                  @{{post.name}}
                </span>
              </div>
              <UIButton icon no-borders>
                <vue-feather type="more-vertical"></vue-feather>
              </UIButton>
            </div>
          </template>
          <template #body>
            <img :src="post.resource" alt="" class="w-full object-contain"/>
            <div class="px-2">
              <p class="line-clamp-3">{{post.text}}</p>
            </div>
          </template>
          <template #foot>
            <div class="px-2 mt-2 flex justify-between">
              <UIButton icon no-borders>
                <vue-feather type="heart"></vue-feather>
              </UIButton>
              <UIButton icon no-borders>
                <vue-feather type="thumbs-down"></vue-feather>
              </UIButton>
            </div>
          </template>
        </UICard>
      </div>
    </div>
  </UIPage>
</template>

<script>
import UIPage from "@/components/UI/UIPage";
import UICard from "@/components/UI/UICard";
import UIAvatar from "@/components/UI/UIAvatar";
import UIButton from "@/components/UI/UIButton";
import VueFeather from 'vue-feather';

export default {
name: "Feed",
  components: {UIButton, UIAvatar, UICard, UIPage, VueFeather},
  setup() {
    const posts = [
      {
        avatar: 'https://www.kindpng.com/picc/m/41-414998_shoulder-human-behavior-head-user-profile-avatar-icon.png',
        name: 'kopyto',
        resource: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, enim rutrum ultrices malesuada, orci nulla commodo lorem, vel luctus neque ante quis purus. Curabitur laoreet dapibus erat, in mattis justo lacinia sit amet. Donec iaculis quam felis, vel feugiat dui imperdiet porta. Mauris lectus purus, egestas sagittis massa vel, euismod vestibulum leo.'
      },
      {
        avatar: 'https://www.kindpng.com/picc/m/41-414998_shoulder-human-behavior-head-user-profile-avatar-icon.png',
        name: 'kopyto',
        resource: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, enim rutrum ultrices malesuada, orci nulla commodo lorem, vel luctus neque ante quis purus. Curabitur laoreet dapibus erat, in mattis justo lacinia sit amet. Donec iaculis quam felis, vel feugiat dui imperdiet porta. Mauris lectus purus, egestas sagittis massa vel, euismod vestibulum leo.'
      },
      {
        avatar: 'https://www.kindpng.com/picc/m/41-414998_shoulder-human-behavior-head-user-profile-avatar-icon.png',
        name: 'kopyto',
        resource: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, enim rutrum ultrices malesuada, orci nulla commodo lorem, vel luctus neque ante quis purus. Curabitur laoreet dapibus erat, in mattis justo lacinia sit amet. Donec iaculis quam felis, vel feugiat dui imperdiet porta. Mauris lectus purus, egestas sagittis massa vel, euismod vestibulum leo.'
      },
      {
        avatar: 'https://www.kindpng.com/picc/m/41-414998_shoulder-human-behavior-head-user-profile-avatar-icon.png',
        name: 'kopyto',
        resource: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, enim rutrum ultrices malesuada, orci nulla commodo lorem, vel luctus neque ante quis purus. Curabitur laoreet dapibus erat, in mattis justo lacinia sit amet. Donec iaculis quam felis, vel feugiat dui imperdiet porta. Mauris lectus purus, egestas sagittis massa vel, euismod vestibulum leo.'
      }
    ]
    return {posts}
  }
}
</script>
