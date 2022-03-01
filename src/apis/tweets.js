import { apiHelper } from "../utils/helpers";

export default {
  getTweets() {
    return apiHelper.get("api/tweets?page=1");
  },
  createTweets({ description }) {
    return apiHelper.post("api/tweets", { description });
  },
  likeTweets({ tweetId }) {
    return apiHelper.post(`tweets/${tweetId}/like`, null);
  },
  unLikeTweets({ tweetId }) {
    return apiHelper.delete(`tweets/${tweetId}/unlike`, null);
  },
  getTweetDetail({ id }) {
    return apiHelper.get(`api/tweets/${id}`);
  },
};
