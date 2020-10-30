<template>
  <div class="user">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ userData.username }}</h5>
            <p class="card-text">Name - {{ userData.name }} </p>
            <p class="card-text">Company - {{ userData.company.name }}</p>
            <p class="card-text">Website - {{ userData.website }}</p>
            <p class="card-text">
              <small class="text-muted">{{ userData.phone }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Location :geo="userData.address.geo" />
  </div>
</template>

<script>
import style from "@/assets/style/User.css";
import Location from "@/components/Location.vue";

export default {
  name: "User",
  components: {
    Location,
  },
  props: {
    userData: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style></style>
