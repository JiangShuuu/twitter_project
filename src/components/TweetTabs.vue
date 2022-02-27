<template>
  <section class="tweet_tabs">
    <template v-if="isUsers">
      <router-link
        :to="{ name: 'self', params: { id: currentUser.id } }"
        :class="['tweet_tabs_btn', { active: this.$route.name === 'self' }]"
        >推文</router-link
      >
      <router-link
        :to="{ name: 'reply', params: { id: currentUser.id } }"
        :class="['tweet_tabs_btn', { active: this.$route.name === 'reply' }]"
        >推文與回覆</router-link
      >
      <router-link
        :to="{ name: 'like', params: { id: currentUser.id } }"
        :class="['tweet_tabs_btn', { active: this.$route.name === 'like' }]"
      >
        喜歡的內容
      </router-link>
    </template>
    <template v-else>
      <router-link
        :to="{ name: 'other-self' }"
        :class="[
          'tweet_tabs_btn',
          { active: this.$route.name === 'other-self' },
        ]"
        >推文</router-link
      >
      <router-link
        :to="{ name: 'other-reply' }"
        :class="[
          'tweet_tabs_btn',
          { active: this.$route.name === 'other-reply' },
        ]"
        >推文與回覆</router-link
      >
      <router-link
        :to="{ name: 'other-like' }"
        :class="[
          'tweet_tabs_btn',
          { active: this.$route.name === 'other-like' },
        ]"
      >
        喜歡的內容
      </router-link>
    </template>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "tweetTabs",
  computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
      isUsers: true,
    };
  },
  mounted() {
    this.confirmRouter();
  },
  methods: {
    confirmRouter() {
      this.$route.path.includes("other")
        ? (this.isUsers = false)
        : (this.isUsers = true);
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
