<template>
  <section class="tweets_reply_list">
    <div class="tweets">
      <div class="tweet" v-for="reply in replyTweets" :key="reply.id">
        <div class="tweet_avatar">
          <div class="tweet_avatar_img">
            <img :src="reply.ReplyAuthor.avatar" alt="" />
          </div>
        </div>
        <div class="tweet_info">
          <div class="tweet_info_title">
            <div class="tweet_info_title_name">
              {{ reply.ReplyAuthor.name }}
            </div>
            <div class="tweet_info_title_account">
              @{{ reply.ReplyAuthor.account }}
            </div>
            <div class="tweet_info_title_dot">‧</div>
            <div class="tweet_info_title_date">
              {{ reply.createdAt | fromNow }}
            </div>
          </div>
          <div class="tweet_info_reply">
            <span class="tweet_info_reply_test">回覆</span>
            <router-link
              :to="{
                name: 'other',
                params: { id: reply.TargetTweet.UserId },
              }"
              class="tweet_info_reply_account"
              >@{{ reply.TargetTweet.TweetAuthor.account }}</router-link
            >
          </div>
          <div class="tweet_info_content">
            <router-link
              :to="{ name: 'reply-list', params: { id: reply.TweetId } }"
              class="tweet_info_content_text"
            >
              {{ reply.TargetTweet.description }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BetterScroll from "better-scroll";
import { fromNowFilter } from "./../utils/mixins";
import userAPI from "./../apis/users.js";
import { Toast } from "./../utils/helpers";

export default {
  name: "TweetReplyList",
  mixins: [fromNowFilter],
  data() {
    return {
      replyTweets: {},
    };
  },
  mounted() {
    this.fetchReplyTweets();
  },
  methods: {
    async fetchReplyTweets() {
      try {
        const pramsId = this.$route.params.id;
        const { data } = await userAPI.getUserReply(pramsId);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.replyTweets = data;
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
            new BetterScroll(".tweets_reply_list", {
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

.tweets_reply_list {
  width: 100%;
  height: 55%;
  overflow: hidden;
}

.tweet {
  border: 1px solid $light-gray;
  height: 135px;
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

    &_title {
      @include flexCenter;
      justify-content: flex-start;
      cursor: default;
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
    &_reply {
      font-size: 15px;
      &_test {
        color: $mid-gray;
        margin-right: 2px;
        cursor: default;
      }
      &_account {
        color: $orange;
        cursor: pointer;
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
