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
