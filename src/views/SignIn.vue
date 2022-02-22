<template>
  <div class="signInPage">
    <div class="title">
      <img src="../assets/logo.png" alt="" />
      <span class="title">登入 Alphitter</span>
    </div>
    <form class="form">
      <input class="form-control form_account" type="text" placeholder="帳號" />
      <input
        class="form-control form_password"
        type="text"
        placeholder="密碼"
      />
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.signInPage {
  @include flexCenter;
  flex-direction: column;
  margin-top: 60px;
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
      width: 540px;
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
}
</style>
