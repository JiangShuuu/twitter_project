<template>
  <div class="container">
    <ul class="pop-list">
      <h2 class="pop-title">Popular</h2>
      <li class="pop-item">
        <div class="pop-avatar">
          <a href="#"
            ><img
              class="pop-avatar__img"
              src="../assets/image/Photo.png"
              alt="avatar on screen"
          /></a>
        </div>
        <div class="pop-text">
          <span class="pop-text__name">Pizza Hut</span>
          <a class="pop-text__account" href="">@pizzahut</a>
        </div>
        <div class="pop-btn">
          <button type="button" class="btn followed">正在跟隨</button>
          <!-- <button type="button" class="btn follow">跟隨</button> -->
        </div>
      </li>
      <li class="pop-item">
        <div class="pop-avatar">
          <a href="#"
            ><img
              class="pop-avatar__img"
              src="../assets/image/Photo.png"
              alt="avatar on screen"
          /></a>
        </div>
        <div class="pop-text">
          <span class="pop-text__name">McDonald's</span>
          <a class="pop-text__account" href="">@McDonalds</a>
        </div>
        <div class="pop-btn">
          <button type="button" class="btn follow">跟隨</button>
          <!-- <button type="button" class="btn followed">正在跟隨</button> -->
        </div>
      </li>
      <li class="pop-item">
        <div class="pop-avatar">
          <a href="#"
            ><img
              class="pop-avatar__img"
              src="../assets/image/Photo.png"
              alt="avatar on screen"
          /></a>
        </div>
        <div class="pop-text">
          <span class="pop-text__name">Bank of America</span>
          <a class="pop-text__account" href="">@BankofAmerica</a>
        </div>
        <div class="pop-btn">
          <button type="button" class="btn follow">跟隨</button>
          <!-- <button type="button" class="btn followed">正在跟隨</button> -->
        </div>
      </li>
      <li class="pop-item">
        <div class="pop-avatar">
          <a href="#"
            ><img
              class="pop-avatar__img"
              src="../assets/image/Photo.png"
              alt="avatar on screen"
          /></a>
        </div>
        <div class="pop-text">
          <span class="pop-text__name">L'Oréal</span>
          <a class="pop-text__account" href="">@Loreal</a>
        </div>
        <div class="pop-btn">
          <button type="button" class="btn follow">跟隨</button>
          <!-- <button type="button" class="btn followed">正在跟隨</button> -->
        </div>
      </li>
      <li class="pop-item">
        <div class="pop-avatar">
          <a href="#"
            ><img
              class="pop-avatar__img"
              src="../assets/image/Photo.png"
              alt="avatar on screen"
          /></a>
        </div>
        <div class="pop-text">
          <span class="pop-text__name">Nintendo</span>
          <a class="pop-text__account" href="">@Nintend</a>
        </div>
        <div class="pop-btn">
          <button type="button" class="btn follow">跟隨</button>
          <!-- <button type="button" class="btn followed">正在跟隨</button> -->
        </div>
      </li>
      <li class="pop-item">
        <div class="pop-avatar">
          <a href="#"
            ><img
              class="pop-avatar__img"
              src="../assets/image/Photo.png"
              alt="avatar on screen"
          /></a>
        </div>
        <div class="pop-text">
          <span class="pop-text__name">MasterCard</span>
          <a class="pop-text__account" href="">MasterCard</a>
        </div>
        <div class="pop-btn">
          <button type="button" class="btn follow">跟隨</button>
          <!-- <button type="button" class="btn followed">正在跟隨</button> -->
        </div>
      </li>
      <li class="pop-item">
        <div class="pop-avatar">
          <a href="#"
            ><img
              class="pop-avatar__img"
              src="../assets/image/Photo.png"
              alt="avatar on screen"
          /></a>
        </div>
        <div class="pop-text">
          <span class="pop-text__name">Nike</span>
          <a class="pop-text__account" href="">@Nike</a>
        </div>
        <div class="pop-btn">
          <button type="button" class="btn follow">跟隨</button>
          <!-- <button type="button" class="btn followed">正在跟隨</button> -->
        </div>
      </li>
      <li class="pop-item">
        <div class="pop-avatar">
          <a href="#"
            ><img
              class="pop-avatar__img"
              src="../assets/image/Photo.png"
              alt="avatar on screen"
          /></a>
        </div>
        <div class="pop-text">
          <span class="pop-text__name">Adidas</span>
          <a class="pop-text__account" href="">@Adidas</a>
        </div>
        <div class="pop-btn">
          <button type="button" class="btn follow">跟隨</button>
          <!-- <button type="button" class="btn followed">正在跟隨</button> -->
        </div>
      </li>
      <li class="pop-item">
        <div class="pop-avatar">
          <a href="#"
            ><img
              class="pop-avatar__img"
              src="../assets/image/Photo.png"
              alt="avatar on screen"
          /></a>
        </div>
        <div class="pop-text">
          <span class="pop-text__name">New Balance</span>
          <a class="pop-text__account" href="">@newBalance</a>
        </div>
        <div class="pop-btn">
          <button type="button" class="btn follow">跟隨</button>
          <!-- <button type="button" class="btn followed">正在跟隨</button> -->
        </div>
      </li>
      <li class="pop-item">
        <div class="pop-avatar">
          <a href="#"
            ><img
              class="pop-avatar__img"
              src="../assets/image/Photo.png"
              alt="avatar on screen"
          /></a>
        </div>
        <div class="pop-text">
          <span class="pop-text__name">NBA</span>
          <a class="pop-text__account" href="">@nba</a>
        </div>
        <div class="pop-btn">
          <button type="button" class="btn follow">跟隨</button>
          <!-- <button type="button" class="btn followed">正在跟隨</button> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.container {
  margin-top: 15px;
  height: 756px;
  width: 350px;
  margin-left: 31px;
  border-radius: 15px;
  padding: 0;
  background: $popularColor;
  .pop-list {
    padding-top: 15px;
    .pop-title {
      color: $black;
      @include font-w700(18px);
      margin-bottom: 10px;
      padding: 0 0 0 15px;
    }
    .pop-item {
      height: 71px;
      width: 100%;
      padding: 0 15px;
      border-top: 1px solid $dividerColor;
      @include flexCenter;
      .pop-avatar__img {
        width: 50px;
      }
      .pop-text {
        @include flexCenter;
        flex-direction: column;
        margin-left: 10px;
        &__name,
        &__account {
          line-height: 15px;
          @include font-w700(15px);
        }
        &__name {
          color: $black;
        }
        &__account {
          color: $mid-gray;
        }
      }
      .pop-btn {
        flex: 1;
        text-align: right;
        .followed {
          @include btn-selected(90px, 35px);
          padding-top: 4px;
        }
        .follow {
          @include btn-unselected(60px, 35px);
          padding-top: 4px;
        }
      }
    }
  }
}
</style>
