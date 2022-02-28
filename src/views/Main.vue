<template>
  <main class="main">
    <div class="wrapper">
      <NavBar />
      <div class="tweets_content">
        <MainCard 
        @after-create-tweet="afterCreateTweet"
        />
        <div class="contents">
          <div div class="contents_scroll">
            <Tweets
            :initialTweet="tweets"
            />
          </div>
        </div>
      </div>
      <Popular />
    </div>
     <CreateTweets 
      :currentUser="currentUser"
      />
  </main>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import Popular from "../components/Popular.vue";
import Tweets from "../components/Tweets.vue";
import MainCard from "../components/MainTitle.vue";
import CreateTweets from "../components/CreateTweet.vue";
import tweetsAPI from "./../apis/tweets";
import { Toast } from "./../utils/helpers";
import BetterScroll from "better-scroll";
import store from "./../store";

export default {
  name: "Main",
  components: {
    NavBar,
    Popular,
    Tweets,
    MainCard,
    CreateTweets
  },
  data() {
    return {
      currentUser: {
        id: "",
        avatar: "",
        name: "",
      },
      tweets: [],
    };
  },
  mounted() {
    this.fetchUserInfo();
    this.fetchTweets(()=>{
      this.$nextTick(()=>{
        this.movefunction()
      })
    });
  },
  methods: {
    fetchUserInfo() {
      const { account, avatar,  id } = store.state.currentUser;
      this.currentUser = { account,avatar, id };
    },
    async fetchTweets(callback) {
      try {
        const { data } = await tweetsAPI.getTweets();
        this.tweets = data;
        // 數據更新後，通知組件
        callback()
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: "無法取得推文，請稍後再試",
        });
      }
    },
    movefunction() {
      new BetterScroll(".contents", {
        mouseWheel: true, //開啟滑鼠滾動
        disableMouse: false, //關閉滑鼠拖動
        disableTouch: false, //關閉手指觸摸
        scrollX: true, //X軸滾動開啟
        click: true,
      });
    },
    afterCreateTweet(payload) {
      const description  = payload;
      this.tweets.push({
        description,
      })
      this.fetchTweets()
    },
    // 不知道為什麼modal吃不到submit的資料
    // modalCreateTweet(payload) {
    //   const description  = payload;
    //   this.tweets.push({
    //     description,
    //   })
    //   this.fetchTweets()
    // }
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
.contents {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
