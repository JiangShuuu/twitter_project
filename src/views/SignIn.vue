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
const dummyUser = {
  account: "root@example.com",
  password: "12345678",
};

export default {
  name: "SignIn",
  components: {
    LoginForm,
  },
  data() {
    return {
      user: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit(formData) {
      const { account, password } = formData;
      this.user.account = account;
      this.user.password = password;

      if (this.user.account === dummyUser.account) {
        if (this.user.password === dummyUser.password) {
          Toast.fire({
            icon: "success",
            title: "登入成功",
          });
          this.$router.push("/main");
        } else {
          Toast.fire({
            icon: "warning",
            title: "輸入的帳號密碼有誤",
          });
        }
      } else {
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
