import Vue from "vue";
import Vuex from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},
    userProfile: {},
    isAuthenticated: false,
    token: "",
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 透過 API 取得的currentUser
        ...currentUser,
      };
      state.isAuthenticated = true;
      state.token = localStorage.getItem("token");
    },
    revokeAuthenication(state) {
      state.currentUser = {};
      state.isAuthenticated = false;
      state.token = "";
      localStorage.removeItem("token");
    },
    getUserProfile(state, userProfile) {
      state.userProfile = {
        ...state.userProfile,
        // 透過API取得的 userProfile
        ...userProfile,
      };
    },
  },
  // 透過 API 請求資料
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser();

        if (data.status === "error") {
          throw new Error(data.message);
        }

        commit("setCurrentUser", data.data);

        return true;
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "warning",
          title: "驗證失敗,請重新登入",
        });
        commit("revokeAuthenication");
        return false;
      }
    },
    async fetchUserInfo({ commit }, payload) {
      try {
        const { payload: id } = payload;
        const { data } = await usersAPI.getUserInfo(id);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        commit("getUserProfile", data);
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: error.message,
        });
      }
    },
  },
  modules: {},
});
