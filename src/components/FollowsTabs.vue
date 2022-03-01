<template>
  <section class="follows-tabs">
    <div class="user_title">
      <router-link :to="{ name: 'users', params: { id: currentUser.id } }" class="user_title_return">
        <i class="fa-solid fa-arrow-left"></i>
      </router-link>
      <div class="user_title_area">
        <span class="user_name">{{ currentUser.name }}</span>
        <span class="user_tweet">{{ currentUser.tweetCount }}推文</span>
      </div>
    </div>
    <div class="tabs">
      <router-link
        :to="{ name: 'follows', params: { id: currentUser.id } }"
        :class="['tabs__btn', { active: this.$route.name === 'follows' }]"
        >跟隨者</router-link
      >
      <router-link
        :to="{ name: 'following', params: { id: currentUser.id } }"
        :class="['tabs__btn', { active: this.$route.name === 'following' }]"
        >正在跟隨</router-link
      >
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FollowsTabs",
    computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.follows-tabs {
  border-left: 1px solid $dividerColor;
  border-right: 1px solid $dividerColor;
}
.user {
  width: 100%;
  &_title {
    @include flexCenter;
    justify-content: flex-start;
    height: 55px;
    &_return {
      font-size: 19px;
      color: black;
      margin: 0 43px 0 18px;
      cursor: pointer;
    }
    &_area {
      display: flex;
      flex-direction: column;
      .user_name {
        font-size: 19px;
        font-weight: 900;
      }
      .user_tweet {
        font-size: 13px;
        font-weight: 500;
        color: $mid-gray;
      }
    }
  }
}
.tabs {
  display: flex;
  &__btn {
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
