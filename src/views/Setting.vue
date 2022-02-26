<template>
  <div class="signInPage">
    <div class="wrapper">
      <NavBar />
      <div class="content">
        <div class="content_title">
          <span class="content_title_name">帳戶設定</span>
        </div>
        <div class="content_form">
          <AccountForm :initial-user="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountForm from "../components/AccountForm.vue";
import NavBar from "../components/NavBar.vue";

const dummyData = {
  data: {
    account: "johnAccount",
    name: "john",
    email: "globe@gmail.com",
    password: "12345678",
    checkPassword: "",
  },
};

export default {
  name: "Setting",
  components: { AccountForm, NavBar },
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.fetchUserInfo();
  },
  methods: {
    fetchUserInfo() {
      this.user = dummyData.data;
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
