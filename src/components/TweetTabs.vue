<template>
  <section class="tweet_tabs">
    <template v-if="isUsers">
      <router-link
        to="/users/self"
        :class="['tweet_tabs_btn', { active: this.router === 'self' }]"
        >推文</router-link
      >
      <router-link
        to="/users/reply"
        :class="['tweet_tabs_btn', { active: this.router === 'reply' }]"
        >推文與回覆</router-link
      >
      <router-link
        to="/users/like"
        :class="['tweet_tabs_btn', { active: this.router === 'like' }]"
      >
        喜歡的內容
      </router-link>
    </template>
    <template v-else>
      <router-link
        :to="{ name: 'other-self' }"
        :class="['tweet_tabs_btn', { active: this.router === 'other-self' }]"
        >推文</router-link
      >
      <router-link
        :to="{ name: 'other-reply' }"
        :class="['tweet_tabs_btn', { active: this.router === 'other-reply' }]"
        >推文與回覆</router-link
      >
      <router-link
        :to="{ name: 'other-like' }"
        :class="['tweet_tabs_btn', { active: this.router === 'other-like' }]"
      >
        喜歡的內容
      </router-link>
    </template>
  </section>
</template>

<script>
export default {
  name: "tweetTabs",
  data() {
    return {
      router: "",
      isUsers: true,
    };
  },
  watch: {
    $route(to) {
      this.router = to.name;
    },
  },
  mounted() {
    this.router = this.$route.name;
    this.confirmRouter();
  },
  methods: {
    confirmRouter() {
      if (this.router.includes("other")) {
        this.isUsers = false;
      } else if (this.router.includes("users")) {
        this.isUsers = true;
      }
    },
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
