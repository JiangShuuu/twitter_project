<template>
  <section class="admin_tweet_list">
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
          <span class="tweet_info_content_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            expedita rem dolores obcaecati numquam doloremque deserunt quis
            sequi amet soluta?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Totam expedita rem dolores obcaecati numquam doloremque
            deserunt quis sequi amet soluta?
          </span>
        </div>
      </div>
      <div class="tweet_delete">
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
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
          <span class="tweet_info_content_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            expedita rem dolores obcaecati numquam doloremque deserunt quis
            sequi amet soluta?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Totam expedita rem dolores obcaecati numquam doloremque
            deserunt quis sequi amet soluta?
          </span>
        </div>
      </div>
      <div class="tweet_delete">
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
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
          <span class="tweet_info_content_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            expedita rem dolores obcaecati numquam doloremque deserunt quis
            sequi amet soluta?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Totam expedita rem dolores obcaecati numquam doloremque
            deserunt quis sequi amet soluta?
          </span>
        </div>
      </div>
      <div class="tweet_delete">
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.tweet {
  border: 1px solid $light-gray;
  height: 80px;
  @include flexCenter;
  &_avatar {
    width: 80px;
    @include flexCenter;
    align-items: flex-start;
    &_img {
      width: 50px;
      height: 50px;
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
    &_content {
      &_text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }
  &_delete {
    margin: 19.5px;
    cursor: pointer;
    .fa-xmark {
      font-size: 15px;
    }
  }
}
</style>
