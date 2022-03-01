<template>
  <div class="accountForm">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="form" @submit.prevent="handleSubmit(accountInfoSubmit)">
        <ValidationProvider
          name="account"
          rules="create_account|alpha_num|max_length:12"
          v-slot="{ errors }"
        >
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
          name="Name"
          rules="create_name|alpha_num|max_name_length:50"
          v-slot="{ errors }"
        >
          <div class="form-floating">
            <input
              type="name"
              class="form-control"
              id="name"
              placeholder="john"
              v-model="user.name"
              autofocus
            />
            <label for="account">名稱</label>
            <span class="error_message">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="email"
          rules="create_email|email"
          v-slot="{ errors }"
        >
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
              v-model="user.email"
              autofocus
            />
            <label for="email">Email</label>
            <span class="error_message">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="password"
          rules="create_password|min_length:6|max_length:12"
          v-slot="{ errors }"
          vid="confirmation"
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
        <ValidationProvider
          rules="confirmed:confirmation|confirmed_password"
          v-slot="{ errors }"
        >
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="checkpassword"
              placeholder="12345678"
              v-model="user.checkPassword"
              autofocus
            />
            <label for="checkpassword">密碼確認</label>
            <span class="error_message">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <div class="button_save" v-if="isSetting">
          <button type="submit" class="btn saveBtn">儲存</button>
        </div>
        <div class="button_signUp" v-else>
          <button type="submit" class="btn">註冊</button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "AccountForm",
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: {
        id: "",
        account: "",
        name: "",
        email: "",
        password: "",
        checkPassword: "",
      },
      isSetting: false,
    };
  },
  mounted() {
    this.state();
  },
  watch: {
    initialUser: function () {
      this.state();
    },
  },
  methods: {
    state() {
      if (this.$route.path === "/setting") {
        this.isSetting = true;
        this.user = {
          ...this.initialUser,
        };
      }
    },
    accountInfoSubmit() {
      this.$emit("account-info", this.user);
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
.error_message {
  font-size: 15px;
  color: red;
}
</style>
