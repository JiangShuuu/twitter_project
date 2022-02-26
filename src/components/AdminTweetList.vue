<template>
  <section class="admin_tweet_list">
    <div class="tweets">
      <div class="tweet" v-for="tweet in allTweets" :key="tweet.id">
        <div class="tweet_avatar">
          <div class="tweet_avatar_img">
            <img :src="tweet.TweetAuthor.avatar" alt="" />
          </div>
        </div>
        <div class="tweet_info">
          <div class="tweet_info_title">
            <div class="tweet_info_title_name">
              {{ tweet.TweetAuthor.name }}
            </div>
            <div class="tweet_info_title_account">
              @{{ tweet.TweetAuthor.account }}
            </div>
            <div class="tweet_info_title_dot">‧</div>
            <div class="tweet_info_title_date">
              {{ tweet.updatedAt | fromNow }}
            </div>
          </div>
          <div class="tweet_info_content">
            <span class="tweet_info_content_text">
              {{ tweet.description }}
            </span>
          </div>
        </div>
        <div class="tweet_delete" @click="deleteTweet(tweet.id)">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BetterScroll from "better-scroll";
import { fromNowFilter } from "./../utils/mixins";

const dummyData = [
  {
    id: 1024,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Autem consequatur ut. Ut voluptates debitis quia m",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=90.86163989828067",
    },
  },
  {
    id: 514,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Sequi qui reprehenderit corporis qui inventore sin",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 1284,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "error",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=99.3794548329378",
    },
  },
  {
    id: 774,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "enim",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 1034,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Ut quibusdam in quia consectetur id minus accusamu",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=90.86163989828067",
    },
  },
  {
    id: 524,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Voluptatibus fuga dolore ut velit aut quia. Praese",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 1294,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "rerum",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=99.3794548329378",
    },
  },
  {
    id: 784,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Esse hic sunt voluptatum.",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 1044,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Doloremque ut quia dolorum quam cum omnis hic enim",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=90.86163989828067",
    },
  },
  {
    id: 534,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "facere",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 1304,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Vel veritatis distinctio quis eveniet sit.",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=45.53352094014065",
    },
  },
  {
    id: 794,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Fugiat unde quia numquam. Saepe culpa non ea sit p",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 1054,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Aperiam provident maiores facilis repudiandae dolo",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=90.86163989828067",
    },
  },
  {
    id: 544,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Sint harum et cum iusto sit fugit quis expedita. Q",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 1314,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Optio quasi earum dignissimos. Corrupti error labo",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=45.53352094014065",
    },
  },
  {
    id: 804,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Aut iste et suscipit maiores sapiente eius dolorib",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 1064,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Alias dolorem non voluptas.",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=90.86163989828067",
    },
  },
  {
    id: 554,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "illum",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 1324,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Iure totam excepturi quis et. Iusto alias reiciend",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=45.53352094014065",
    },
  },
  {
    id: 814,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Qui et maiores consequatur et ducimus consequatur.",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 1074,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "eligendi",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=90.86163989828067",
    },
  },
  {
    id: 564,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Eos eaque omnis excepturi autem sunt rerum sint au",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 1334,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Voluptas earum placeat esse omnis beatae quis omni",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=45.53352094014065",
    },
  },
  {
    id: 824,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "vitae numquam magni",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 1084,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Fugiat rem inventore sit ea sed aliquam aut. Tempo",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=90.86163989828067",
    },
  },
  {
    id: 574,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Ut corrupti libero iure et optio illo magni conseq",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 1344,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Voluptas at velit est voluptas perferendis. Quia v",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=45.53352094014065",
    },
  },
  {
    id: 834,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Eius in ipsam tempora omnis ex sit id possimus exc",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 1094,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "animi",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=90.86163989828067",
    },
  },
  {
    id: 584,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "consequatur",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 1354,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Blanditiis dolores at et explicabo qui at. Eum nih",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=45.53352094014065",
    },
  },
  {
    id: 844,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "perspiciatis",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 1104,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Quasi distinctio qui illum aut.\nVoluptatem nostrum",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=5.860655932201774",
    },
  },
  {
    id: 594,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Reiciendis consequatur soluta et iste ducimus sunt",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 1364,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "recusandae",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=45.53352094014065",
    },
  },
  {
    id: 854,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "tempore",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 1114,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Qui minima ullam iure ab quasi.",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=5.860655932201774",
    },
  },
  {
    id: 604,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "quis suscipit et",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 1374,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "ex veritatis laboriosam",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=45.53352094014065",
    },
  },
  {
    id: 864,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Modi nostrum at praesentium inventore asperiores. ",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 1124,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Deserunt totam in debitis natus voluptas ab itaque",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=5.860655932201774",
    },
  },
  {
    id: 614,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "deserunt quaerat modi",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 1384,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "minima",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=45.53352094014065",
    },
  },
  {
    id: 874,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Officiis iusto et doloribus ut repudiandae assumen",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 1134,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "delectus",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=5.860655932201774",
    },
  },
  {
    id: 624,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "sit",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 1394,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Unde odit quia. Consectetur dicta esse beatae sunt",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=45.53352094014065",
    },
  },
  {
    id: 884,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "sed",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 1144,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Praesentium ipsum id provident nostrum quia rem re",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=5.860655932201774",
    },
  },
  {
    id: 634,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Sed expedita corrupti commodi laboriosam ut. Autem",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 1404,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "quod debitis consequatur",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=46.48722406131607",
    },
  },
  {
    id: 894,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Aspernatur iure inventore repellat nihil nobis sun",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 1154,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Totam quasi architecto.",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=5.860655932201774",
    },
  },
  {
    id: 644,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Sit unde ullam nam sint. Doloribus a facere minus ",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 1414,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "sunt",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=46.48722406131607",
    },
  },
  {
    id: 904,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Quis vitae ullam sint.",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 1164,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "et vitae dicta",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=5.860655932201774",
    },
  },
  {
    id: 654,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "optio",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 1424,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "vero incidunt alias",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=46.48722406131607",
    },
  },
  {
    id: 914,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Nulla voluptates qui delectus iusto officiis iste ",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 1174,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "eaque illo qui",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=5.860655932201774",
    },
  },
  {
    id: 664,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Ex accusantium et atque.\nDolores voluptatum repell",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 1434,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "consequuntur",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=46.48722406131607",
    },
  },
  {
    id: 924,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Nesciunt vel ea nostrum molestias labore modi nihi",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 1184,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Nostrum ullam velit libero quidem cupiditate animi",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=5.860655932201774",
    },
  },
  {
    id: 674,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Eius aut deleniti.\nError iure sed saepe necessitat",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 1444,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Voluptatem ut officiis fugit ut ex magnam et. Volu",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=46.48722406131607",
    },
  },
  {
    id: 934,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Cum itaque amet impedit. Sit soluta sit accusamus ",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 1194,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Natus pariatur nisi quam aut aliquam nam nam accus",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=5.860655932201774",
    },
  },
  {
    id: 684,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Magni reprehenderit ut architecto sed modi. Quae l",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 1454,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Est similique quasi dolore. Consectetur ea quo vol",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=46.48722406131607",
    },
  },
  {
    id: 944,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Et ullam deserunt tempore perspiciatis consectetur",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 1204,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Voluptas natus perspiciatis voluptatum. Sed et vel",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=99.3794548329378",
    },
  },
  {
    id: 694,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Voluptatem voluptate et odit eum quas sed maxime.\n",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 1464,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Autem molestiae fugiat tenetur dolore occaecati mo",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=46.48722406131607",
    },
  },
  {
    id: 954,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Ex doloribus accusantium reprehenderit possimus no",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 1214,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Minima cum iusto repudiandae itaque atque et fugit",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=99.3794548329378",
    },
  },
  {
    id: 704,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "nam dolores consequatur",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 1474,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Animi aut vel suscipit eos. Sit qui ipsum quis off",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=46.48722406131607",
    },
  },
  {
    id: 964,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "A autem dolorem cum repudiandae. Expedita numquam ",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 1224,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Debitis non aut. Soluta et alias. Quam non quidem ",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=99.3794548329378",
    },
  },
  {
    id: 714,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Consectetur eum non et quo.\nEst eius sit minus dol",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 1484,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "sed quis voluptatem",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=46.48722406131607",
    },
  },
  {
    id: 974,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Totam sit libero cum minima quisquam adipisci. Ea ",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 1234,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Quaerat accusamus occaecati accusamus recusandae e",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=99.3794548329378",
    },
  },
  {
    id: 724,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Et nostrum eaque est autem doloribus officiis.\nUt ",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 1494,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "unde illum odio",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=46.48722406131607",
    },
  },
  {
    id: 984,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "blanditiis repellat maiores",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 1244,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Esse sequi est ex sit eum. Fuga officia eos est. R",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=99.3794548329378",
    },
  },
  {
    id: 734,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Nemo nam cupiditate recusandae quaerat iure ipsa a",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 994,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Asperiores qui veritatis. Illum recusandae dolorem",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 1254,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Sed sint veritatis rerum. Occaecati necessitatibus",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=99.3794548329378",
    },
  },
  {
    id: 744,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Illo omnis consequatur et molestiae quas iusto vel",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 1004,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Eaque beatae id et molestiae delectus. Aliquid exp",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=90.86163989828067",
    },
  },
  {
    id: 1264,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Quam consequuntur magni animi voluptas eveniet ut ",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=99.3794548329378",
    },
  },
  {
    id: 754,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Quasi consequatur numquam totam quia excepturi sun",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 1014,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Exercitationem voluptas exercitationem voluptas du",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=90.86163989828067",
    },
  },
  {
    id: 504,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Ducimus ut earum et animi iusto ex. Id laudantium ",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 1274,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Voluptate dolorem accusantium fuga consequatur com",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=99.3794548329378",
    },
  },
  {
    id: 764,
    updatedAt: "2022-02-25T21:03:43.000Z",
    description: "Voluptatem maiores non. Necessitatibus unde accusa",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 4,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Similique ratione perferendis. Iusto atque est dol",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 264,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Numquam recusandae exercitationem libero provident",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 14,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Consequatur sit vero eveniet ad cupiditate atque e",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 274,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Laborum sit aliquam voluptatem mollitia est repreh",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 24,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Ullam itaque fugit aliquid ut sunt esse rerum sint",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 284,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Qui temporibus quod minima aliquam dolores sit qui",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 34,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Illo recusandae non dicta dignissimos sunt. Volupt",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 294,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Nulla suscipit natus.",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 44,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Sunt in placeat fuga natus quos laudantium tempori",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 304,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Enim et non. Dolore omnis mollitia. Voluptatem qui",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 314,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Dolorum officiis a. Commodi id magnam iste ex ut i",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 64,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "In quos vero dolorem nobis incidunt voluptate nihi",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 324,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "dolorem",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 74,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Mollitia hic quia expedita ut tenetur atque ab con",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 334,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Tempore tempore enim quidem sit tempora repellendu",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 84,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Voluptas inventore in sapiente vel quam praesentiu",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 344,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "quo voluptates unde",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 94,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Est delectus ipsam recusandae suscipit incidunt. Q",
    TweetAuthor: {
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/240/240?lock=27.600823778845516",
    },
  },
  {
    id: 354,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Libero porro doloribus dolore et.",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 364,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Laudantium repellendus voluptas officiis eaque rat",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 114,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Consequatur officia illo voluptatem est non itaque",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 374,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Voluptatum est amet molestiae corrupti voluptate.\n",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 124,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Sunt alias asperiores laudantium fuga ut.",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 384,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Aperiam et iure sequi dolorum esse. Pariatur optio",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 134,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Quis debitis culpa adipisci. Amet sit perspiciatis",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 394,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "reprehenderit veritatis laboriosam",
    TweetAuthor: {
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/240/240?lock=6.855420303759096",
    },
  },
  {
    id: 144,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Saepe eos ullam odit iure enim unde veniam. Dolore",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 404,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "voluptates voluptatibus sapiente",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 154,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Dolorum impedit asperiores distinctio molestiae qu",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 414,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Illo ut et porro labore. At voluptatum autem conse",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 164,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Qui voluptatibus nobis. Quam quas est nisi non dol",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 424,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Dignissimos aut iure. Cumque recusandae est. Saepe",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 174,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "At omnis ab harum impedit ab dolorum dignissimos e",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 434,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "fugit",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 184,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Sed aspernatur enim eos est est.",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 444,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "deleniti",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 194,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Aut animi expedita aut quam recusandae.",
    TweetAuthor: {
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/240/240?lock=22.187925186847846",
    },
  },
  {
    id: 454,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Blanditiis est unde. Vitae eos ea non est sed perf",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 204,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Iusto qui fugiat ut praesentium ut id impedit. Dol",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 464,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Magnam inventore ducimus. Totam eveniet corrupti. ",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 214,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Odio aut molestias sit quis dolorem.\nVeritatis mol",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 474,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "veritatis dolor accusamus",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 224,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "facere",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 484,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Blanditiis corporis tenetur ratione non illum ab o",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 234,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "Qui natus quis. Laboriosam commodi id odit veniam ",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 494,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "officia",
    TweetAuthor: {
      name: "user5",
      account: "user5",
      avatar: "https://loremflickr.com/240/240?lock=81.29394935292828",
    },
  },
  {
    id: 244,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "ut dolorem quis",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
  {
    id: 254,
    updatedAt: "2022-02-25T14:52:03.000Z",
    description: "iste et harum",
    TweetAuthor: {
      name: "user3",
      account: "user3",
      avatar: "https://loremflickr.com/240/240?lock=72.08076661917084",
    },
  },
];

export default {
  name: "adminTweetList",
  mixins: [fromNowFilter],
  data() {
    return {
      allTweets: {},
    };
  },
  mounted() {
    this.fetchAllTweets();
    setTimeout(() => {
      this.movefunction();
    }, 500);
  },
  methods: {
    fetchAllTweets() {
      this.allTweets = dummyData;
    },
    movefunction() {
      new BetterScroll(".admin_tweet_list", {
        mouseWheel: true, //開啟滑鼠滾動
        disableMouse: false, //關閉滑鼠拖動
        disableTouch: false, //關閉手指觸摸
        scrollX: true, //X軸滾動開啟
        click: true,
      });
    },
    deleteTweet(id) {
      this.allTweets = this.allTweets.filter((item) => item.id !== id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.admin_tweet_list {
  width: 100%;
  height: 95%;
  overflow: hidden;
}

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
      color: $mid-gray;
      font-size: 15px;
    }
  }
}
</style>
