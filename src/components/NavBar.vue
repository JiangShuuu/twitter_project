<template>
  <div class="container">
    <h1>
      <img class="logo" src="../assets/image/logo.png" alt="logo on screen" />
    </h1>
    <!-- adminNav -->
    <div class="grid" v-if="isAdmin">
      <ul class="nav-list">
        <li
          :class="['nav-item', { active: this.$route.name === 'tweet-list' }]"
        >
          <router-link to="/admin/tweetList"
            ><i class="nav-item__icon fa-solid fa-house"></i
            >推文清單</router-link
          >
        </li>
        <li :class="['nav-item', { active: this.$route.name === 'user-list' }]">
          <router-link to="/admin/userList"
            ><i class="nav-item__icon fa-solid fa-user"></i
            >使用者列表</router-link
          >
        </li>
      </ul>
    </div>
    <!-- Nav -->
    <div class="grid" v-else>
      <ul class="nav-list">
        <li :class="['nav-item', { active: this.$route.name === 'main' }]">
          <router-link to="/main"
            ><i class="nav-item__icon fa-solid fa-house"></i>首頁</router-link
          >
        </li>
        <li :class="['nav-item', { active: isUsers }]">
          <router-link :to="{ name: 'users', params: { id: currentUser.id } }"
            ><i class="nav-item__icon fa-solid fa-user"></i
            >個人資料</router-link
          >
        </li>
        <li :class="['nav-item', { active: this.$route.name === 'setting' }]">
          <router-link to="/setting"
            ><i class="nav-item__icon fa-solid fa-gear"></i>設定</router-link
          >
        </li>
        <button 
        data-bs-toggle="modal"
        data-bs-target="#createTweetsModal"
        class="btn">推文</button>
      </ul>
    </div>

    <li class="nav-item nav-logout" @click="logout">
      <a href=""
        ><i class="nav-item__icon fa-solid fa-right-from-bracket"></i>登出</a
      >
    </li>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "navBar",
  computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
      isAdmin: false,
      isUsers: false,
    };
  },
  mounted() {
    this.confirmRouter();
  },
  methods: {
    confirmRouter() {
      this.$route.path.includes("admin")
        ? (this.isAdmin = true)
        : (this.isAdmin = false);
      this.$route.path.includes("users")
        ? (this.isUsers = true)
        : (this.isUsers = false);
    },
    logout() {
      this.$store.commit("revokeAuthenication");
      this.$router.push("/signin");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.container {
  position: relative;
  height: 100%;
  width: 235px;
  padding: 0;
  margin-right: 31px;
  .logo {
    margin-top: 20px;
    margin-bottom: 25px;
    width: 35px;
  }
  a {
    padding-top: 3px;
    font-size: 18px;
    font-weight: 700;
    color: $black;
  }
}
.nav-list {
  display: grid;
  grid-template-rows: repeat(4, 54px);
  align-items: center;
  .btn {
    background: $orange;
    width: 85%;
    height: 70%;
    border-radius: 50px;
    color: white;
    @include font-w700(18px);
    &:hover {
      transition-duration: $defaultDuration;
      box-shadow: 0 0 8px $shadowColor;
    }
  }
}
.nav-item {
  display: flex;
  align-items: center;
  &:hover a {
    color: $orange;
  }
  &__icon {
    width: 20px;
    font-size: 18px;
    margin-right: 20px;
  }
}
.active {
  a {
    color: $orange;
  }
}

.nav-logout {
  position: absolute;
  bottom: 15px;
}
</style>
