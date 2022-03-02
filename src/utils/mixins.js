import moment from "moment";

export const fromNowFilter = {
  filters: {
    fromNow(datatime) {
      // 改成繁體中文顯示
      moment.locale("zh-tw");
      if (!datatime) return "-";
      return moment(datatime).fromNow();
    },
    // 上午X:XX
    fromTime(datatime) {
      moment.locale("zh-tw");
      if (!datatime) return "-";
      return moment(datatime).format("ALT");
    },
    // XXXX年X月XX日
    fromDay(datatime) {
      moment.locale("zh-tw");
      if (!datatime) return "-";
      return moment(datatime).format("ll");
    },
  },
};
