<template>
  <section class="follows">
    <div class="follows-content">
      <div class="follows-list">
        <img
          src="../assets/image/Photo.png"
          alt="avatar on screen"
          class="follows-list__avatar"
        />
        <div class="follows-item">
          <div class="follows-title">
            <span class="follows-title__name">{{ user.name }}</span>
            <span class="follows-title__account">@{{ user.account }}</span>
            <button
              v-if="user.isFollowed"
              @click.stop.prevent="deleteFollow()"
              type="button"
              class="follows-title__followed"
            >
              正在跟隨
            </button>
            <button
              v-else
              @click.stop.prevent="addFollow()"
              type="button"
              class="follows-title__follow"
            >
              跟隨
            </button>
          </div>
          <p class="follows-item__description">
            {{ user.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ToastWarning } from "./../utils/helpers";

export default {
  name: "Following",
  props: {
    initialUser: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    addFollow() {
      this.user.isFollowed = true;
    },
    deleteFollow() {
      ToastWarning.fire({
        title: "確定要取消追蹤嗎?",
        // text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "是",
      }).then((result) => {
        if (result.isConfirmed) {
          ToastWarning.fire("OK!", "已經取消追蹤", "success");
          this.user.isFollowed = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.follows {
  border-left: 1px solid $dividerColor;
  border-right: 1px solid $dividerColor;
  border-bottom: 1px solid $dividerColor;
}

.follows-content {
  border-top: 1px solid $dividerColor;
  &:last-child {
    border-bottom: none;
  }
  .follows-list {
    padding: 5px 0px 0px 15px;
    height: 105px;
    display: flex;
    align-items: flex-start;
    &__avatar {
      margin-top: 5px;
      margin-right: 10px;
    }
    .follows-title {
      position: relative;
      width: 522px;
      display: flex;
      flex-direction: column;
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
      &__account {
        font-size: 15px;
        color: $mid-gray;
      }
      &__followed,
      &__follow {
        position: absolute;
        border: none;
        top: 5px;
        right: 15px;
        @include flexCenter;
        padding-top: 2px;
      }
      &__followed {
        @include btn-selected(90px, 25px);
        font-weight: 500;
      }
      &__follow {
        @include btn-unselected(60px, 25px);
        font-weight: 500;
        background: white;
      }
    }
  }
}
</style>
