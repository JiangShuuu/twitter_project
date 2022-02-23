<template>
  <section class="tweets">
    <div class="tweet">
      <div class="tweet_avatar">
        <div class="tweet_avatar_img">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
        </div>
      </div>
      <div class="tweet_info">
        <div class="tweet_info_title">
          <div class="tweet_info_title_name">John Doe</div>
          <div class="tweet_info_title_account">@heyjohn</div>
          <div class="tweet_info_title_dot">‧</div>
          <div class="tweet_info_title_date">3小時</div>
        </div>
        <div class="tweet_info_content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          expedita rem dolores obcaecati numquam doloremque deserunt quis sequi
          amet soluta?
        </div>
        <div class="tweet_info_icon">
          <ul class="tweet_info_icon_reply">
            <li class="commemt_btn">
              <img src="../assets/image/comment.png" alt="" />
            </li>
            <span class="num">13</span>
          </ul>

          <ul class="tweet_info_icon_like">
            <li class="like_btn">
              <img src="../assets/image/heart.png" alt="" />
            </li>
            <span class="num">76</span>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.tweet {
  border: 1px solid $light-gray;
  height: 145px;
  display: flex;
  &_avatar {
    width: 80px;
    @include flexCenter;
    align-items: flex-start;
    &_img {
      width: 50px;
      height: 50px;
      margin-top: 13px;
      overflow: hidden;
      border-radius: 50%;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
  &_info {
    flex: 1;
    padding: 10px 0;
    &_title {
      @include flexCenter;
      justify-content: flex-start;
      &_name {
        font-size: 15px;
        font-weight: 700;
        margin-right: 5px;
      }
      &_account {
        font-size: 15px;
        color: $mid-gray;
      }
      &_dot {
        color: $mid-gray;
      }
      &_date {
        font-size: 15px;
        color: $mid-gray;
      }
    }
    &_icon {
      margin-top: 10px;
      display: flex;
      img {
        width: 15px;
        height: 15px;
      }
      &_reply {
        display: flex;
        align-items: flex-end;
        margin-right: 51px;
        color: $mid-gray;
      }
      &_like {
        display: flex;
        align-items: flex-end;
        color: $mid-gray;
      }
      .num {
        margin-left: 11px;
        font-size: 13px;
      }
    }
  }
}
</style>
