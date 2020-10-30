<template>
  <div class="post-view" v-if="correctRoute">
    <Post :postData="currentPost" />
    <Comment
      v-for="comment in currentPost.comments"
      :key="comment.id"
      :commentData="comment"
    />
  </div>
  <PageNotFound v-else/>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import Post from "@/components/Post.vue";
import Comment from "@/components/Comment.vue";
import PageNotFound from "@/components/PageNotFound.vue";

export default {
  name: "PostView",
  async created() {
    if (this.posts.length === 0) {
      await this.fetchData();
    }
    await this.fetchComments(this.$route.params.id);
    this.chooseCurrentPost(this.$route.params.id);
  },
  components: {
    Post,
    Comment,
    PageNotFound,
  },
  computed: {
    ...mapGetters(["posts", "currentPost"]),
    correctRoute() {
      if (this.posts.find(post => post.id == this.$route.params.id)) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    ...mapActions(["fetchData", "fetchComments"]),
    ...mapMutations(["chooseCurrentPost"]),
  },
};
</script>

<style></style>
