<template>
  <div class="loginForm">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="form" @submit.prevent="handleSubmit(loginSubmit)">
        <ValidationProvider name="Name" rules="account" v-slot="{ errors }">
          <div class="form-floating">
            <input
              type="account"
              class="form-control"
              id="account"
              placeholder="abc123"
              v-model="user.account"
              autofocus
            />
            <label for="account">帳號</label>
            <span class="error_message">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="password"
          rules="password"
          v-slot="{ errors }"
        >
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="12345678"
              v-model="user.password"
              autofocus
            />
            <label for="password">密碼</label>
            <span class="error_message">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <div class="button_LoginIn">
          <button type="submit" class="btn">登入</button>
        </div>
      </form>
    </ValidationObserver>
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
.error_message {
  font-size: 15px;
  color: red;
}
</style>
