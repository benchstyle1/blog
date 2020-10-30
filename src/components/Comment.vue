<template>
  <div class="comment">
    <div class="card">
      <h5 class="card-header">
        Comment #{{ commentData.id }} - {{ commentData.email }}
      </h5>
      <div class="card-body">
        <h5 class="card-title">{{ commentData.name }}</h5>
        <p class="card-text">
          {{ commentData.body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import style from "@/assets/style/Comment.css";

export default {
  name: "Comment",
  props: {
    commentData: {
      type: Object,
    },
  },
};
</script>

<style></style>
