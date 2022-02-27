import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import signIn from "../views/SignIn.vue";
import store from "./../store";

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
    path: "/users/:id",
    name: "users",
    component: () => import("../views/Users.vue"),
    redirect: "/users/:id/self",
    children: [
      {
        path: "/users/:id/self",
        name: "self",
        component: () => import("../components/TweetsList.vue"),
      },
      {
        path: "/users/:id/reply",
        name: "reply",
        component: () => import("../components/TweetsReplyList.vue"),
      },
      {
        path: "/users/:id/reply",
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

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("token");
  const tokenInStore = store.state.token;

  let isAuthenticated = store.state.isAuthenticated;

  // 有 token 的情況下，才向後端驗證
  if (token && token !== tokenInStore) {
    isAuthenticated = await store.dispatch("fetchCurrentUser");
  }

  const pathsWithoutAuthentication = ["sign-in", "sign-up", "admin-sign-in"];

  // 若 token 無效，則轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next("/signIn");
    return;
  }

  // 若 token 有效，則轉址到首頁
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next("/main");
    return;
  }

  next();
});

export default router;
