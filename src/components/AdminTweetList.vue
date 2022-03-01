<template>
  <section class="admin_tweet_list">
    <div class="tweets">
      <div class="tweet" v-for="tweet in allTweets" :key="tweet.id">
        <div class="tweet_avatar">
          <div class="tweet_avatar_img">
            <img :src="tweet.TweetAuthor.avatar" alt="" />
          </div>
        </div>
        <div class="tweet_info">
          <div class="tweet_info_title">
            <div class="tweet_info_title_name">
              {{ tweet.TweetAuthor.name }}
            </div>
            <div class="tweet_info_title_account">
              @{{ tweet.TweetAuthor.account }}
            </div>
            <div class="tweet_info_title_dot">‧</div>
            <div class="tweet_info_title_date">
              {{ tweet.updatedAt | fromNow }}
            </div>
          </div>
          <div class="tweet_info_content">
            <span class="tweet_info_content_text">
              {{ tweet.description }}
            </span>
          </div>
        </div>
        <!-- 目前點第二次開始會一次執行倍數，故先用.once限制 -->
        <div class="tweet_delete" @click.once="deleteTweet(tweet.id)">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BetterScroll from "better-scroll";
import { fromNowFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import adminAPI from "./../apis/admin.js";

export default {
  name: "adminTweetList",
  mixins: [fromNowFilter],
  data() {
    return {
      allTweets: {},
    };
  },
  mounted() {
    this.fetchAllTweets();
  },
  methods: {
    async fetchAllTweets() {
      try {
        const response = await adminAPI.getTweetList();
        this.allTweets = response.data;
        await this.movefunction(100);
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: "讀取資料失敗,請稍後再試!",
        });
      }
    },
    movefunction(s) {
      return new Promise(function (resolve) {
        setTimeout(() => {
          resolve(
            new BetterScroll(".admin_tweet_list", {
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
    async deleteTweet(id) {
      try {
        const { data } = await adminAPI.deleteTweet(id);
        Toast.fire({
          icon: "success",
          title: data.message,
        });
        this.fetchAllTweets();
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: error.message,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.admin_tweet_list {
  width: 100%;
  height: 95%;
  overflow: hidden;
}

.tweet {
  border: 1px solid $light-gray;
  height: 80px;
  @include flexCenter;
  &_avatar {
    width: 80px;
    @include flexCenter;
    align-items: flex-start;
    &_img {
      width: 50px;
      height: 50px;
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
    &_content {
      &_text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }
  &_delete {
    margin: 19.5px;
    cursor: pointer;
    .fa-xmark {
      color: $mid-gray;
      font-size: 15px;
    }
  }
}
</style>
