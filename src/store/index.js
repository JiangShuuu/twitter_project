import Vue from "vue";
import Vuex from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},
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
  },
  modules: {},
});
