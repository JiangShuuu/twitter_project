<template>
  <div class="signInPage">
    <div class="wrapper">
      <NavBar />
      <div class="content">
        <div class="content_title">
          <span class="content_title_name">帳戶設定</span>
        </div>
        <div class="content_form">
          <AccountForm
            :initial-user="currentUser"
            @account-info="handleSubmit"
          />
        </div>
      </div>
    </div>
    <CreateTweets />
  </div>
</template>

<script>
import AccountForm from "../components/AccountForm.vue";
import NavBar from "../components/NavBar.vue";
import store from "./../store";
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users.js";
import CreateTweets from "../components/CreateTweet.vue";

export default {
  name: "Setting",
  components: { AccountForm, NavBar, CreateTweets },
  data() {
    return {
      currentUser: {
        id: "",
        account: "",
        name: "",
        email: "",
      },
    };
  },
  mounted() {
    this.fetchUserInfo();
  },
  methods: {
    fetchUserInfo() {
      const { account, name, email, id } = store.state.currentUser;
      this.currentUser = { account, name, email, id };
    },
    async handleSubmit(formData) {
      try {
        const { name, account, email, password, checkPassword, id } = formData;

        const response = await usersAPI.settingUserAccount(id, {
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
  max-width: 1440px;
  max-height: 1200px;
  margin: 0 auto;
  .wrapper {
    display: grid;
    grid-template-columns: 378px 1022px;
    grid-auto-rows: 1200px;
  }
  .content {
    border-left: 1px solid $light-gray;
    &_title {
      display: flex;
      align-items: center;
      border-bottom: 1px solid $light-gray;
      height: 55px;
      padding-left: 15px;
      &_name {
        font-size: 19px;
        font-weight: 700;
      }
    }
    &_form {
      margin-right: 447px;
      padding-left: 15px;
    }
  }
}
</style>
