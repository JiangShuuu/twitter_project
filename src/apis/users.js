import { apiHelper } from "../utils/helpers";

export default {
  getCurrentUser() {
    return apiHelper.get("api/current_user");
  },
  settingUserAccount(id, formData) {
    return apiHelper.put(`api/users/${id}/setting`, formData);
  },
  getUserInfo(id) {
    return apiHelper.get(`api/users/${id}`);
  },
  getUserTweet(id) {
    return apiHelper.get(`api/users/${id}/tweets`);
  },
  getUserReply(id) {
    return apiHelper.get(`api/users/${id}/replied_tweets`);
  },
  getUserLikes(id) {
    return apiHelper.get(`api/users/${id}/likes`);
  },
  getUsersTop() {
    return apiHelper.get("api/users/top");
  },
  // 正在追隨頁面
  getUserFollowing(id) {
    return apiHelper.get(`api/users/${id}/followings`);
  },
  // 追隨者頁面
  getUserFollowers(id) {
    return apiHelper.get(`api/users/${id}/followers`);
  },
  addFollow({ id }) {
    return apiHelper.post("api/followships", { id });
  },
  deleteFollow({ userId }) {
    return apiHelper.delete(`api/followships/${userId}`);
  },
  editUserInfo(id, formData) {
    return apiHelper.put(`api/users/${id}`, formData);
  },
};
