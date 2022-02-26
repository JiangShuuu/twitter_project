import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, alpha_num } from "vee-validate/dist/rules";
import Vue from "vue";

extend("required", {
  ...required,
  message: "請勿包含空白!",
});

extend("alpha_num", {
  ...alpha_num,
  message: "請輸入密碼!",
});

extend("vrequired", (value) => {
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
