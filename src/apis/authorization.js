import { apiHelper } from "../utils/helpers";

export default {
  adminSignIn({ account, password }) {
    return apiHelper.post("api/admin/login", {
      account,
      password,
    });
  },
  userSignIn({ account, password }) {
    return apiHelper.post("api/login", {
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
