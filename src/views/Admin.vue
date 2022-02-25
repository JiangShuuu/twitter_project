<template>
  <section class="admin">
    <div class="wrapper">
      <NavBar />
      <div class="content">
        <div class="content_title">
          <span class="content_title_name">推文清單</span>
        </div>
        <div class="content_form">
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import BetterScroll from "better-scroll";

export default {
  name: "Main",
  components: {
    NavBar,
  },
  mounted() {
    this.movefunction();
  },
  methods: {
    movefunction() {
      new BetterScroll(".content_form", {
        mouseWheel: true, //開啟滑鼠滾動
        disableMouse: false, //關閉滑鼠拖動
        disableTouch: false, //關閉手指觸摸
        scrollX: true, //X軸滾動開啟
        click: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.admin {
  max-width: 1440px;
  max-height: 1200px;
  margin: 0 auto;
  .wrapper {
    /* 使用grid區分三份 */
    display: grid;
    grid-template-columns: 378px 1062px;
    grid-auto-rows: 1200px;
  }
  .content {
    border-left: 1px solid $light-gray;
    &_title {
      display: flex;
      align-items: center;
      border-bottom: 1px solid $light-gray;
      height: 55px;
      padding-left: 15px;
      &_name {
        font-size: 19px;
        font-weight: 700;
      }
    }
    &_form {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
}
</style>
