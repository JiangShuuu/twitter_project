<template>
  <div class="main-content">
    <div class="contents">
      <div class="contents_scroll">
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
                  <i
                    class="fa-regular fa-comment"
                    data-bs-toggle="modal"
                    data-bs-target="#createReplyModal"
                  ></i>
                  <span class="icons__reply-count">13</span>
                </div>
                <div class="icons_heart">
                  <div v-if="this.isLiked" @click="isLiked = !isLiked">
                    <li>
                      <i class="icon fa-solid fa-heart"></i>
                    </li>
                  </div>
                  <div v-else @click="isLiked = !isLiked">
                    <li>
                      <i class="icon fa-regular fa-heart"></i>
                    </li>
                  </div>
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
                  <i
                    class="icon fa-regular fa-comment"
                    data-bs-toggle="modal"
                    data-bs-target="#createReplyModal"
                  ></i>
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
    </div>
    <!-- model -->
    <CreateTweets :initial-user="user" />
    <ReplyModal :initial-user="user" />
  </div>
</template>
<script>
import CreateTweets from "../components/CreateTweet.vue";
import ReplyModal from "../components/ReplyModal.vue";
import BetterScroll from "better-scroll";

export default {
  name: "Tweets",
  components: {
    CreateTweets,
    ReplyModal,
  },
  data() {
    return {
      user: {
        avatar: "https://randomuser.me/api/portraits/men/93.jpg",
      },
      isLiked: false,
    };
  },
  mounted() {
    this.movefunction();
  },
  methods: {
    fetchTweets() {},
    movefunction() {
      new BetterScroll(".contents", {
        mouseWheel: true, //開啟滑鼠滾動
        disableMouse: false, //關閉滑鼠拖動
        disableTouch: false, //關閉手指觸摸
        scrollX: true, //X軸滾動開啟
        click: true,
      });
    },
    addLiked() {
      this.isLiked = true;
      console.log("add");
    },
    deleteLiked() {
      this.isLiked = false;
      console.log("delete");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.main-content {
  border-left: 1px solid $dividerColor;
  border-right: 1px solid $dividerColor;
  height: 85%;
}
.contents {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
        .icons {
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
.icons_heart {
  display: flex;
  margin-right: 10px;
  cursor: pointer;
}

/* 愛心效果試做

.icons {
  &__heart {
    position: relative;
    color: #aab8c2;
    cursor: pointer;
    &--checkbox {
      position: absolute;
      left: -100vw;
      
    }
    &--checkbox:checked + .icons__heart {
      color: #e2264d;
    }
  }
} */
</style>
