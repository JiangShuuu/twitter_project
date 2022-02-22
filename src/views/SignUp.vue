<template>
  <div class="signInPage">
    <div class="content">
      <div class="title">
        <img src="../assets/logo.png" alt="" />
        <span class="title">建立你的帳號</span>
      </div>
      <AccountForm />
      <button type="button" class="btn">註冊</button>
      <div class="link">
        <router-link to="/signIn" class="link_signUp">取消</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AccountForm from "../components/AccountForm.vue";
export default {
  name: "SignUp",
  components: { AccountForm },
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
