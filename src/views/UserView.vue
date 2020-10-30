<template>
  <div class="user-view" v-if="correctRoute">
    <User :userData="currentUser" />
  </div>
  <PageNotFound v-else />
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import style from "@/assets/style/UserView.css";
import User from "@/components/User.vue";
import PageNotFound from "@/components/PageNotFound.vue";

export default {
  name: "UserView",
  async created() {
    if (this.users.length === 0) {
      await this.fetchData();
    }
    this.chooseCurrentUser(this.$route.params.id);
  },
  components: {
    User,
    PageNotFound,
  },
  computed: {
    ...mapGetters(["users", "currentUser"]),
    correctRoute() {
      if (this.users.find((user) => user.id == this.$route.params.id)) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["chooseCurrentUser"]),
  },
};
</script>

<style></style>
