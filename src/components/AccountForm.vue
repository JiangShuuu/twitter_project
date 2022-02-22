<template>
  <div class="accountForm">
    <form class="form">
      <div class="form-floating">
        <input
          type="account"
          class="form-control"
          id="account"
          placeholder="abc123"
          v-model="account"
          required
          autofocus
        />
        <label for="account">帳號</label>
      </div>
      <div class="form-floating">
        <input
          type="name"
          class="form-control"
          id="name"
          placeholder="林xx"
          v-model="name"
          required
          autofocus
        />
        <label for="account">名稱</label>
      </div>
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
          v-model="email"
          required
          autofocus
        />
        <label for="email">Email</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="12345678"
          v-model="password"
          required
          autofocus
        />
        <label for="password">密碼</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="checkpassword"
          placeholder="12345678"
          v-model="checkPassword"
          required
          autofocus
        />
        <label for="checkpassword">密碼確認</label>
      </div>
      <div class="button_signUp" v-if="isSetting">
        <button type="submit" class="btn">註冊</button>
      </div>
      <div class="button_save" v-else>
        <button type="submit" class="btn saveBtn">儲存</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AccountForm",
  data() {
    return {
      account: null,
      name: null,
      email: null,
      password: null,
      checkPassword: null,
      isSetting: false,
    };
  },
  created() {
    this.state();
  },
  methods: {
    state() {
      if (this.$route.path === "/signUp") {
        this.isSetting = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.accountForm {
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
  .button_save {
    text-align: right;
    .saveBtn {
      background: $orange;
      margin-top: 42px;
      width: 116px;
      border-radius: 50px;
      color: white;
      font-size: 18px;
      font-weight: 700;
    }
  }
}
</style>
