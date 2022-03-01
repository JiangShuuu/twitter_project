import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import signIn from "../views/SignIn.vue";
import store from "./../store";

Vue.use(VueRouter);

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser;
  if (currentUser && currentUser.role !== "admin") {
    next("/not-found");
    return;
  }
  next();
};

const authorizeIsUser = (to, from, next) => {
  const currentUser = store.state.currentUser;
  if (currentUser && currentUser.role !== "user") {
    next("/admin");
    return;
  }
  next();
};

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
    beforeEnter: authorizeIsUser,
  },
  {
    path: "/users/:id",
    name: "users",
    component: () => import("../views/Users.vue"),
    redirect: "/users/:id/self",
    beforeEnter: authorizeIsUser,
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
    path: "/user/:id",
    name: "user",
    component: () => import("../views/Followers.vue"),
    redirect: "/user/:id/following",
    beforeEnter: authorizeIsUser,
    children: [
      {
        path: "/user/:id/following",
        name: "following",
        component: () => import("../components/Following.vue"),
      },
      {
        path: "/user/:id/follows",
        name: "follows",
        component: () => import("../components/Follows.vue"),
      },
    ],
  },
  {
    path: "/other/:id",
    name: "other",
    component: () => import("../views/Other.vue"),
    redirect: "/other/:id/self",
    beforeEnter: authorizeIsUser,
    children: [
      {
        path: "/other/:id/self",
        name: "other-self",
        component: () => import("../components/TweetsList.vue"),
      },
      {
        path: "/other/:id/reply",
        name: "other-reply",
        component: () => import("../components/TweetsReplyList.vue"),
      },
      {
        path: "/other/:id/like",
        name: "other-like",
        component: () => import("../components/TweetsLikeList.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin.vue"),
    beforeEnter: authorizeIsAdmin,
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
    beforeEnter: authorizeIsUser,
  },
  {
    path: "/replyList/:id",
    name: "reply-list",
    component: () => import("../views/ReplyList.vue"),
    beforeEnter: authorizeIsUser,
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
