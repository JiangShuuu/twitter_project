<template>
  <div class="main-content">
    <div
      class="following-content"
      v-for="tweet in initialTweet"
      :key="tweet.id"
    >
      <div class="following-list">
        <img
          :src="tweet.TweetAuthor.avatar"
          alt="avatar on screen"
          class="following-list__avatar"
        />
        <div class="following-item">
          <span class="following-item__name">{{ tweet.TweetAuthor.name }}</span>
          <span class="following-item__account"
            >@{{ tweet.TweetAuthor.account }}</span
          >
          <span class="following-item__icon">&#8226;</span>
          <span class="following-item__date">{{
            tweet.createdAt | fromNow
          }}</span>
          <router-link
            class="following-item__description"
            :to="{ name: 'reply-list', params: { id: tweet.id } }"
          >
            {{ tweet.description }}
          </router-link>
          <div class="following-icons">
            <div class="icons">
              <i
                class="fa-regular fa-comment"
                data-bs-toggle="modal"
                data-bs-target="#createReplyModal"
              ></i>
              <span class="icons__reply-count">{{ tweet.replyCount }}</span>
            </div>
            <div class="icons_heart">
              <div v-if="tweet.isLiked" @click="unLiked()">
                <li>
                  <i class="icon fa-solid fa-heart"></i>
                </li>
              </div>
              <div v-else @click="addLiked()">
                <li>
                  <i class="icon fa-regular fa-heart"></i>
                </li>
              </div>
              <span class="icons__like-count">{{ tweet.likeCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ReplyModal />
  </div>
</template>

<script>
// import store from "./../store";
import tweetsAPI from "./../apis/tweets";
import ReplyModal from "./../components/ReplyModal.vue";
import { fromNowFilter } from "./../utils/mixins";

export default {
  name: "Tweets",
  mixins: [fromNowFilter],
  components: {
    ReplyModal,
  },
  props: {
    initialTweet: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tweet: this.initialTweet,
      isLiked: false,
    };
  },
  methods: {
    // fetchUserInfo() {
    //   const { account, avatar, id } = store.state.currentUser;
    //   this.currentUser = { account, avatar, id };
    // },
    async addLiked() {
      try {
        // console.log("addLiked:", tweetId);
        // const { data } = await tweetsAPI.likeTweets({ tweetId });
        // console.log(data);
        this.isLiked = true;
      } catch (error) {
        console.log(error);
      }
    },
    async unLiked(tweetId) {
      console.log("delike", tweetId);
      const { data } = await tweetsAPI.likeTweets({ tweetId });
      console.log(data);
      this.isLiked = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.main-content {
  border-left: 1px solid $dividerColor;
  border-right: 1px solid $dividerColor;
  height: 85%;
}
.contents {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.following-content {
  border-bottom: 1px solid $dividerColor;
  &:last-child {
    border-bottom: none;
  }
  .following-list {
    padding: 10px 0px 0px 15px;
    height: 146px;
    display: flex;
    align-items: flex-start;
    &__avatar {
      width: 50px;
      border-radius: 50px;
      margin-top: 5px;
      margin-right: 10px;
    }
    .following-item {
      margin-right: 10px;
      &__name,
      &__description {
        font-size: 15px;
        color: $black;
        font-weight: bold;
      }
      &__description {
        height: 65px;
        margin-top: 5px;
        display: flex;
      }
      &__name {
        font-weight: 700;
      }
      &__account,
      &__date {
        font-size: 15px;
        color: $mid-gray;
      }
      .following-icons {
        font-size: 15px;
        color: $mid-gray;
        width: 130px;
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icons {
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
.icons_heart {
  display: flex;
  margin-right: 10px;
  cursor: pointer;
}

/* 愛心效果試做

.icons {
  &__heart {
    position: relative;
    color: #aab8c2;
    cursor: pointer;
    &--checkbox {
      position: absolute;
      left: -100vw;
      
    }
    &--checkbox:checked + .icons__heart {
      color: #e2264d;
    }
  }
} */
</style>
