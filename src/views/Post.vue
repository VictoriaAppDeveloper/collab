<template>
  <UIPage class="post">
    <Scroll :callback="scrollCallback">
      <div class="container mx-auto lg:p-4 py-4">
        <CommentsList>
          <CommentsItem v-for="(comment, key) of state.comments"
                        :key="key"
                        :modelValue="comment"
                        :minimized="false"
          >
            <CommentsList>
              <CommentsItem v-for="(reply, replyKey) of comment.replies"
                            :key="replyKey"
                            :modelValue="reply"
                            :minimized="false"
              />
            </CommentsList>
          </CommentsItem>
        </CommentsList>
      </div>
    </Scroll>
  </UIPage>
</template>

<script>
import CommentsList from "@/components/CommentsList";
import CommentsItem from "@/components/CommentsItem";
import {reactive} from "vue";
import Scroll from "@/components/Scroll";
import UIPage from "@/components/UI/UIPage";
export default {
  name: "Post",
  components: {UIPage, Scroll, CommentsItem, CommentsList},
  setup () {
    const comments = [
      {
        id: 1,
        avatar: 'https://www.kindpng.com/picc/m/41-414998_shoulder-human-behavior-head-user-profile-avatar-icon.png',
        name: 'kopyto',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, enim rutrum ultrices malesuada, orci nulla commodo lorem, vel luctus neque ante quis purus. Curabitur laoreet dapibus erat, in mattis justo lacinia sit amet. Donec iaculis quam felis, vel feugiat dui imperdiet porta. Mauris lectus purus, egestas sagittis massa vel, euismod vestibulum leo.',
        replies: [
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
        id: 2,
        avatar: 'https://www.kindpng.com/picc/m/41-414998_shoulder-human-behavior-head-user-profile-avatar-icon.png',
        name: 'kopyto',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, enim rutrum ultrices malesuada, orci nulla commodo lorem, vel luctus neque ante quis purus. Curabitur laoreet dapibus erat, in mattis justo lacinia sit amet. Donec iaculis quam felis, vel feugiat dui imperdiet porta. Mauris lectus purus, egestas sagittis massa vel, euismod vestibulum leo.',
      },
    ]
    let offset = 10


    const state = reactive(
        {
          comments: comments.filter((comment, key) => key < offset)
        }
    )
    const scrollCallback = () => {
      offset+=10
      state.comments = comments.filter((comment, key) => key < offset)
    }
    return {scrollCallback, state}
  }
}
</script>

<style scoped>

</style>
