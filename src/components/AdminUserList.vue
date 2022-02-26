<template>
  <section class="admin_user_list">
    <div class="users">
      <div class="user" v-for="user in users" :key="user.id">
        <div class="user_image">
          <div class="user_image_background">
            <img :src="user.cover" alt="" />
          </div>
          <div class="user_image_avatar">
            <img :src="user.avatar" alt="" />
          </div>
        </div>
        <div class="user_detail">
          <span class="user_detail_name">{{ user.name }}</span>
          <span class="user_detail_account">@{{ user.account }}</span>
          <div class="user_detail_icon">
            <li class="user_detail_icon_comment">
              <i class="icon fa-regular fa-comment"></i>
              <span class="num">{{ user.replyCount }}k</span>
            </li>
            <li class="user_detail_icon_heart">
              <i class="icon fa-regular fa-heart"></i>
              <span class="num">{{ user.likeCount }}k</span>
            </li>
          </div>
          <div class="user_detail_area">
            <span class="follows"
              ><router-link to="/user/following" class="num"
                >{{ user.followingCount }}個</router-link
              >
              跟隨中</span
            >
            <span class="follower"
              ><router-link to="/user/follows" class="num"
                >{{ user.followerCount }}位</router-link
              >
              跟隨者</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BetterScroll from "better-scroll";

const dummyUser = [
  {
    id: 14,
    account: "user1",
    name: "user1",
    avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    cover: "https://loremflickr.com/720/240?lock=66.1468994340782",
    introduction:
      "Nostrum dolorum deleniti in quos soluta ut ea. Id provident aspernatur. Aspernatur vel quidem molestiae repellendus aut rem nam quae. Dolorum voluptatibus ipsam",
    followerCount: 0,
    followingCount: 1,
    likeCount: 0,
    replyCount: 63,
  },
  {
    id: 24,
    account: "user2",
    name: "user2",
    avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    cover: "https://loremflickr.com/720/240?lock=7.999635100606283",
    introduction: "omnis in maiores",
    followerCount: 0,
    followingCount: 0,
    likeCount: 0,
    replyCount: 51,
  },
  {
    id: 34,
    account: "user3",
    name: "user3",
    avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    cover: "https://loremflickr.com/720/240?lock=98.85354578000687",
    introduction: "Necessitatibus in quia quo.",
    followerCount: 0,
    followingCount: 0,
    likeCount: 0,
    replyCount: 65,
  },
  {
    id: 44,
    account: "user4",
    name: "user4",
    avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    cover: "https://loremflickr.com/720/240?lock=43.09008960687528",
    introduction: "Ea itaque fuga illum inventore nihil.",
    followerCount: 0,
    followingCount: 0,
    likeCount: 0,
    replyCount: 62,
  },
  {
    id: 54,
    account: "user5",
    name: "user5",
    avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    cover: "https://loremflickr.com/720/240?lock=86.79797138982421",
    introduction:
      "Sunt voluptatem in eum. Sed totam minus enim laudantium. Eos quo sunt est dolores.",
    followerCount: 0,
    followingCount: 0,
    likeCount: 0,
    replyCount: 55,
  },
  {
    id: 74,
    account: "user1",
    name: "user1",
    avatar: "https://loremflickr.com/240/240?lock=90.86163989828067",
    cover: "https://loremflickr.com/720/240?lock=71.77439668901305",
    introduction: "in",
    followerCount: 0,
    followingCount: 0,
    likeCount: 0,
    replyCount: 38,
  },
  {
    id: 84,
    account: "user2",
    name: "user2",
    avatar: "https://loremflickr.com/240/240?lock=5.860655932201774",
    cover: "https://loremflickr.com/720/240?lock=15.916987691035132",
    introduction:
      "Est id enim aspernatur exercitationem quibusdam aut sequi a. Tenetur rerum possimus incidunt omnis dolores perferendis facilis. Voluptas magnam iusto quam minim",
    followerCount: 0,
    followingCount: 0,
    likeCount: 0,
    replyCount: 31,
  },
  {
    id: 94,
    account: "user3",
    name: "user3",
    avatar: "https://loremflickr.com/240/240?lock=99.3794548329378",
    cover: "https://loremflickr.com/720/240?lock=4.823123325106748",
    introduction:
      "Et quia voluptates dolor quaerat minus ducimus. Cumque et dolores eos est eum fugit recusandae dicta. Delectus et dicta veritatis soluta odio cupiditate officii",
    followerCount: 0,
    followingCount: 0,
    likeCount: 0,
    replyCount: 31,
  },
  {
    id: 104,
    account: "user4",
    name: "user4",
    avatar: "https://loremflickr.com/240/240?lock=45.53352094014065",
    cover: "https://loremflickr.com/720/240?lock=93.51543987160066",
    introduction:
      "Deleniti tempora id quis est nisi molestiae vel alias qui.\nVoluptatem qui autem fugiat.\nNulla enim eum ut placeat.",
    followerCount: 0,
    followingCount: 0,
    likeCount: 0,
    replyCount: 33,
  },
  {
    id: 114,
    account: "user5",
    name: "user5",
    avatar: "https://loremflickr.com/240/240?lock=46.48722406131607",
    cover: "https://loremflickr.com/720/240?lock=23.817500066147957",
    introduction:
      "Quisquam et doloremque et eos perspiciatis doloremque. Et doloremque expedita sunt cum. Exercitationem molestias commodi. Alias omnis cum mollitia voluptatem om",
    followerCount: 0,
    followingCount: 0,
    likeCount: 0,
    replyCount: 39,
  },
  {
    id: 4,
    account: "root",
    name: "root",
    avatar: "https://loremflickr.com/240/240?lock=38.10467122792307",
    cover: "https://loremflickr.com/720/240?lock=59.004521365231824",
    introduction:
      "Cumque voluptas ducimus ut dolorum earum nisi impedit ratione architecto. Voluptatem consequuntur a enim. Sed asperiores fuga consequatur temporibus repellendus",
    followerCount: 1,
    followingCount: 0,
    likeCount: 0,
    replyCount: 0,
  },
  {
    id: 64,
    account: "root",
    name: "root",
    avatar: "https://loremflickr.com/240/240?lock=69.87737898272147",
    cover: "https://loremflickr.com/720/240?lock=88.88308007748631",
    introduction: "aut",
    followerCount: 0,
    followingCount: 0,
    likeCount: 0,
    replyCount: 0,
  },
];

