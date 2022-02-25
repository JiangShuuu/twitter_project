<template>
  <div class="loginForm">
    <form class="form" @submit.prevent.stop="loginSubmit">
      <div class="form-floating">
        <input
          type="account"
          class="form-control"
          id="account"
          placeholder="abc123"
          v-model="user.account"
          required
          autofocus
        />
        <label for="account">帳號</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="12345678"
          v-model="user.password"
          required
          autofocus
        />
        <label for="password">密碼</label>
      </div>
      <div class="button_LoginIn">
        <button type="submit" class="btn">登入</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      user: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    loginSubmit() {
      this.$emit("login-submit", this.user);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.loginForm {
  .form {
    width: 100%;
    margin-top: 40px;
    input {
      background: $light-gray;
      border: none;
      border-radius: 0;
      border-bottom: 2px solid $mid-gray;
      width: 100%;
      height: 52px;
      margin-top: 30px;
    }
    label {
      color: $mid-gray;
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
}
</style>
