<template>
  <section class="tweets_list">
    <div class="tweets">
      <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
        <div class="tweet_avatar">
          <div class="tweet_avatar_img">
            <img :src="userProfile.avatar" alt="" />
          </div>
        </div>
        <div class="tweet_info">
          <div>
            <div class="tweet_info_title">
              <div class="tweet_info_title_name">
                {{ tweet.TweetAuthor.name }}
              </div>
              <div class="tweet_info_title_account">
                @{{ tweet.TweetAuthor.account }}
              </div>
              <div class="tweet_info_title_dot">‧</div>
              <div class="tweet_info_title_date">
                {{ tweet.createdAt | fromNow }}
              </div>
            </div>
            <div class="tweet_info_content">
              {{ tweet.description }}
            </div>
          </div>
          <div class="tweet_info_icon">
            <ul class="tweet_info_icon_reply">
              <li class="commemt_btn">
                <img src="../assets/image/comment.png" alt="" />
              </li>
              <span class="num">{{ tweet.replyCount }}</span>
            </ul>

            <ul class="tweet_info_icon_like">
              <li class="like_btn">
                <img src="../assets/image/heart.png" alt="" />
              </li>
              <span class="num">{{ tweet.likeCount }}</span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BetterScroll from "better-scroll";
import userAPI from "./../apis/users.js";
import { fromNowFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
export default {
  name: "UserTweetList",
  mixins: [fromNowFilter],
  data() {
    return {
      tweets: {},
    };
  },
  computed: {
    ...mapState(["userProfile"]),
  },
  watch: {
    $route() {
      this.fetchUserTweets();
    },
  },
  mounted() {
    this.fetchUserTweets();
  },
  methods: {
    async fetchUserTweets() {
      try {
        const pramsId = this.$route.params.id;
        const response = await userAPI.getUserTweet(pramsId);
        this.tweets = response.data;
        await this.movefunction(100);
      } catch (error) {
        console.error(error);
        Toast.fire({
          icon: "warning",
          title: "讀取tweet列表失敗,請稍後再試!",
        });
      }
    },
    movefunction(s) {
      return new Promise(function (resolve) {
        setTimeout(() => {
          resolve(
            new BetterScroll(".tweets_list", {
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
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.tweets_list {
  width: 100%;
  height: 51%;
  overflow: hidden;
}

.tweet {
  border: 1px solid $light-gray;
  height: 145px;
  display: flex;
  &_avatar {
    width: 80px;
    @include flexCenter;
    align-items: flex-start;
    &_img {
      width: 50px;
      height: 50px;
      margin-top: 13px;
      overflow: hidden;
      border-radius: 50%;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
  &_info {
    flex: 1;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &_title {
      @include flexCenter;
      justify-content: flex-start;
      &_name {
        font-size: 15px;
        font-weight: 700;
        margin-right: 5px;
      }
      &_account {
        font-size: 15px;
        color: $mid-gray;
      }
      &_dot {
        color: $mid-gray;
      }
      &_date {
        font-size: 15px;
        color: $mid-gray;
      }
    }
    &_icon {
      margin-top: 10px;
      display: flex;
      img {
        width: 15px;
        height: 15px;
      }
      &_reply {
        display: flex;
        align-items: flex-end;
        margin-right: 51px;
        color: $mid-gray;
      }
      &_like {
        display: flex;
        align-items: flex-end;
        color: $mid-gray;
      }
      .num {
        margin-left: 11px;
        font-size: 13px;
      }
    }
  }
}
</style>
