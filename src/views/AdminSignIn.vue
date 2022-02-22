<template>
  <div class="adminSignIn">
    <div class="content">
      <div class="title">
        <img src="../assets/logo.png" alt="" />
        <span class="title">後台登入</span>
      </div>
      <LoginForm />
      <div class="link">
        <router-link to="/signIn" class="link_admin">前台登入</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "adminSignIn",
  components: {
    LoginForm,
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
