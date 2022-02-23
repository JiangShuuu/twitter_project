<template>
  <div class="container">
    <h1>
      <img class="logo" src="../assets/image/logo.png" alt="logo on screen" />
    </h1>
    <div class="grid">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="#"><i class="nav-item__icon fa-solid fa-house"></i>首頁</a>
        </li>
        <li class="nav-item">
          <a href="#"
            ><i class="nav-item__icon fa-solid fa-user"></i>個人資料</a
          >
        </li>
        <li class="nav-item">
          <a href=""><i class="nav-item__icon fa-solid fa-gear"></i>設定</a>
        </li>
        <button class="btn">推文</button>
      </ul>
    </div>
    <li class="nav-item nav-logout">
      <a href=""
        ><i class="nav-item__icon fa-solid fa-right-from-bracket"></i>登出</a
      >
    </li>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.container {
  position: relative;
  height: 100%;
  width: 235px;
  padding: 0;
  margin-right: 31px;
  .logo {
    margin-top: 20px;
    margin-bottom: 25px;
    width: 35px;
  }
  a {
    padding-top: 3px;
    font-size: 18px;
    font-weight: 700;
    color: $black;
  }
}
.nav-list {
  display: grid;
  grid-template-rows: repeat(4, 54px);
  align-items: center;
  .btn {
    background: $orange;
    width: 85%;
    height: 70%;
    border-radius: 50px;
    color: white;
    @include font-w700(18px);
    &:hover {
      transition-duration: $defaultDuration;
      box-shadow: 0 0 8px $shadowColor;
    }
  }
}
.nav-item {
  display: flex;
  align-items: center;
  &:hover a {
    color: $orange;
  }
  &__icon {
    width: 20px;
    font-size: 18px;
    margin-right: 20px;
  }
}
.nav-logout {
  position: absolute;
  bottom: 15px;
}
</style>
