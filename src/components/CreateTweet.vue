<template>
  <form @submit.stop.prevent="handleSubmit">
    <div
      class="modal fade"
      id="createTweetsModal"
      tabindex="-1"
      aria-labelledby="createTweetsModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <li
              class="modal-header_close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="fa-solid fa-xmark"></i>
            </li>
          </div>

          <ValidationProvider
            name="Name"
            rules="max_tweet_length:140|min_tweet_length:0"
            v-slot="{ errors }"
          >
            <div class="modal-tweets">
              <img
                :src="currentUser.avatar"
                alt="avatar on screen"
                class="modal-tweets__avatar"
              />
              <textarea
                name="mytext"
                rows="6"
                cols="40"
                maxlength="140"
                class="modal-tweets__text"
                placeholder="有什麼新鮮事?"
                v-model="description"
                required
              >
              </textarea>
              <span class="error_message">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <button type="submit" class="btn btn-secondary">推文</button>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import tweetsAPI from "./../apis/tweets";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";

export default {
  name: "CreateTweet",
  computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
      description: "",
    };
  },
  methods: {
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

.modal-content {
  border-radius: 10px;
  height: 300px;
  width: 600px;
  margin-top: 52px;
  margin-left: -20px;
  .fa-xmark {
    font-size: 20px;
    color: $orange;
    cursor: pointer;
  }
}

.modal-tweets {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 15px 0px 0px 15px;
  &__text {
    font-size: 18px;
    width: 85%;
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
}
.btn {
  position: absolute;
  @include btn-selected(66px, 38px);
  border: none;
  right: 15px;
  bottom: 10px;
}
.error_message {
  position: absolute;
  bottom: -2.8rem;
  right: 6rem;
  color: red;
}
</style>
