<template>
  <section class="tweet_tabs">
    <router-link
      to="/users/self"
      :class="['tweet_tabs_btn', { active: this.router === '/users/self' }]"
      >推文</router-link
    >
    <router-link
      to="/users/reply"
      :class="['tweet_tabs_btn', { active: this.router === '/users/reply' }]"
      >推文與回覆</router-link
    >
    <router-link
      to="/users/like"
      :class="['tweet_tabs_btn', { active: this.router === '/users/like' }]"
    >
      喜歡的內容
    </router-link>
  </section>
</template>

<script>
export default {
  name: "tweetTabs",
  data() {
    return {
      router: "",
    };
  },
  watch: {
    $route(to) {
      this.router = to.path;
    },
  },
  mounted() {
    this.router = this.$route.path;
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.tweet_tabs {
  display: flex;
  &_btn {
    font-size: 15px;
    font-weight: 700;
    color: $mid-gray;
    width: 130px;
    height: 50px;
    @include flexCenter;
    cursor: pointer;
  }
  .active {
    color: $orange;
    border-bottom: 2px solid $orange;
  }
}
</style>
