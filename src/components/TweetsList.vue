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
                {{ userProfile.name }}
              </div>
              <div class="tweet_info_title_account">
                @{{ userProfile.account }}
              </div>
              <div class="tweet_info_title_dot">‧</div>
              <div class="tweet_info_title_date">
                {{ tweet.createdAt | fromNow }}
              </div>
            </div>
            <div class="tweet_info_content">
              <router-link
                :to="{ name: 'reply-list', params: { id: tweet.id } }"
                class="tweet_info_content_text"
                >{{ tweet.description }}</router-link
              >
            </div>
          </div>
          <div class="tweet_info_icon">
            <router-link
              :to="{ name: 'reply-list', params: { id: tweet.id } }"
              class="tweet_info_icon_reply"
            >
              <li class="commemt_btn">
                <img src="../assets/image/comment.png" alt="" />
              </li>
              <span class="num">{{ tweet.replyCount }}</span>
            </router-link>

            <ul class="tweet_info_icon_like">
              <li
                class="unlike_btn"
                v-show="tweet.isLiked === false"
                @click="likeTweet(tweet.id)"
              >
                <i class="fa-regular fa-heart"></i>
              </li>
              <li
                class="like_btn"
                v-show="tweet.isLiked === true"
                @click="unlikeTweet(tweet.id)"
              >
                <i class="fa-solid fa-heart"></i>
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
import tweetAPI from "./../apis/tweets.js";
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
    this.movefunction(1000);
  },
  methods: {
    async fetchUserTweets() {
      try {
        const pramsId = this.$route.params.id;
        const { data } = await userAPI.getUserTweet(pramsId);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.tweets = data;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: error.message,
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
    async likeTweet(id) {
      try {
        const { data } = await tweetAPI.likeTweets(id);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: data.message,
        });

        this.fetchUserTweets();
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: error.message,
        });
      }
    },
    async unlikeTweet(id) {
      try {
        const { data } = await tweetAPI.unLikeTweets(id);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: data.message,
        });

        this.fetchUserTweets();
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
.tweets_list {
  width: 100%;
  height: 55%;
  overflow: hidden;
}

.tweet {
  border: 1px solid $light-gray;
  min-height: 150px;
  display: flex;
  &_avatar {
    min-width: 80px;
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
      cursor: default;
      &_name {
        font-size: 15px;
        font-weight: 700;
        margin-right: 5px;
        @include longText;
        max-width: 40%;
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
        cursor: pointer;
        .unlike_btn {
          margin-bottom: -2px;
        }
        .like_btn {
          margin-bottom: -2px;
          color: #f91880;
        }
      }
      .num {
        margin-left: 11px;
        font-size: 13px;
      }
    }
    &_content {
      width: 100%;
      padding-right: 15px;
      overflow-wrap: anywhere;
      &_text {
        all: unset;
        cursor: pointer;
      }
    }
  }
}
</style>
