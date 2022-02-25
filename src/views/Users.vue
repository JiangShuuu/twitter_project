<template>
  <section class="users">
    <div class="users_main">
      <NavBar />
      <div class="users_content">
        <UserCard />
        <TweetTabs />
        <div class="users_content_tweets">
          <router-view />
        </div>
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
import BetterScroll from "better-scroll";

export default {
  name: "Users",
  components: {
    UserCard,
    TweetTabs,
    NavBar,
    Popular,
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料

    setTimeout(() => {
      this.movefunction();
    }, 500);
    next();
  },
  mounted() {
    this.movefunction();
  },
  methods: {
    movefunction() {
      new BetterScroll(".users_content_tweets", {
        mouseWheel: true, //開啟滑鼠滾動
        disableMouse: false, //關閉滑鼠拖動
        disableTouch: false, //關閉手指觸摸
        scrollX: true, //X軸滾動開啟
        click: true,
      });
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
    &_tweets {
      width: 100%;
      height: 55.6%;
      overflow: hidden;
    }
  }
}
</style>
