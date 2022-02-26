import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},
    isAuthenticated: false,
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 透過 API 取得的currentUser
        ...currentUser,
      };

      state.isAuthenticated = true;
    },
  },
  actions: {},
  modules: {},
});
