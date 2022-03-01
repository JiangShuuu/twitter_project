<template>
  <section class="users">
    <div class="users_main">
      <NavBar />
      <div class="users_content">
        <UserCard />
        <TweetTabs />
        <router-view />
      </div>
      <Popular :initial-popular="popularUpdate" />
    </div>
    <CreateTweets />
  </section>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Popular from "../components/Popular.vue";
import UserCard from "../components/UserCard.vue";
import TweetTabs from "../components/TweetTabs.vue";
import CreateTweets from "../components/CreateTweet.vue";
export default {
  name: "Users",
  components: {
    UserCard,
    TweetTabs,
    NavBar,
    Popular,
    CreateTweets,
  },
  mounted() {
    this.fetchUserInfo();
  },
  data() {
    return {
      popularUpdate: false,
    };
  },
  methods: {
    async fetchUserInfo() {
      const pramsId = this.$route.params.id;
      await this.$store.dispatch("fetchUserInfo", { payload: pramsId });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.users {
  max-width: 1440px;
  max-height: 1200px;
  margin: 0 auto;
  &_main {
    /* 使用grid區分三份 */
    display: grid;
    grid-template-columns: 378px 600px 350px;
    grid-auto-rows: 1200px;
  }
  &_content {
    border: 1px solid $light-gray;
    width: 600px;
  }
}
</style>
