<template>
  <section class="user">
    <div class="user_title">
      <a class="user_title_return">
        <i class="fa-solid fa-arrow-left"></i>
      </a>
      <div class="user_title_area">
        <span class="user_name">{{ user.name }}</span>
        <span class="user_tweet">25 推文</span>
      </div>
    </div>
    <div class="user_image">
      <div class="user_image_background">
        <img :src="user.background" alt="" />
      </div>
      <div class="user_image_avatar">
        <img :src="user.avatar" alt="" />
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
          { active: this.user.id === this.$route.params.id },
        ]"
      >
        正在跟隨
      </button>
    </div>
    <div class="user_detail">
      <span class="user_detail_name">John Doe</span>
      <span class="user_detail_account">@heyjohn</span>
      <span class="user_detail_test"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </span>
      <div class="user_detail_area">
        <span class="follows"><span class="num">34個</span> 跟隨中</span>
        <span class="follower"><span class="num">59位</span> 跟隨者</span>
      </div>
    </div>
    <!-- model -->
    <UserEdit :initial-user="user" />
  </section>
</template>

<script>
import UserEdit from "./UserEdit.vue";
export default {
  name: "UserCard",
  components: {
    UserEdit,
  },
  data() {
    return {
      user: {
        id: "1",
        name: "John Doe",
        background:
          "https://images.unsplash.com/photo-1551290470-554bf3a4fa80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "",
      },
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
