<template>
  <UIPage>
    <UIPullToRefresh :refresh="onRefresh">
      <Scroll :callback="scrollCallback">
        <div class="container mx-auto lg:p-4 py-4">
          <FeedList>
            <FeedItem v-for="(post, key) of state.posts"
                      :key="key"
                      :modelValue="post"
            />
          </FeedList>
        </div>
      </Scroll>
    </UIPullToRefresh>
  </UIPage>
</template>

<script>
import FeedList from "@/components/FeedList";
import UIPage from "@/components/UI/UIPage";
import Scroll from "@/components/Scroll";
import {reactive} from "vue";
import FeedItem from "@/components/FeedItem";
import UIPullToRefresh from "@/components/UI/UIPullToRefresh";

export default {
  name: "Shuffle",
  components: {UIPullToRefresh, FeedItem, Scroll, UIPage, FeedList},
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


    const state = reactive(
        {
          posts: posts.filter((post, key) => key < offset)
        }
    )
    const scrollCallback = () => {
      offset+=10
      state.posts = posts.filter((post, key) => key < offset)
    }
    const onRefresh = () => {
      console.log(111)
    }

    return {scrollCallback, state, onRefresh}
  }
}
</script>
