<template>
  <main class="main">
    <div class="wrapper">
      <NavBar />
      <div class="follows-content">
        <FollowsTabs />
        <router-view />
      </div>
      <Popular />
    </div>
  </main>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Popular from "../components/Popular.vue";
import FollowsTabs from "../components/FollowsTabs.vue";

export default {
  name: "Followers",
  components: {
    NavBar,
    Popular,
    FollowsTabs,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.main {
  max-width: 1440px;
  max-height: 1200px;
  margin: 0 auto;
  .wrapper {
    /* 使用grid區分三份 */
    display: grid;
    grid-template-columns: 378px 600px 462px;
    grid-auto-rows: 1200px;
  }
}
</style>