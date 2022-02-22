<template>
  <section class="users">
    <div class="users_content">
      <UserCard />
    </div>
  </section>
</template>

<script>
import UserCard from "../components/UserCard.vue";
export default {
  name: "Users",
  components: {
    UserCard,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.users {
  @include flexCenter;
  &_content {
    width: 600px;
  }
}
</style>