export default {
  name: "AdminUserList",
  data() {
    return {
      users: {},
    };
  },
  mounted() {
    this.fetchUserList();
    setTimeout(() => {
      this.movefunction();
    }, 500);
  },
  methods: {
    fetchUserList() {
      this.users = dummyUser;
    },
    movefunction() {
      new BetterScroll(".admin_user_list", {
        mouseWheel: true, //開啟滑鼠滾動
        disableMouse: false, //關閉滑鼠拖動
        disableTouch: false, //關閉手指觸摸
        scrollX: true, //X軸滾動開啟
        click: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.admin_user_list {
  width: 100%;
  height: 95%;
  overflow: hidden;
}

.users {
  display: grid;
  margin: 15px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(314px, auto);
  grid-gap: 15px;
}
.user {
  border-radius: 10px;
  overflow: hidden;
  background: $light-gray;
  &_image {
    position: relative;
    &_background {
      height: 140px;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    &_avatar {
      width: 100px;
      height: 100px;
      border: 4px solid white;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      bottom: -35%;
      left: 50%;
      transform: translateX(-50%);
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
  &_detail {
    margin-top: 45px;
    @include flexCenter;
    flex-direction: column;
    &_name {
      font-size: 19px;
      font-weight: 900;
    }
    &_account {
      color: $mid-gray;
      font-size: 15px;
    }
    &_icon {
      display: flex;
      margin: 10px 0;
      &_comment {
        margin-right: 17px;
      }
      .fa-comment {
        color: $mid-gray;
        margin-right: 7px;
      }
      .fa-heart {
        color: $mid-gray;
        margin-right: 7px;
      }
      .num {
        font-size: 15px;
      }
    }
    &_area {
      span {
        font-size: 15px;
      }
      .follows {
        color: $mid-gray;
        margin-right: 5px;
      }
      .follower {
        color: $mid-gray;
      }
      .num {
        color: black;
      }
    }
  }
}
</style>
