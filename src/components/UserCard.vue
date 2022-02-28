<template>
  <section class="user">
    <div class="user_title">
      <router-link to="/main" class="user_title_return">
        <i class="fa-solid fa-arrow-left"></i>
      </router-link>
      <div class="user_title_area">
        <span class="user_name">{{ userProfile.name }}</span>
        <span class="user_tweet">{{ userProfile.tweetCount }} 推文</span>
      </div>
    </div>
    <div class="user_image">
      <div class="user_image_background">
        <img :src="userProfile.cover" alt="" />
      </div>
      <div class="user_image_avatar">
        <img :src="userProfile.avatar" alt="" />
      </div>
    </div>

    <div class="user_edit" v-if="isUsers">
      <button
        class="user_edit_btn"
        data-bs-toggle="modal"
        data-bs-target="#personInfoModal"
      >
        編輯個人資料
      </button>
    </div>
    <div class="other_btn" v-else>
      <li class="other_btn_email">
        <i class="fa-regular fa-envelope"></i>
      </li>
      <li class="other_btn_bell">
        <i class="fa-regular fa-bell"></i>
      </li>
      <button
        :class="[
          'other_btn_follow',
          { active: this.userInfo.id === this.$route.params.id },
        ]"
      >
        正在跟隨
      </button>
    </div>
    <div class="user_detail">
      <span class="user_detail_name">{{ userProfile.name }}</span>
      <span class="user_detail_account">@{{ userProfile.account }}</span>
      <span class="user_detail_test">{{ userProfile.introduction }} </span>
      <div class="user_detail_area">
        <router-link to="/users/follows" class="follows"
          ><span class="num">{{ userProfile.followingCount }}個</span>
          跟隨中</router-link
        >
        <span class="follower"
          ><span class="num">{{ userProfile.followerCount }}位</span>
          跟隨者</span
        >
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UserCard",
  components: {},
  computed: {
    ...mapState(["userProfile"]),
  },
  data() {
    return {
      userInfo: {},
      isUsers: true,
    };
  },
  mounted() {
    this.confirmRouter();
  },
  methods: {
    confirmRouter() {
      if (this.$route.path.includes("other")) {
        this.isUsers = false;
      } else if (this.$route.name.includes("users")) {
        this.isUsers = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.user {
  width: 100%;
  &_title {
    @include flexCenter;
    justify-content: flex-start;
    height: 55px;
    &_return {
      font-size: 19px;
      color: black;
      margin: 0 43px 0 18px;
      cursor: pointer;
    }
    &_area {
      display: flex;
      flex-direction: column;
      .user_name {
        font-size: 19px;
        font-weight: 900;
      }
      .user_tweet {
        font-size: 13px;
        font-weight: 500;
        color: $mid-gray;
      }
    }
  }
  &_image {
    position: relative;
    &_background {
      height: 200px;
      background: $mid-gray;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    &_avatar {
      width: 140px;
      height: 140px;
      border: 4px solid white;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      bottom: -35%;
      left: 15px;
      background: $mid-gray;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
  &_edit {
    .fa-circle-envelope {
      border: 5px solid;
      width: 50px;
      height: 50px;
    }
    text-align: right;
    margin: 10px 15px 0 0;
    &_btn {
      all: unset;
      border: 1px solid $orange;
      color: $orange;
      width: 120px;
      text-align: center;
      padding: 5px 0;
      border-radius: 50px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        background: $orange;
        color: white;
      }
    }
  }
  &_detail {
    margin: 35px 15px;
    display: flex;
    flex-direction: column;
    &_name {
      font-size: 19px;
      font-weight: 900;
    }
    &_account {
      color: $mid-gray;
      font-size: 15px;
    }
    &_test {
      margin: 10px 0;
    }
    &_area {
      span {
        font-size: 15px;
      }
      .follows {
        color: $mid-gray;
        margin-right: 20px;
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
.other_btn {
  @include flexCenter;
  justify-content: flex-end;
  margin: 10px 15px 0 0;
  &_email {
    width: 35px;
    height: 35px;
    border: 1px solid $orange;
    border-radius: 50%;
    @include flexCenter;

    cursor: pointer;
    &:hover {
      background: $orange;
      color: white;
      .fa-envelope {
        color: white;
      }
    }
    .fa-envelope {
      color: $orange;
    }
  }
  &_bell {
    width: 35px;
    height: 35px;
    border: 1px solid $orange;
    border-radius: 50%;
    @include flexCenter;
    margin: 0 10px;
    cursor: pointer;
    .fa-bell {
      color: $orange;
    }
    &:hover {
      background: $orange;
      color: white;
      .fa-bell {
        color: white;
      }
    }
  }
  &_follow {
    all: unset;
    border: 1px solid $orange;
    color: $orange;
    width: 120px;
    text-align: center;
    padding: 5px 0;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background: $orange;
      color: white;
    }
  }
  .active {
    background: $orange;
    color: white;
  }
}
</style>
