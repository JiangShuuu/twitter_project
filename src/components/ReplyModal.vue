<template>
  <div
    class="modal fade"
    id="createReplyModal"
    tabindex="-1"
    aria-labelledby="createReplyModalLabel"
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
        <div class="following-content">
          <div class="following-list">
            <img
              src="../assets/image/Photo.png"
              alt="avatar on screen"
              class="following-list__avatar"
            />
            <div class="following-item">
              <span class="following-item__name">Apple</span>
              <span class="following-item__account">@apple</span>
              <span class="following-item__icon">&#8226;</span>
              <span class="following-item__date">3小時</span>
              <p class="following-item__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                mollitia assumenda itaque asperiores, deserunt necessitatibus
                doloremque libero provident dolores similique?
              </p>
              <div class="following-detail">
                <span class="following-detail__header">回覆給</span>
                <span class="following-detail__account">@apple</span>
              </div>
            </div>
          </div>
        </div>
        <span class="connect-line"></span>
        <div class="modal-reply">
          <img
            :src="user.avatar"
            alt="avatar on screen"
            class="modal-reply__avatar"
          />
          <textarea
            name="mytext"
            rows="6"
            cols="40"
            maxlength="140"
            class="modal-reply__text"
            placeholder="推你的回覆"
            required
          >
          </textarea>
        </div>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          回覆
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
  position: relative;
  border-radius: 10px;
  height: 450px;
  width: 600px;
  margin-top: 52px;
  margin-left: -20px;
  .fa-xmark {
    font-size: 20px;
    color: $orange;
    cursor: pointer;
  }
  .connect-line {
    position: absolute;
    width: 2px;
    height: 80px;
    background-color: #ccd6dd;
    top: 128px;
    left: 40px;
  }
}

.modal-reply {
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

.following-list {
  position: relative;
  padding: 10px 0px 0px 15px;
  height: 146px;
  display: flex;
  align-items: flex-start;
  &__avatar {
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
  }
  .following-detail {
    margin-top: 19px;
    font-size: 13px;
    &__header {
      color: $mid-gray;
    }
    &__account {
      color: $orange;
    }
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
