<template>
  <section class="admin_user_list">
    <div class="users">
      <div class="user" v-for="user in users" :key="user.id">
        <div class="user_image">
          <div class="user_image_background">
            <img :src="user.cover" alt="" />
          </div>
          <div class="user_image_avatar">
            <img :src="user.avatar" alt="" />
          </div>
        </div>
        <div class="user_detail">
          <span class="user_detail_name">{{ user.name }}</span>
          <span class="user_detail_account">@{{ user.account }}</span>
          <div class="user_detail_icon">
            <li class="user_detail_icon_comment">
              <i class="icon fa-regular fa-comment"></i>
              <span class="num">{{ user.replyCount }}k</span>
            </li>
            <li class="user_detail_icon_heart">
              <i class="icon fa-regular fa-heart"></i>
              <span class="num">{{ user.likeCount }}k</span>
            </li>
          </div>
          <div class="user_detail_area">
            <span class="follows"
              ><router-link to="/user/following" class="num"
                >{{ user.followingCount }}個</router-link
              >
              跟隨中</span
            >
            <span class="follower"
              ><router-link to="/user/follows" class="num"
                >{{ user.followerCount }}位</router-link
              >
              跟隨者</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BetterScroll from "better-scroll";
import adminAPI from "./../apis/admin.js";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminUserList",
  data() {
    return {
      users: {},
    };
  },
  mounted() {
    this.fetchUserList();
  },
  methods: {
    async fetchUserList() {
      try {
        const response = await adminAPI.getUserList();
        this.users = response.data;
        await this.movefunction(100);
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: "讀取資料失敗,請稍後再試!",
        });
      }
    },
    movefunction(s) {
      return new Promise(function (resolve) {
        setTimeout(() => {
          resolve(
            new BetterScroll(".admin_user_list", {
              mouseWheel: true, //開啟滑鼠滾動
              disableMouse: false, //關閉滑鼠拖動
              disableTouch: false, //關閉手指觸摸
              scrollX: true, //X軸滾動開啟
              click: true,
            })
          );
        }, s);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.admin_user_list {
  width: 100%;
  height: 95%;
  overflow: hidden;
}

.users {
  display: grid;
  margin: 15px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(314px, auto);
  grid-gap: 15px;
}
.user {
  border-radius: 10px;
  overflow: hidden;
  background: $light-gray;
  &_image {
    position: relative;
    &_background {
      height: 140px;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    &_avatar {
      width: 100px;
      height: 100px;
      border: 4px solid white;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      bottom: -35%;
      left: 50%;
      transform: translateX(-50%);
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
  &_detail {
    margin-top: 45px;
    @include flexCenter;
    flex-direction: column;
    &_name {
      font-size: 19px;
      font-weight: 900;
    }
    &_account {
      color: $mid-gray;
      font-size: 15px;
    }
    &_icon {
      display: flex;
      margin: 10px 0;
      &_comment {
        margin-right: 17px;
      }
      .fa-comment {
        color: $mid-gray;
        margin-right: 7px;
      }
      .fa-heart {
        color: $mid-gray;
        margin-right: 7px;
      }
      .num {
        font-size: 15px;
      }
    }
    &_area {
      span {
        font-size: 15px;
      }
      .follows {
        color: $mid-gray;
        margin-right: 5px;
      }
      .follower {
        color: $mid-gray;
      }
      .num {
        color: black;
      }
    }
  }
}
</style>
