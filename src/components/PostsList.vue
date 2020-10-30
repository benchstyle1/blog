<template>
  <div class="post-list">
    <Post v-for="post in filtered" :key="post.id" :postData="post" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import style from "@/assets/style/PostsList.css";
import Post from "@/components/Post.vue";

export default {
  name: "PostsList",
  components: {
    Post,
  },
  props: {
    username: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters(["posts"]),
    filtered() {
      if (this.username !== "") {
          return this.posts.filter((post) => post.username.toLowerCase().indexOf(this.username.toLowerCase()) >= 0)
      } else {
        return this.posts
      }
    },
  },
};
</script>

<style></style>
