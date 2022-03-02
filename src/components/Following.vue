<template>
  <section class="following">
    <div class="following-content">
      <div
        v-for="user in users"
        :key="user.Followship.id"
        class="following-list"
      >
        <router-link
          :to="{ name: 'other', params: { id: user.Followship.followingId } }"
        >
          <img
            :src="user.avatar"
            alt="avatar on screen"
            class="following-list__avatar"
          />
        </router-link>
        <div class="following-item">
          <div class="following-title">
            <span class="following-title__name">{{ user.name }}</span>
            <router-link
              :to="{
                name: 'other',
                params: { id: user.Followship.followingId },
              }"
            >
              <span class="following-title__account">@{{ user.account }}</span>
            </router-link>
            <button
              v-if="user.isFollowed"
              @click.stop.prevent="deleteFollow(user.Followship.followingId)"
              type="button"
              class="following-title__followed"
            >
              正在跟隨
            </button>
            <button
              v-else
              @click.stop.prevent="addFollow(user.Followship.followingId)"
              type="button"
              class="following-title__follow"
            >
              跟隨
            </button>
          </div>
          <p class="following-title__description">
            {{ user.introduction }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { ToastWarning } from "./../utils/helpers";
import usersAPI from "./../apis/users";

export default {
  name: "Following",
  data() {
    return {
      users: [],
    };
  },
  props: {
    initialUpdate: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    this.fetchFollowing();
  },
  watch: {
    initialUpdate: function () {
      this.fetchFollowing();
    },
  },
  methods: {
    async fetchFollowing() {
      try {
        const id = this.$route.params.id;
        const response = await usersAPI.getUserFollowing(id);
        console.log(response.data);
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteFollow(userId) {
      try {
        const { data } = await usersAPI.deleteFollow({ userId });
        console.log(data);
        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              isFollowed: false,
            };
          }
        });
        this.fetchFollowing();
        this.$emit("update-popular");
      } catch (error) {
        console.log(error);
      }
    },
    async addFollow(id) {
      try {
        const { data } = await usersAPI.addFollow({ id });
        console.log(data);
        this.users = this.users.map((user) => {
          if (user.id !== id) {
            return user;
          } else {
            return {
              ...user,
              isFollowed: true,
            };
          }
        });
        this.fetchFollowing();
        this.$emit("update-popular");
      } catch (error) {
        console.log(error);
      }
    },
    // addFollow() {
    //   this.user.isFollowing = true;
    // },
    // deleteFollow() {
    //   ToastWarning.fire({
    //     title: "確定要取消追蹤嗎?",
    //     // text: "You won't be able to revert this!",
    //     icon: "warning",
    //     showCancelButton: false,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "是",
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       ToastWarning.fire("OK!", "已經取消追蹤", "success");
    //       this.user.isFollowing = false;
    //     }
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.following {
  border-left: 1px solid $dividerColor;
  border-right: 1px solid $dividerColor;
  border-bottom: 1px solid $dividerColor;
}

.following-content {
  border-top: 1px solid $dividerColor;
  .following-list {
    border-bottom: 1px solid $dividerColor;
    padding: 10px 0px 10px 15px;
    min-height: 105px;
    display: flex;
    align-items: flex-start;
    &:last-child {
      border-bottom: none;
    }
    &__avatar {
      margin-top: 5px;
      margin-right: 10px;
      width: 50px;
      height: 50px;
      border-radius: 50px;
    }
    .following-title {
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
        padding-right: 25px;
      }
      &__name {
        font-weight: 700;
        @include longText;
        width: 30%;
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
