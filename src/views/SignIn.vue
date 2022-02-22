<template>
  <div class="signInPage">
    <div class="content">
      <div class="title">
        <img src="../assets/logo.png" alt="" />
        <span class="title">登入 Alphitter</span>
      </div>
      <form class="form">
        <input
          class="form-control form_account"
          type="text"
          placeholder="帳號"
        />
        <input
          class="form-control form_password"
          type="text"
          placeholder="密碼"
        />
      </form>
      <button type="button" class="btn">登入</button>
      <div class="link">
        <router-link to="/signUp" class="link_signUp"
          >註冊 Alphitter</router-link
        >
        <div class="link_circle"></div>
        <a href="#" class="link_admin">後台登入</a>
      </div>
    </div>
  </div>
</template>

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
    .form {
      margin-top: 40px;
      input {
        background: $light-gray;
        border: none;
        border-radius: 0;
        border-bottom: 2px solid $mid-gray;
        width: 100%;
        height: 52px;
      }
      input::-webkit-input-placeholder {
        color: $mid-gray;
        font-size: 15px;
        font-weight: 500;
        text-align: left;
        position: relative;
        top: -0.8rem;
      }
      &_password {
        margin-top: 30px;
      }
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
