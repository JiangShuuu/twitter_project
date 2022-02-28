<template>
  <div class="signInPage">
    <div class="content">
      <div class="title">
        <img src="../assets/logo.png" alt="" />
        <span class="title">建立你的帳號</span>
      </div>
      <AccountForm @account-info="handleSubmit" />
      <div class="link">
        <router-link to="/signIn" class="link_signUp">取消</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AccountForm from "../components/AccountForm.vue";
import { Toast } from "./../utils/helpers";
import authorization from "./../apis/authorization.js";
export default {
  name: "SignUp",
  components: { AccountForm },
  data() {
    return {};
  },
  methods: {
    async handleSubmit(formData) {
      try {
        const { name, account, email, password, checkPassword } = formData;

        const response = await authorization.signUp({
          name: name,
          account: account,
          email: email,
          password: password,
          checkPassword: checkPassword,
        });

        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: response.data.message,
        });
        this.$router.push("/signIn");
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: error,
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
