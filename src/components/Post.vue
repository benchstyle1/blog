<template>
  <div class="post">
    <div class="card text-center">
      <div class="card-header">
       <router-link :to="'/post/' + postData.id">{{postData.title}}</router-link> 
      </div>
      <div class="card-body">
        <p class="card-text">
          {{postData.body}}
        </p>
      </div>
      <div class="card-footer text-muted">
        <router-link :to="'/user/' + postData.userId">{{postData.username}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import style from "@/assets/style/Post.css";
export default {
  name: "Post",
  props: {
    postData: {
      type: Object,
    },
  },
};
</script>
