import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getCurrentUser() {
    return apiHelper.get("api/users/current_user", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getUsersTop() {
    return apiHelper.get("api/users/top", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  }
};
