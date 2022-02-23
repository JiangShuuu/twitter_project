<template>
  <div class="main-content">
    <div class="tweets-header">
      <h2 class="tweets-title">首頁</h2>
      <div class="tweets-create">
        <img :src="user.avatar" alt="avatar on screen" class="tweets-create__avatar" />
        <textarea
          name="mytext"
          rows="6"
          cols="40"
          maxlength="140"
          class="tweets-create__text"
          placeholder="有什麼新鮮事?"
          required
        >
        </textarea>
        <button class="btn tweets-create__btn">推文</button>
      </div>
    </div>
    <div class="following-content">
      <div class="following-list">
        <img
          src="../assets/image/Photo.png"
          alt="avatar on screen"
          class="following-list__avatar"
        />
        <div class="following-item">
          <span class="following-item__name">Apple</span>
          <span class="following-item__account">@apple</span>
          <span class="following-item__icon">&#8226;</span>
          <span class="following-item__date">3小時</span>
          <p class="following-item__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            mollitia assumenda itaque asperiores, deserunt necessitatibus
            doloremque libero provident dolores similique?
          </p>
          <div class="following-icons">
            <div class="icons">
              <i class="icon fa-regular fa-comment"></i>
              <span class="icons__reply-count">13</span>
            </div>
            <div class="icons">
              <i class="icon fa-regular fa-heart"></i>
              <span class="icons__like-count">76</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="following-content">
      <div class="following-list">
        <img
          src="../assets/image/Photo.png"
          alt="avatar on screen"
          class="following-list__avatar"
        />
        <div class="following-item">
          <span class="following-item__name">L'Oréal</span>
          <span class="following-item__account">@Loreal</span>
          <span class="following-item__icon">&#8226;</span>
          <span class="following-item__date">10小時</span>
          <p class="following-item__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            mollitia assumenda itaque asperiores, deserunt necessitatibus
            doloremque libero provident dolores similique?
          </p>
          <div class="following-icons">
            <div class="icons">
              <i class="icon fa-regular fa-comment"></i>
              <span class="icons__reply-count">15</span>
            </div>
            <div class="icons">
              <i class="icon fa-regular fa-heart"></i>
              <span class="icons__like-count">42</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="following-content">
      <div class="following-list">
        <img
          src="../assets/image/Photo.png"
          alt="avatar on screen"
          class="following-list__avatar"
        />
        <div class="following-item">
          <span class="following-item__name">Mary Jane</span>
          <span class="following-item__account">@mjjane</span>
          <span class="following-item__icon">&#8226;</span>
          <span class="following-item__date">6月23日</span>
          <p class="following-item__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            mollitia assumenda itaque asperiores, deserunt necessitatibus
            doloremque libero provident dolores similique?
          </p>
          <div class="following-icons">
            <div class="icons">
              <i class="icon fa-regular fa-comment"></i>
              <span class="icons__reply-count">17</span>
            </div>
            <div class="icons">
              <i class="icon fa-regular fa-heart"></i>
              <span class="icons__like-count">46</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="following-content">
      <div class="following-list">
        <img
          src="../assets/image/Photo.png"
          alt="avatar on screen"
          class="following-list__avatar"
        />
        <div class="following-item">
          <span class="following-item__name">Starbucks</span>
          <span class="following-item__account">@starbucks</span>
          <span class="following-item__icon">&#8226;</span>
          <span class="following-item__date">6月24日</span>
          <p class="following-item__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            mollitia assumenda itaque asperiores, deserunt necessitatibus
            doloremque libero provident dolores similique?
          </p>
          <div class="following-icons">
            <div class="icons">
              <i class="icon fa-regular fa-comment"></i>
              <span class="icons__reply-count">22</span>
            </div>
            <div class="icons">
              <i class="icon fa-regular fa-heart"></i>
              <span class="icons__like-count">25</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="following-content">
      <div class="following-list">
        <img
          src="../assets/image/Photo.png"
          alt="avatar on screen"
          class="following-list__avatar"
        />
        <div class="following-item">
          <span class="following-item__name">Louis Vuitton</span>
          <span class="following-item__account">@LouisV</span>
          <span class="following-item__icon">&#8226;</span>
          <span class="following-item__date">6月25日</span>
          <p class="following-item__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            mollitia assumenda itaque asperiores, deserunt necessitatibus
            doloremque libero provident dolores similique?
          </p>
          <div class="following-icons">
            <div class="icons">
              <i class="icon fa-regular fa-comment"></i>
              <span class="icons__reply-count">23</span>
            </div>
            <div class="icons">
              <i class="icon fa-regular fa-heart"></i>
              <span class="icons__like-count">29</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="following-content">
      <div class="following-list">
        <img
          src="../assets/image/Photo.png"
          alt="avatar on screen"
          class="following-list__avatar"
        />
        <div class="following-item">
          <span class="following-item__name">Gillette</span>
          <span class="following-item__account">@Gilletter</span>
          <span class="following-item__icon">&#8226;</span>
          <span class="following-item__date">6月26日</span>
          <p class="following-item__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            mollitia assumenda itaque asperiores, deserunt necessitatibus
            doloremque libero provident dolores similique?
          </p>
          <div class="following-icons">
            <div class="icons">
              <i class="icon fa-regular fa-comment"></i>
              <span class="icons__reply-count">25</span>
            </div>
            <div class="icons">
              <i class="icon fa-regular fa-heart"></i>
              <span class="icons__like-count">57</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="following-content">
      <div class="following-list">
        <img
          src="../assets/image/Photo.png"
          alt="avatar on screen"
          class="following-list__avatar"
        />
        <div class="following-item">
          <span class="following-item__name">The Walt Disney Company</span>
          <span class="following-item__account">@Disney</span>
          <span class="following-item__icon">&#8226;</span>
          <span class="following-item__date">6月27日</span>
          <p class="following-item__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            mollitia assumenda itaque asperiores, deserunt necessitatibus
            doloremque libero provident dolores similique?
          </p>
          <div class="following-icons">
            <div class="icons">
              <i class="icon fa-regular fa-comment"></i>
              <span class="icons__reply-count">28</span>
            </div>
            <div class="icons">
              <i class="icon fa-regular fa-heart"></i>
              <span class="icons__like-count">13</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tweets",
  data() {
    return {
      user: {
        avatar: "https://randomuser.me/api/portraits/men/93.jpg",
      },
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.main-content {
  border-left: 1px solid $dividerColor;
  border-right: 1px solid $dividerColor;
  height: 100%;
}

.tweets-header {
  margin-top: 17px;
  .tweets-title {
    @include font-w700(18px);
    margin: 0px 0 15px 15px;
  }
  .tweets-create {
    position: relative;
    border-top: 1px solid $dividerColor;
    height: 130px;
    display: flex;
    align-items: flex-start;
    padding: 10px 0px 0px 15px;
    border-bottom: 10px solid $dividerColor;
    &__text {
      font-size: 18px;
      width: 75%;
      height: 80%;
      resize: none;
      border: none;
      margin-top: 10px;
      &:focus {
        outline: none;
      }
    }
    &__avatar {
      width: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 10px;
    }
    &__btn {
      position: absolute;
      @include btn-selected(66px, 38px);
      text-align: center;
      right: 15px;
      bottom: 10px;
    }
  }
}
.following-content {
  border-bottom: 1px solid $dividerColor;
  &:last-child {
    border-bottom: none;
  }
  .following-list {
    padding: 10px 0px 0px 15px;
    height: 146px;
    display: flex;
    align-items: flex-start;
    &__avatar {
      margin-top: 5px;
      margin-right: 10px;
    }
    .following-item {
      margin-right: 10px;
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
      &__account,
      &__date {
        font-size: 15px;
        color: $mid-gray;
      }
      .following-icons {
        font-size: 15px;
        color: $mid-gray;
        width: 130px;
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
