<template>
  <section class="following">
    <div class="following-content">
      <div class="following-list">
        <img
          src="../assets/image/Photo.png"
          alt="avatar on screen"
          class="following-list__avatar"
        />
        <div class="following-item">
          <div class="following-title">
            <span class="following-title__name">Marvin McKinney</span>
            <span class="following-title__account">@MariaReyes</span>
            <!-- <button class="following-title__followed">正在跟隨</button> -->
            <button class="following-title__follow">跟隨</button>
          </div>
          <p class="following-item__description">
            Lorem Remmollitia assumenda itaque asperiores, deserunt necessitatibus.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.following {
  border-left: 1px solid $dividerColor;
  border-right: 1px solid $dividerColor;
  border-bottom: 1px solid $dividerColor;
}

.following-content {
  border-top: 1px solid $dividerColor;
  &:last-child {
    border-bottom: none;
  }
  .following-list {
    padding: 5px 0px 0px 15px;
    height: 105px;
    display: flex;
    align-items: flex-start;
    &__avatar {
      margin-top: 5px;
      margin-right: 10px;
    }
    .following-title {
      position: relative;
      display: flex;
      flex-direction: column;
      &__name,
      &__description {
        font-size: 15px;
        color: $black;
        font-weight: bold;
      }
      &__description {
        margin-top: 5px;
      }
      &__name {
        font-weight: 700;
      }
      &__account {
        font-size: 15px;
        color: $mid-gray;
      }
      &__followed,
      &__follow {
        position: absolute;
        border: none;
        top: 5px;
        right: 15px;
        @include flexCenter;
        padding-top: 2px;
      }
      &__followed {
        @include btn-selected(90px, 25px);
        font-weight: 500;
      }
      &__follow {
        @include btn-unselected(60px, 25px);
        font-weight: 500;
        background: white;
      }

    }
  }
}
</style>