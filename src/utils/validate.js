import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import {
  required,
  email,
  confirmed,
  min,
  alpha_num,
} from "vee-validate/dist/rules";
import Vue from "vue";

extend("alpha_num", {
  ...alpha_num,
  message: "只能使用英文或數字!",
});
extend("account", {
  ...required,
  message: "請輸入帳號!",
});
extend("password", {
  ...required,
  message: "請輸入密碼!",
});
extend("email", {
  ...email,
  message: "請輸入信箱格式!",
});
extend("create_account", {
  ...required,
  message: "帳號 為必填!",
});
extend("create_name", {
  ...required,
  message: "名稱 為必填!",
});
extend("create_email", {
  ...required,
  message: "Email 為必填!",
});
extend("create_password", {
  ...required,
  message: "密碼 為必填!",
});
extend("confirmed_password", {
  ...required,
  message: "請確認您的密碼!",
});
extend("confirmed", {
  ...confirmed,
  message: "請確認您的密碼一致!",
});
extend("min_length", {
  ...min,
  message: "至少6個字母!",
});

extend("pass", (value) => {
  if (
    value.indexOf(" ") >= 0 ||
    value == null ||
    value.indexOf(" ") >= 0 ||
    value == null
  ) {
    return "請輸入正確帳號!";
  }
});

Vue.component("ValidationProvider", ValidationProvider);

// 用confirmed 明天查官方文件
Vue.component("ValidationObserver", ValidationObserver);
