<template>
  <section class="tweets_like_list">
    <div class="tweets">
      <div class="tweet" v-for="like in likes" :key="like.id">
        <router-link
          :to="{ name: 'other', params: { id: like.LikedTweet.UserId } }"
          class="tweet_avatar"
        >
          <div class="tweet_avatar_img">
            <img :src="like.LikedTweet.TweetAuthor.avatar" alt="" />
          </div>
        </router-link>
        <div class="tweet_info">
          <div>
            <router-link
              :to="{ name: 'other', params: { id: like.LikedTweet.UserId } }"
              class="tweet_info_title"
            >
              <div class="tweet_info_title_name">
                {{ like.LikedTweet.TweetAuthor.name }}
              </div>
              <div class="tweet_info_title_account">
                @{{ like.LikedTweet.TweetAuthor.account }}
              </div>
              <div class="tweet_info_title_dot">‧</div>
              <div class="tweet_info_title_date">
                {{ like.LikedTweet.createdAt | fromNow }}
              </div>
            </router-link>
            <div class="tweet_info_content">
              <router-link
                :to="{ name: 'reply-list', params: { id: like.TweetId } }"
                class="tweet_info_content_text"
              >
                {{ like.LikedTweet.description }}
              </router-link>
            </div>
          </div>
          <div class="tweet_info_icon">
            <router-link
              :to="{ name: 'reply-list', params: { id: like.TweetId } }"
              class="tweet_info_icon_reply"
            >
              <li class="commemt_btn">
                <img src="../assets/image/comment.png" alt="" />
              </li>
              <span class="num">{{ like.LikedTweet.replyCount }}</span>
            </router-link>

            <!-- 會造成連點錯誤，先用once -->
            <ul
              class="tweet_info_icon_like"
              @click.once="unlikeTweet(like.TweetId)"
            >
              <li class="like_btn">
                <i class="fa-solid fa-heart"></i>
              </li>
              <span class="num">{{ like.LikedTweet.likeCount }}</span>
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
import tweetAPI from "./../apis/tweets.js";

export default {
  name: "UserTweetList",
  mixins: [fromNowFilter],
  data() {
    return {
      likes: {},
    };
  },
  mounted() {
    this.fetchUserLikes();
  },
  methods: {
    async fetchUserLikes() {
      try {
        const pramsId = this.$route.params.id;
        const response = await userAPI.getUserLikes(pramsId);
        const { data } = response;

        if (data.status === "error") {
          throw new Error(data.message);
        }

        // 篩掉當前使用者自己的貼文
        this.likes = data.filter((item) => {
          return item.LikedTweet.UserId !== pramsId;
        });

        await this.movefunction(100);
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
            new BetterScroll(".tweets_like_list", {
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
    async unlikeTweet(id) {
      console.log(id);
      try {
        const { data } = await tweetAPI.unLikeTweets(id);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: data.message,
        });
        this.fetchUserLikes();
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
.tweets_like_list {
  width: 100%;
  height: 55%;
  overflow: hidden;
}

.tweet {
  border: 1px solid $light-gray;
  min-height: 145px;
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
      all: unset;
      @include flexCenter;
      justify-content: flex-start;
      cursor: pointer;
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
        cursor: pointer;
        img {
          width: 20px;
          height: 18px;
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
