<template>
  <div class="main-content">
    <div class="tweets-header">
      <i class="fa-solid fa-arrow-left"></i>
      <h2 class="tweets-title">推文</h2>
    </div>
    <div class="following-content">
      <div class="following-list">
        <img
          src="../assets/image/Photo.png"
          alt="avatar on screen"
          class="following-list__avatar"
        />
        <div class="following-title">
          <span class="following-title__name">Apple</span>
          <span class="following-title__account">@apple</span>
        </div>
      </div>
      <div class="following-item">
        <p class="following-item__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia
          assumenda itaque asperiores, deserunt necessitatibus doloremque libero

        </p>
        <span class="following-item__time">上午 10:05</span>
        <span class="following-item__icon">&#8226;</span>
        <span class="following-item__date">2020年6月10日</span>
      </div>
    </div>
    <div class="comments">
      <div class="comments-list">
        <span class="comments-list__num">34</span>
        <span class="comments-list__title">回覆</span>
      </div>
      <div class="likes">
        <span class="likes__num">808</span>
        <span class="like__title">喜歡次數</span>
      </div>
    </div>
    <div class="reply-icon">
      <i class="reply-icon__comment fa-regular fa-comment"></i>
      <i class="reply-icon__heart fa-regular fa-heart"></i>
    </div>
    <div class="reply">
      <div class="reply-list">
        <img
          src="../assets/image/Photo.png"
          alt="avatar on screen"
          class="reply-list__avatar"
        />
        <div class="reply-item">
          <span class="reply-item__name">MaryJane</span>
          <span class="reply-item__account">@mjjane</span>
          <span class="reply-item__icon">&#8226;</span>
          <span class="reply-item__date">13小時</span>
          <div class="reply-detail">
            <span class="reply-detail__header">回覆</span>
            <span class="reply-detail__account">@apple</span>
          </div>
          <p class="reply-item__description">Great~</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.main-content {
  border-left: 1px solid $dividerColor;
  border-right: 1px solid $dividerColor;
  height: 100%;
  .tweets-header {
    padding-left: 15px;
    padding-top: 17px;
    display: flex;
    .fa-arrow-left {
      font-size: 18px;
    }
    .tweets-title {
      @include font-w700(18px);
      margin: 0px 0 15px 45px;
    }
  }
}

.following-content {
  border-top: 1px solid $dividerColor;
  padding: 15px 75px 0 15px;
}
.following-list {
  display: flex;
  align-items: center;
  justify-content: left;
  .following-title {
    margin-left: 10px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    &__name {
      font-weight: bold;
      color: $black;
    }
    &__account {
      color: $mid-gray ;
    }
  }
}
.following-item {
  &__description {
    font-size: 23px;
    font-weight: bold;
    color: $black;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  &__time,
  &__icon,
  &__date {
    font-size: 15px;
    color: $mid-gray;
    
  }

}

.comments {
  border-top: 1px solid $dividerColor;
  border-bottom: 1px solid $dividerColor;
  margin: 10px 20px;
  display: flex;
  gap: 20px;
  font-size: 19px; 
  padding: 21px 0;
  .comments-list__num,
  .likes__num {
    font-weight: bold;
    margin-right: 5px;
  }
  .comments-list__title,
  .like__title {
    color: $mid-gray;
  }
   
}
.reply-icon {
  border-bottom: 1px solid $dividerColor;
  padding: 4px 0 10px 20px;
  font-size: 30px;
  color: $mid-gray;
  &__comment {
    margin-right: 150px;
  }
}

.reply-list {
  border-bottom: 1px solid $dividerColor;
  padding: 10px 0 0 15px;
  height: 105px;
  display: flex;
  align-items: flex-start;
  &__avatar {
    margin-top: 5px;
    margin-right: 10px;
  }
  .reply-item {
    margin-right: 10px;
    &__name {
      margin-right: 5px;
    }
    &__name,
    &__description {
      font-size: 15px;
      color: $black;
      font-weight: 700;
    }
    &__description {
      margin-top: 3px;
      font-weight: 500;
    }
    &__account,
    &__date {
      font-size: 15px;
      color: $mid-gray;
    }
  }
  .reply-detail {
    margin-top: 5px;
    font-size: 15px;
    &__header {
      color: $mid-gray;
      margin-right: 5px;
    }
    &__account {
      color: $orange;
    }
  }
}
</style>