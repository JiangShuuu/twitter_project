<template>
  <section class="follows">
    <div class="follows-content">
      <div v-for="user in users" :key="user.Followship.id" class="follows-list">
        <img
          :src="user.avatar"
          alt="avatar on screen"
          class="follows-list__avatar"
        />
        <div class="follows-item">
          <div class="follows-title">
            <span class="follows-title__name">{{ user.name }}</span>
            <span class="follows-title__account">@{{ user.account }}</span>
            <button
              v-if="user.isFollowed"
              @click.stop.prevent="deleteFollow(user.Followship.followerId)"
              type="button"
              class="follows-title__followed"
            >
              正在跟隨
            </button>
            <button
              v-else
              @click.stop.prevent="addFollow(user.Followship.followerId)"
              type="button"
              class="follows-title__follow"
            >
              跟隨
            </button>
          </div>
          <p class="follows-item__description">
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
  name: "Follows",
  props: {
    initialUpdate: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      users: [],
    };
  },
  watch: {
    initialUpdate: function () {
      this.fetchFollowers();
    },
  },
  mounted() {
    this.fetchFollowers();
  },
  methods: {
    async fetchFollowers() {
      try {
        const id = this.$route.params.id;
        const response = await usersAPI.getUserFollowers(id);
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
        this.fetchFollowers();
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
        this.fetchFollowers();
        this.$emit("update-popular");
      } catch (error) {
        console.log(error);
      }
    },
    // addFollow() {
    //   this.user.isFollowed = true;
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
    //       this.user.isFollowed = false;
    //     }
    //   });
    // },
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
    border-bottom: 1px solid $dividerColor;
    padding: 5px 0px 0px 15px;
    min-height: 105px;
    display: flex;
    align-items: flex-start;
    &__avatar {
      width: 50px;
      height: 50px;
      border-radius: 50px;
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
