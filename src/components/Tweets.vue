<template>
  <div class="main-content">
    <div class="contents">
      <div class="contents_scroll">
        <div v-for="tweet in tweets" :key="tweet.id" class="following-content">
          <div class="following-list">
            <img
              :src="tweet.TweetAuthor.avatar"
              alt="avatar on screen"
              class="following-list__avatar"
            />
            <div class="following-item">
              <span class="following-item__name">{{
                tweet.TweetAuthor.name
              }}</span>
              <span class="following-item__account"
                >@{{ tweet.TweetAuthor.account }}</span
              >
              <span class="following-item__icon">&#8226;</span>
              <span class="following-item__date">{{ tweet.createdAt }}</span>
              <p class="following-item__description">
                {{ tweet.description }}
              </p>
              <div class="following-icons">
                <div class="icons">
                  <i
                    class="fa-regular fa-comment"
                    data-bs-toggle="modal"
                    data-bs-target="#createReplyModal"
                  ></i>
                  <span class="icons__reply-count">13</span>
                </div>
                <div class="icons_heart">
                  <div v-if="tweet.isLiked" @click="isLiked = !isLiked">
                    <li>
                      <i class="icon fa-solid fa-heart"></i>
                    </li>
                  </div>
                  <div v-else @click="isLiked = !isLiked">
                    <li>
                      <i class="icon fa-regular fa-heart"></i>
                    </li>
                  </div>
                  <span class="icons__like-count">76</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- model -->
    <CreateTweets :initial-user="user" />
    <ReplyModal :initial-user="user" />
  </div>
</template>
<script>
import CreateTweets from "../components/CreateTweet.vue";
import ReplyModal from "../components/ReplyModal.vue";
import BetterScroll from "better-scroll";
import store from "./../store";
import tweetsAPI from "./../apis/tweets";
import { Toast } from "./../utils/helpers";

export default {
  name: "Tweets",
  components: {
    CreateTweets,
    ReplyModal,
  },
  data() {
    return {
      currentUser: {
        id: "",
        avatar: "",
        name: "",
      },
      user: {
        avatar: "https://randomuser.me/api/portraits/men/93.jpg",
      },
      isLiked: false,
      tweets: [],
    };
  },
  mounted() {
    this.movefunction();
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
    addLiked() {
      this.isLiked = true;
      console.log("add");
    },
    deleteLiked() {
      this.isLiked = false;
      console.log("delete");
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
