import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getTweets() {
    return apiHelper.get("api/tweets", {
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
  }
}

