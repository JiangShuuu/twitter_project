import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getCurrentUser() {
    return apiHelper.get("api/current_user", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  settingUserAccount(id) {
    return apiHelper.put(`api/users/${id}/setting`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getUserInfo(id) {
    return apiHelper.get(`api/users/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getUserTweet(id) {
    return apiHelper.get(`api/users/${id}/tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getUserReply(id) {
    return apiHelper.get(`api/users/${id}/replied_tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getUserLikes(id) {
    return apiHelper.get(`api/users/${id}/likes`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getUsersTop() {
    return apiHelper.get("api/users/top", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  }
};
