<template>
  <div class="home-view">
    <PostsList :username="Username"/>
    <input
      type="text"
      class="form-control"
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
      v-model="Username"
    />
  </div>
</template>

<script>
import style from "@/assets/style/HomeView.css";
import { mapActions, mapGetters, mapMutations } from "vuex";
import PostsList from "@/components/PostsList.vue";

export default {
  name: "HomeView",
  components: {
    PostsList,
  },
  data() {
    return {
      Username: "",
    };
  },
  created() {
    if (this.posts.length === 0) {
      this.fetchData();
    }
  },
  computed: {
    ...mapGetters(["posts"]),
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["filterPosts"]),
  },
};
</script>
