<template>
  <section class="users">
    <div class="users_main">
      <NavBar />
      <div class="users_content">
        <UserCard :initial-user="user" />
        <!-- model -->
        <UserEdit :initial-user="user" />
        <TweetTabs />
        <router-view />
      </div>
      <Popular />
    </div>
  </section>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Popular from "../components/Popular.vue";
import UserCard from "../components/UserCard.vue";
import TweetTabs from "../components/TweetTabs.vue";
import userAPI from "./../apis/users.js";
import UserEdit from "../components/UserEdit.vue";
import { Toast } from "./../utils/helpers.js";

export default {
  name: "Users",
  components: {
    UserCard,
    TweetTabs,
    NavBar,
    Popular,
    UserEdit,
  },
  data() {
    return {
      user: {
        id: "1",
        account: "",
        name: "John Doe",
        avatar: "",
        cover: "",
        introduction: "",
        followerCount: "",
        followingCount: "",
        tweetCount: "",
      },
    };
  },
  mounted() {
    this.fetchUserInfo();
  },
  methods: {
    async fetchUserInfo() {
      try {
        const pramsId = this.$route.params.id;
        const response = await userAPI.getUserInfo(pramsId);
        const {
          id,
          account,
          name,
          avatar,
          cover,
          introduction,
          followerCount,
          followingCount,
          tweetCount,
        } = response.data;

        this.user = {
          id,
          account,
          name,
          avatar,
          cover,
          introduction,
          followerCount,
          followingCount,
          tweetCount,
        };
      } catch (error) {
        console.error(error.massage);
        Toast.fire({
          icon: "warning",
          title: "無法取得使用者資料,請稍後再試!",
        });
      }
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
    height: 100%;
  }
}
</style>
