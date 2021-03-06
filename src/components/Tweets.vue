<template>
  <div class="main-content">
    <div
      class="following-content"
      v-for="tweet in initialTweet"
      :key="tweet.id"
    >
      <div class="following-list">
        <router-link :to="{ name: 'other', params: { id: tweet.UserId } }">
          <img
            :src="tweet.TweetAuthor.avatar"
            alt="avatar on screen"
            class="following-list__avatar"
          />
        </router-link>
        <div class="following-item">
          <div class="following-header">
            <span class="following-header__name">{{
              tweet.TweetAuthor.name
            }}</span>
            <span class="following-header__account"
              >@{{ tweet.TweetAuthor.account }}</span
            >
            <span class="following-header__icon">&#8226;</span>
            <span class="following-header__date">{{
              tweet.createdAt | fromNow
            }}</span>
          </div>
          <div class="following-item__content">
            <router-link
              class="following-item__description"
              :to="{ name: 'reply-list', params: { id: tweet.id } }"
            >
              {{ tweet.description }}
            </router-link>
            <div class="following-icons">
              <div class="icons">
                <router-link
                  class="icons__comment"
                  :to="{ name: 'reply-list', params: { id: tweet.id } }"
                >
                  <i class="fa-regular fa-comment"></i>
                </router-link>
                <span class="icons__reply-count">{{ tweet.replyCount }}</span>
              </div>
              <div class="icons_heart">
                <div>
                  <li
                    class="like_btn"
                    v-show="tweet.isLiked === true"
                    @click="unlikeTweet(tweet.id)"
                  >
                    <i class="icon fa-solid fa-heart"></i>
                  </li>
                </div>
                <div>
                  <li
                    class="unlike_btn"
                    v-show="tweet.isLiked === false"
                    @click="likeTweet(tweet.id)"
                  >
                    <i class="icon fa-regular fa-heart"></i>
                  </li>
                </div>
                <span class="icons__like-count">{{ tweet.likeCount }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import store from "./../store";
import tweetsAPI from "./../apis/tweets";
import { fromNowFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";

export default {
  name: "Tweets",
  mixins: [fromNowFilter],
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
    async likeTweet(id) {
      try {
        const { data } = await tweetsAPI.likeTweets(id);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: data.message,
        });

        this.$emit("update-tweet");
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: error.message,
        });
      }
    },
    async unlikeTweet(id) {
      try {
        const { data } = await tweetsAPI.unLikeTweets(id);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: data.message,
        });

        this.$emit("update-tweet");
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
.main-content {
  border-left: 1px solid $dividerColor;
  border-right: 1px solid $dividerColor;
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
    padding: 10px 0px 10px 15px;
    display: flex;
    align-items: flex-start;
    &__avatar {
      height: 50px;
      width: 50px;
      object-fit: cover;
      border-radius: 50px;
      margin-top: 5px;
      margin-right: 10px;
    }
    .following-item {
      margin-right: 10px;
      .following-header {
        display: flex;
        &__name {
          @include longText;
          max-width: 40%;
          margin-right: 5px;
          font-weight: 700;
          font-size: 15px;
          color: $black;
        }
        &__account,
        &__date {
          font-size: 15px;
          color: $mid-gray;
        }
      }

      &__description {
        font-size: 15px;
        color: $black;
      }
      &__content {
        width: 100%;
        padding-right: 15px;
        overflow-wrap: anywhere;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      &__description {
        min-height: 50px;
        margin-top: 5px;
        display: flex;
      }
    }
  }
}
.following-icons {
  font-size: 13px;
  color: $mid-gray;
  width: 130px;
  padding-left: 2px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  .icons {
    margin-right: 10px;
    cursor: pointer;
    &__comment {
      margin-right: 10px;
      color: $mid-gray;
    }
    &__like-count {
      margin-left: 10px;
    }
  }
}
.icons_heart {
  display: flex;
  margin-right: 10px;
  cursor: pointer;
  .like_btn {
    color: #f91880;
  }
}
</style>
