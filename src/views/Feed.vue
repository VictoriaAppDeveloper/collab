<template>
  <UIPage>
    <div class="py-4 border-gradient-l-red-600-purple-500-gray-50 border-b border-solid border-transparent">
      <UITabs :modelValue="sections"/>
    </div>
    <div class="overflow-hidden relative">
      <UIRouterView/>
    </div>
  </UIPage>
</template>

<script>
import UIPage from "@/components/UI/UIPage";
import {shallowReactive} from "vue";
import UITabs from "@/components/UI/UITabs";
import UIRouterView from "@/components/UI/UIRouterView";

export default {
name: "Feed",
  components: {UIRouterView, UITabs, UIPage},
  setup() {

    const sections = [
      {
        to: '/feed',
        title: 'Все'
      },
      {
        to: '/feed/pictures',
        title: 'Изображения'
      },
      {
        to: '/feed/video',
        title: 'Видео'
      },
      {
        to: '/feed/translations',
        title: 'Трансляции'
      },
      {
        to: '/feed/conferences',
        title: 'Конференции'
      },
      {
        to: '/feed/3d',
        title: '3d'
      },
    ]

    const posts = [
      {
        avatar: 'https://www.kindpng.com/picc/m/41-414998_shoulder-human-behavior-head-user-profile-avatar-icon.png',
        name: 'kopyto',
        resource: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, enim rutrum ultrices malesuada, orci nulla commodo lorem, vel luctus neque ante quis purus. Curabitur laoreet dapibus erat, in mattis justo lacinia sit amet. Donec iaculis quam felis, vel feugiat dui imperdiet porta. Mauris lectus purus, egestas sagittis massa vel, euismod vestibulum leo.',
        comments: [
          {
            id: 1,
            avatar: 'https://www.kindpng.com/picc/m/41-414998_shoulder-human-behavior-head-user-profile-avatar-icon.png',
            name: 'kopyto',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, enim rutrum ultrices malesuada, orci nulla commodo lorem, vel luctus neque ante quis purus. Curabitur laoreet dapibus erat, in mattis justo lacinia sit amet. Donec iaculis quam felis, vel feugiat dui imperdiet porta. Mauris lectus purus, egestas sagittis massa vel, euismod vestibulum leo.',
          },
          {
            id: 2,
            avatar: 'https://www.kindpng.com/picc/m/41-414998_shoulder-human-behavior-head-user-profile-avatar-icon.png',
            name: 'kopyto',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, enim rutrum ultrices malesuada, orci nulla commodo lorem, vel luctus neque ante quis purus. Curabitur laoreet dapibus erat, in mattis justo lacinia sit amet. Donec iaculis quam felis, vel feugiat dui imperdiet porta. Mauris lectus purus, egestas sagittis massa vel, euismod vestibulum leo.',
          },
          {
            id: 3,
            replyId: 1,
            replyName: 'kopyto',
            avatar: 'https://www.kindpng.com/picc/m/41-414998_shoulder-human-behavior-head-user-profile-avatar-icon.png',
            name: 'kopyto',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, enim rutrum ultrices malesuada, orci nulla commodo lorem, vel luctus neque ante quis purus. Curabitur laoreet dapibus erat, in mattis justo lacinia sit amet. Donec iaculis quam felis, vel feugiat dui imperdiet porta. Mauris lectus purus, egestas sagittis massa vel, euismod vestibulum leo.',
          }
        ]
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
    ]
    let offset = 10


    const state = shallowReactive(
        {
          posts: posts.filter((post, key) => key < offset),

        }
    )

    const scrollCallback = () => {
      offset+=10
      state.posts = posts.filter((post, key) => key < offset)
    }
    return {scrollCallback, state, sections}
  }
}
</script>
