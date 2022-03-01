<template>
  <main class="main">
    <div class="wrapper">
      <NavBar />
      <div class="follows-content">
        <FollowsTabs />
        <router-view 
        />
      </div>
      <Popular />
    </div>
  </main>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Popular from "../components/Popular.vue";
import FollowsTabs from "../components/FollowsTabs.vue";

const dummyUser = {
    users: 
        [{
      id: 1,
      name: "Marvin McKinney",
      account: "MariaReyes",
      isFollowing: true,
      isFollowed: false,
      description:
        "Lorem Remmollitia assumenda itaque asperiores, deserunt necessitatibus.",
    },
    {
      id: 2,
      name: "Guy Hawkins",
      account: "Antonio",
      isFollowing: true,
      isFollowed: false,
      description: "Remmollitia assumenda itaque asperiores, deserunt",
    }],
  
}

export default {
  name: "Followers",
  components: {
    NavBar,
    Popular,
    FollowsTabs,
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      const { users } = dummyUser
      this.users = users
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.main {
  max-width: 1440px;
  max-height: 1200px;
  margin: 0 auto;
  .wrapper {
    /* 使用grid區分三份 */
    display: grid;
    grid-template-columns: 378px 600px 462px;
    grid-auto-rows: 1200px;
  }
}
</style>