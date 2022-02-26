import { apiHelper } from "../utils/helpers";

export default {
  signIn({ account, password }) {
    return apiHelper.post("api/admin/login", {
      account,
      password,
    });
  },
  signUp(data) {
    return apiHelper.post("/signup", {
      ...data,
    });
  },
};
