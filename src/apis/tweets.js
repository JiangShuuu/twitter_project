import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getTweets() {
    return apiHelper.get("api/tweets?page=1", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  createTweets({ description }) {
    return apiHelper.post("api/tweets", { description }, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  likeTweets({ tweetId }) {
    return apiHelper.post(`tweets/${tweetId}/like`, null, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  unLikeTweets({ tweetId }) {
    return apiHelper.delete(`tweets/${tweetId}/unlike`, null, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getTweetDetail({ id }) {
    return apiHelper.get(`api/tweets/${ id }`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  }

}

