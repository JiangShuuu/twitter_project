<template>
  <div class="container">
    <ul class="pop-list">
      <h2 class="pop-title">Popular</h2>
      <li v-for="user in users" :key="user.id" class="pop-item">
        <div class="pop-avatar">
          <router-link :to="{ name: 'other', params: { id: user.id } }"
            ><img
              class="pop-avatar__img"
              :src="user.avatar"
              alt="avatar on screen"
          /></router-link>
        </div>
        <div class="pop-text">
          <span class="pop-text__name">{{ user.name }}</span>
          <router-link
            class="pop-text__account"
            :to="{ name: 'other', params: { id: user.id } }"
            >{{ user.account }}</router-link
          >
        </div>
        <div class="pop-btn">
          <button
            v-if="user.isFollowed"
            @click.stop.prevent="deleteFollow(user.id)"
            type="button"
            class="btn followed"
          >
            正在跟隨
          </button>
          <button
            v-else
            @click.stop.prevent="addFollow(user.id)"
            type="button"
            class="btn follow"
          >
            跟隨
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "Popular",
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsersTop();
  },
  methods: {
    async fetchUsersTop() {
      try {
        const response = await usersAPI.getUsersTop();
        const { data } = response.data;

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.users = data;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: error.message,
        });
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
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.container {
  margin-top: 15px;
  height: 756px;
  width: 350px;
  margin-left: 31px;
  border-radius: 15px;
  padding: 0;
  background: $popularColor;
  .pop-list {
    padding-top: 15px;
    .pop-title {
      color: $black;
      @include font-w700(18px);
      margin-bottom: 10px;
      padding: 0 0 0 15px;
    }
    .pop-item {
      height: 71px;
      width: 100%;
      padding: 0 15px;
      border-top: 1px solid $dividerColor;
      @include flexCenter;
      .pop-avatar__img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50px;
      }
      .pop-text {
        @include flexCenter;
        flex-direction: column;
        margin-left: 10px;
        &__name,
        &__account {
          line-height: 15px;
          @include font-w700(15px);
        }
        &__name {
          color: $black;
        }
        &__account {
          color: $mid-gray;
        }
      }
      .pop-btn {
        flex: 1;
        text-align: right;
        .followed {
          @include btn-selected(95px, 35px);
          padding-top: 4px;
        }
        .follow {
          @include btn-unselected(60px, 35px);
          padding-top: 4px;
        }
      }
    }
  }
}
</style>
