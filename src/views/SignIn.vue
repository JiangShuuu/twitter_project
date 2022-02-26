<template>
  <div class="signInPage">
    <div class="content">
      <div class="title">
        <img src="../assets/logo.png" alt="" />
        <span class="title">登入 Alphitter</span>
      </div>
      <LoginForm @login-submit="handleSubmit" />
      <div class="link">
        <router-link to="/signUp" class="link_signUp"
          >註冊 Alphitter</router-link
        >
        <div class="link_circle"></div>
        <router-link to="/adminSignIn" class="link_admin">後台登入</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import { Toast } from "./../utils/helpers";
import authorizationAPI from "./../apis/authorization.js";

export default {
  name: "SignIn",
  components: {
    LoginForm,
  },
  data() {
    return {};
  },
  methods: {
    async handleSubmit(formData) {
      try {
        const { account, password } = formData;

        const response = await authorizationAPI.userSignIn({
          account: account,
          password: password,
        });

        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        localStorage.setItem("token", data.token);

        // 透過 setCurrentUser 把使用者資料存到 vuex 的 state 中
        this.$store.commit("setCurrentUser", data.data);

        Toast.fire({
          icon: "success",
          title: "登入成功",
        });
        this.$router.push("/main");
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: "輸入的帳號密碼有誤",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.signInPage {
  @include flexCenter;
  flex-direction: column;
  margin-top: 60px;
  .content {
    width: 540px;
    .title {
      @include flexCenter;
      flex-direction: column;
      font-size: 23px;
      font-weight: 700;
      margin-top: 20px;
    }

    .btn {
      background: $orange;
      margin-top: 42px;
      width: 100%;
      border-radius: 50px;
      color: white;
      font-size: 18px;
      font-weight: 700;
    }
    .link {
      margin-top: 20px;
      @include flexCenter;
      justify-content: right;
      a {
        color: $link-blue;
        font-weight: 700;
        text-decoration: underline;
        font-size: 18px;
      }
      span {
        color: $link-blue;
        margin: 0 0.25rem;
      }
      &_circle {
        background-color: $link-blue;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        margin: 0 0.25rem;
      }
    }
  }
}
</style>
