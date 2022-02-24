<template>
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
        <div class="modal-tweets">
          <img
            :src="user.avatar"
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
            required
          >
          </textarea>
        </div>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          推文
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CreateTweet",
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
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
    &:focus {
      outline: none;
    }
  }
  &__avatar {
    width: 50px;
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
</style>
