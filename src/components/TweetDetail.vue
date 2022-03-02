<template>
  <div class="main-content">
    <div class="tweets-header">
      <div class="tweets-return" @click="$router.back()">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <h2 class="tweets-title">推文</h2>
    </div>
    <div class="following-content">
      <div class="following-list">
        <img
          :src="tweetDetail.TweetAuthor.avatar"
          alt="avatar on screen"
          class="following-list__avatar"
        />
        <!-- </router-link> -->
        <div class="following-title">
          <span class="following-title__name">{{
            tweetDetail.TweetAuthor.account
          }}</span>
          <span class="following-title__account"
            >@{{ tweetDetail.TweetAuthor.name }}</span
          >
        </div>
      </div>
      <div class="following-item">
        <div class="following-item__content">
          <p class="following-item__description">
            {{ tweetDetail.description }}
          </p>
        </div>
        <span class="following-item__time">{{
          tweetDetail.createdAt | fromTime
        }}</span>
        <span class="following-item__icon">&#8226;</span>
        <span class="following-item__date">{{
          tweetDetail.createdAt | fromDay
        }}</span>
      </div>
    </div>
    <div class="comments">
      <div class="comments-list">
        <span class="comments-list__num">{{ tweetDetail.replyCount }}</span>
        <span class="comments-list__title">回覆</span>
      </div>
      <div class="likes">
        <span class="likes__num">{{ tweetDetail.likeCount }}</span>
        <span class="like__title">喜歡次數</span>
      </div>
    </div>
    <div class="reply-icon">
      <i
        class="reply-icon__comment fa-regular fa-comment"
        data-bs-toggle="modal"
        data-bs-target="#createReplyModal"
      ></i>
      <div>
        <li
          class="unlike_btn"
          v-show="tweetDetail.isLiked === false"
          @click="likeTweet(tweetDetail.id)"
        >
          <i class="reply-icon__heart fa-regular fa-heart"></i>
        </li>
      </div>
      <div>
        <li
          class="like_btn"
          v-show="tweetDetail.isLiked === true"
          @click="unlikeTweet(tweetDetail.id)"
        >
          <i class="icon fa-solid fa-heart"></i>
        </li>
      </div>
    </div>
    <div div class="contents_scroll">
      <div class="reply">
        <div v-for="reply in replies" :key="reply.id" class="reply-list">
          <img
            :src="reply.ReplyAuthor.avatar"
            alt="avatar on screen"
            class="reply-list__avatar"
          />
          <div class="reply-item">
            <span class="reply-item__name">{{ reply.ReplyAuthor.name }}</span>
            <span class="reply-item__account"
              >@{{ reply.ReplyAuthor.account }}</span
            >
            <span class="reply-item__icon">&#8226;</span>
            <span class="reply-item__date">{{
              reply.ReplyAuthor.updatedAt | fromNow
            }}</span>
            <div class="reply-detail">
              <span class="reply-detail__header">回覆</span>
              <span class="reply-detail__account"
                >@{{ tweetDetail.TweetAuthor.account }}</span
              >
            </div>
            <div class="reply-item__content">
              <p class="reply-item__description">{{ reply.comment }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <ReplyModal
      :initialTweetDetail="tweetDetail"
      @modal-reply-tweet="afterReplyTweet"
    />
  </div>
</template>

<script>
import ReplyModal from "../components/ReplyModal.vue";
import tweetsAPI from "../apis/tweets";
import { fromNowFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import BetterScroll from "better-scroll";

export default {
  name: "TweetDetail",
  mixins: [fromNowFilter],
  components: {
    ReplyModal,
  },
  data() {
    return {
      tweetDetail: {
        TweetAuthor: {
          avatar: "",
        },
      },
      replies: [],
      isLiked: false,
    };
  },
  mounted() {
    this.fetchTweetsDetail();
    this.movefunction(1000);
  },
  methods: {
    async fetchTweetsDetail() {
      try {
        const id = this.$route.params.id;
        const response = await tweetsAPI.getTweetDetail({ id });
        this.tweetDetail = response.data;
        // 反轉排序
        this.replies = response.data.Replies.reverse();
      } catch (error) {
        console.log(error);
      }
    },
    afterReplyTweet() {
      this.fetchTweetsDetail();
    },
    async likeTweet(id) {
      console.log(id);
      try {
        const { data } = await tweetsAPI.likeTweets(id);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: data.message,
        });

        await this.fetchTweetsDetail();
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: error.message,
        });
      }
    },
    async unlikeTweet(id) {
      console.log(id);
      try {
        const { data } = await tweetsAPI.unLikeTweets(id);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: data.message,
        });

        await this.fetchTweetsDetail();
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
            new BetterScroll(".contents_scroll", {
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
/* better-scroll卷軸css */
.contents_scroll {
  width: 100%;
  height: 55%;
  overflow: hidden;
}
.main-content {
  border-left: 1px solid $dividerColor;
  border-right: 1px solid $dividerColor;
  height: 100%;
  .tweets-header {
    padding-left: 15px;
    padding-top: 17px;
    display: flex;
    .tweets-return {
      color: $black;
      cursor: pointer;
    }
    .fa-arrow-left {
      font-size: 18px;
    }
    .tweets-title {
      @include font-w700(18px);
      margin: 0px 0 15px 45px;
    }
  }
}

.following-content {
  border-top: 1px solid $dividerColor;
  padding: 15px 15px 0 15px;
}
.following-list {
  display: flex;
  align-items: center;
  justify-content: left;
  &__avatar {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50px;
  }
  .following-title {
    margin-left: 10px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    &__name {
      font-weight: bold;
      color: $black;
    }
    &__account {
      color: $mid-gray;
    }
  }
}
.following-item {
  &__description {
    font-size: 23px;
    font-weight: bold;
    color: $black;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  &__content {
    width: 100%;
    overflow-wrap: anywhere;
  }
  &__time,
  &__icon,
  &__date {
    font-size: 15px;
    color: $mid-gray;
  }
}

.comments {
  border-top: 1px solid $dividerColor;
  border-bottom: 1px solid $dividerColor;
  margin: 10px 20px;
  display: flex;
  gap: 20px;
  font-size: 19px;
  padding: 21px 0;
  .comments-list__num,
  .likes__num {
    font-weight: bold;
    margin-right: 5px;
  }
  .comments-list__title,
  .like__title {
    color: $mid-gray;
  }
}
.reply-icon {
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid $dividerColor;
  padding: 0 0 9px 22px;
  font-size: 25px;
  color: $mid-gray;
  &__comment {
    margin-right: 150px;
  }
  .like_btn {
    color: #f91880;
  }
}

.reply-list {
  border-bottom: 1px solid $dividerColor;
  padding: 10px 0 15px 15px;
  min-height: 150px;
  display: flex;
  align-items: flex-start;
  &__avatar {
    width: 50px;
    height: 50px;
    /* 有些圖片尺寸太小會造成排版不對，先關掉看看 */
    /* overflow: hidden; */
    border-radius: 50px;
    margin-top: 5px;
    margin-right: 10px;
  }
  .reply-item {
    margin-right: 10px;
    &__content {
      width: 100%;
      overflow-wrap: anywhere;
    }
    &__name {
      margin-right: 5px;
    }
    &__name,
    &__description {
      font-size: 15px;
      color: $black;
      font-weight: 700;
    }
    &__description {
      margin-top: 3px;
      font-weight: 500;
    }
    &__account,
    &__date {
      font-size: 15px;
      color: $mid-gray;
    }
  }
  .reply-detail {
    margin-top: 5px;
    font-size: 15px;
    &__header {
      color: $mid-gray;
      margin-right: 5px;
    }
    &__account {
      color: $orange;
    }
  }
}
</style>
