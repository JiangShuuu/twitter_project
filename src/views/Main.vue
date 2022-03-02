<template>
  <main class="main">
    <div class="wrapper">
      <NavBar />
      <div class="tweets_content">
        <MainCard @modal-create-tweet="afterCreateTweet" />
        <div class="contents">
          <div div class="contents_scroll">
            <Tweets :initialTweet="tweets" @update-tweet="afterCreateTweet" />
          </div>
        </div>
      </div>
      <Popular :initial-popular="popularUpdate" />
    </div>
    <CreateTweets @modal-create-tweet="afterCreateTweet" />
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
    CreateTweets,
  },
  data() {
    return {
      currentUser: {
        id: "",
        avatar: "",
        name: "",
      },
      tweets: [],
      popularUpdate: false,
    };
  },
  mounted() {
    this.fetchUserInfo();
    this.fetchTweets();
  },
  methods: {
    fetchUserInfo() {
      const { account, avatar, id } = store.state.currentUser;
      this.currentUser = { account, avatar, id };
    },
    async fetchTweets() {
      try {
        const { data } = await tweetsAPI.getTweets();
        this.tweets = data;
        // 數據更新後，通知組件

        // callback在第二次呼叫後會失效，故先用promise叫套件
        // await callback();

        await this.movefunction(100);
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: "無法取得推文，請稍後再試",
        });
      }
    },
    movefunction(s) {
      return new Promise(function (resolve) {
        setTimeout(() => {
          resolve(
            new BetterScroll(".contents", {
              mouseWheel: true, //開啟滑鼠滾動
              disableMouse: false, //關閉滑鼠拖動
              disableTouch: false, //關閉手指觸摸
              scrollX: true, //X軸滾動開啟
              click: true,
            })
          );
        }, s);
      });
    },
    afterCreateTweet() {
      // console.log(payload);
      // 作法1. 把輸入的資料先加進tweets陣列，先不重新fetchTweets。
      //    但資料要包含完整資訊，不能只有description，並且要加在Array最前
      // const description = payload;
      // this.tweets.push({
      //   description,
      // });

      // 作法2. 直接重新fetchAPI
      this.fetchTweets();
    },
    // ----
    // 因為你原本的$emit叫 after-create-tweet

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
  height: 85%;
  overflow: hidden;
}
</style>
