import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import {
  required,
  email,
  confirmed,
  min,
  max,
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
extend("max_length", {
  ...max,
  message: "最多12個字母!",
});
extend("max_name_length", {
  ...max,
  message: "最多50個字母!",
});
extend("max_tweet_length", {
  ...max,
  message: "字數不可超過140個字",
});

extend("tweet_empty", (value) => {
  let arrStr = value.split(""); //將字串轉換為陣列
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === " ") {
      arrStr[i] = "";
    }
  }
  arrStr = arrStr.join("");

  if (arrStr.length > 0) {
    return true;
  }
  return "內容不可空白";
});

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
