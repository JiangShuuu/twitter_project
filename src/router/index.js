import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import signIn from "../views/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/signIn",
  },
  {
    path: "/signIn",
    name: "sign-in",
    component: signIn,
  },
  {
    path: "/signUp",
    name: "sign-up",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/Setting.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/Users.vue"),
    redirect: "/users/self",
    children: [
      {
        path: "self",
        name: "self",
        component: () => import("../components/TweetsList.vue"),
      },
      {
        path: "reply",
        name: "reply",
        component: () => import("../components/TweetsReplyList.vue"),
      },
      {
        path: "like",
        name: "like",
        component: () => import("../components/TweetsLikeList.vue"),
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/Followers.vue"),
    redirect: "/user/following",
    children: [
      {
        path: "following",
        name: "following",
        component: () => import("../components/Following.vue"),
      },
      {
        path: "follows",
        name: "follows",
        component: () => import("../components/Follows.vue"),
      },
    ],
  },
  {
    path: "/other",
    name: "other",
    component: () => import("../views/Other.vue"),
    redirect: "/other/self/:id",
    children: [
      {
        path: "self/:id",
        name: "other-self",
        component: () => import("../components/TweetsList.vue"),
      },
      {
        path: "reply/:id",
        name: "other-reply",
        component: () => import("../components/TweetsReplyList.vue"),
      },
      {
        path: "like/:id",
        name: "other-like",
        component: () => import("../components/TweetsLikeList.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin.vue"),
    redirect: "/admin/tweetList",
    children: [
      {
        path: "tweetList",
        name: "tweet-list",
        component: () => import("../components/AdminTweetList.vue"),
      },
      {
        path: "userList",
        name: "user-list",
        component: () => import("../components/AdminUserList.vue"),
      },
    ],
  },
  {
    path: "/adminSignIn",
    name: "admin-sign-in",
    component: () => import("../views/AdminSignIn.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/Main.vue"),
  },
  {
    path: "/replyList",
    name: "reply-list",
    component: () => import("../views/ReplyList.vue"),
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
