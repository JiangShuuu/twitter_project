import { apiHelper } from "../utils/helpers";

export default {
  getTweetList() {
    return apiHelper.get(`api/admin/tweets`);
  },
  getUserList() {
    return apiHelper.get(`api/admin/users`);
  },
  deleteTweet(tweetId) {
    return apiHelper.delete(`api/admin/tweets/${tweetId}`);
  },
};
