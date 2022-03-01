<template>
  <div class="adminSignIn">
    <div class="content">
      <div class="title">
        <img src="../assets/logo.png" alt="" />
        <span class="title">後台登入</span>
      </div>
      <LoginForm @login-submit="handleSubmit" />
      <div class="link">
        <router-link to="/signIn" class="link_admin">前台登入</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import { Toast } from "./../utils/helpers";
import authorizationAPI from "./../apis/authorization.js";

export default {
  name: "adminSignIn",
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

        const response = await authorizationAPI.adminSignIn({
          account: account,
          password: password,
        });

        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        localStorage.setItem("token", data.token);

        // 透過 setCurrentUser 把管理者資料存到 vuex 的 state 中
        await this.$store.commit("setCurrentUser", data.data);

        Toast.fire({
          icon: "success",
          title: "登入成功",
        });
        this.$router.push("/admin");
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
.adminSignIn {
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
    }
  }
}
</style>
