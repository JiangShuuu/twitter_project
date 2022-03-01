import { apiHelper } from "../utils/helpers";

export default {
  getTweets() {
    return apiHelper.get("api/tweets?page=1");
  },
  createTweets({ description }) {
    return apiHelper.post("api/tweets", { description });
  },
  replyTweets({tweetId, comment}) {
    return apiHelper.post(`api/tweets/${tweetId}/replies`, { comment });
  },
  likeTweets(tweetId) {
    return apiHelper.post(`api/tweets/${tweetId}/like`);
  },
  unLikeTweets(tweetId) {
    return apiHelper.post(`api/tweets/${tweetId}/unlike`);
  },
  getTweetDetail({ id }) {
    return apiHelper.get(`api/tweets/${id}`);
  },
};
