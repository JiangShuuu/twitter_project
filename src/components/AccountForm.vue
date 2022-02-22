<template>
  <div class="accountForm">
    <form class="form">
      <input class="form-control form_account" type="text" placeholder="帳號" />
      <input
        class="form-control form_password"
        type="text"
        placeholder="名稱"
      />
      <input
        class="form-control form_password"
        type="text"
        placeholder="Email"
      />
      <input
        class="form-control form_password"
        type="text"
        placeholder="密碼"
      />
      <input
        class="form-control form_password"
        type="text"
        placeholder="密碼確認"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "AccountForm",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

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
  input::-webkit-input-placeholder {
    color: $mid-gray;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    position: relative;
    top: -0.8rem;
  }
}
</style>
