<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="tweets-header">
      <h2 class="tweets-title">首頁</h2>
      <ValidationProvider
        name="Name"
        rules="max_tweet_length:140|tweet_empty"
        v-slot="{ errors }"
      >
        <div class="tweets-create">
          <img
            :src="currentUser.avatar"
            alt="avatar on screen"
            class="tweets-create__avatar"
          />
          <textarea
            name="mytext"
            rows="6"
            cols="40"
            maxlength="140"
            class="tweets-create__text"
            placeholder="有什麼新鮮事?"
            required
            v-model="description"
          >
          </textarea>
          <span class="error_message">{{ errors[0] }}</span>
          <button class="btn tweets-create__btn">推文</button>
        </div>
      </ValidationProvider>
    </div>
  </form>
</template>

<script>
import store from "./../store";
// import CreateTweets from "../components/CreateTweet.vue";
import tweetsAPI from "./../apis/tweets";
import { Toast } from "./../utils/helpers";

export default {
  name: "mainCard",
  components: {
    // CreateTweets
  },
  data() {
    return {
      currentUser: {
        id: "",
        avatar: "",
        name: "",
      },
      isUsers: true,
      description: "",
    };
  },
  mounted() {
    this.confirmRouter();
    this.fetchUserInfo();
  },
  methods: {
    fetchUserInfo() {
      const { account, avatar, id } = store.state.currentUser;
      this.currentUser = { account, avatar, id };
    },
    confirmRouter() {
      if (this.$route.path.includes("other")) {
        this.isUsers = false;
      } else if (this.$route.name.includes("users")) {
        this.isUsers = true;
      }
    },
    async handleSubmit() {
      try {
        const { data } = await tweetsAPI.createTweets({
          description: this.description,
        });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: data.message,
        });

        this.$emit("modal-create-tweet");
        this.description = ""; // 將表單內的資料清空
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

.tweets-header {
  padding-top: 15px;
  border-left: 1px solid $dividerColor;
  border-right: 1px solid $dividerColor;
  .tweets-title {
    @include font-w700(18px);
    margin: 0px 0 15px 15px;
  }
  .tweets-create {
    position: relative;
    border-top: 1px solid $dividerColor;
    height: 130px;
    display: flex;
    align-items: flex-start;
    padding: 10px 0px 0px 15px;
    border-bottom: 10px solid $dividerColor;
    &__text {
      font-size: 18px;
      width: 75%;
      height: 80%;
      resize: none;
      border: none;
      margin-top: 10px;
      overflow-y: hidden;
      &:focus {
        outline: none;
      }
    }
    &__avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 10px;
    }
    &__btn {
      position: absolute;
      @include btn-selected(66px, 38px);
      text-align: center;
      right: 15px;
      bottom: 10px;
    }
  }
}
.error_message {
  position: absolute;
  bottom: 1rem;
  right: 6rem;
  color: red;
}
</style>
