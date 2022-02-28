<template>
  <div
    class="modal fade"
    id="personInfoModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="false"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <form class="form" @submit.stop.prevent="userProfilesEdit">
          <div class="modal-header">
            <li
              class="modal-header_close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="fa-solid fa-xmark"></i>
            </li>
            <span class="modal-header_title">編輯個人資料</span>
            <div class="modal-header_save">
              <button type="submit" class="btn" data-bs-dismiss="modal">
                儲存
              </button>
            </div>
          </div>
          <div class="user-info">
            <!--display modal person info-->
            <div class="user_image">
              <div class="user_image_background">
                <img :src="userdetail.cover" alt="" />
              </div>
              <div class="user_image_edit_icon">
                <input
                  type="file"
                  name="cover"
                  accept="image/*"
                  class="image_toggle"
                  id="cover_toggle"
                  @change="changeCover"
                />
                <label class="change_image" for="cover_toggle">
                  <i class="fa-solid fa-camera"></i>
                </label>
                <li class="delete_image" @click="deleteImage">
                  <i class="fa-solid fa-xmark"></i>
                </li>
              </div>
              <div class="user_image_avatar">
                <img :src="userdetail.avatar" alt="" />
              </div>
              <div class="user_image_edit_avatar_icon">
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  class="image_toggle"
                  id="avatar_toggle"
                  @change="changeAvatar"
                />
                <label class="change_image" for="avatar_toggle">
                  <i class="fa-solid fa-camera"></i>
                </label>
              </div>
            </div>

            <div class="form-floating">
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                maxlength="50"
                v-model="userdetail.name"
              />
              <label for="account">名稱</label>
              <span>{{ userdetail.name.length }}/50</span>
            </div>
            <div class="form-floating form-textarea">
              <textarea
                type="text"
                name="introduction"
                class="form-control text"
                id="text"
                maxlength="160"
                v-model="userdetail.introduction"
              />
              <label for="password">自我介紹</label>
              <span>{{ userdetail.introduction.length }}/160</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users.js";
import store from "./../store";

export default {
  name: "userEdit",
  data() {
    return {
      userdetail: {
        id: "1",
        name: "John Doe",
        avatar: "",
        cover: "",
        introduction: "",
      },
      isUsers: true,
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      const pramsId = this.$route.params.id;
      await this.$store.dispatch("fetchUserInfo", { payload: pramsId });
      this.userdetail = {
        ...store.state.userProfile,
      };
    },
    deleteImage() {
      this.userdetail.cover = "";
    },
    changeCover(e) {
      const { files } = e.target;
      if (files.length === 0) return;
      const imageURL = window.URL.createObjectURL(files[0]);
      this.userdetail.cover = imageURL;
    },
    changeAvatar(e) {
      const { files } = e.target;
      if (files.length === 0) return;
      const imageURL = window.URL.createObjectURL(files[0]);
      this.userdetail.avatar = imageURL;
    },
    async userProfilesEdit(e) {
      try {
        const pramsId = this.$route.params.id;

        const form = e.target;
        const formData = new FormData(form);

        // 若背景的圖片為空值，則formData新增cover, -1，來取預設背景
        if (this.userdetail.cover.length === 0) {
          formData.append("cover", "-1");
        }

        const { data } = await usersAPI.editUserInfo(pramsId, formData);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        await store.dispatch("fetchUserInfo", { payload: pramsId });

        Toast.fire({
          icon: "success",
          title: "更新成功!",
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更新user資料，請稍後再試",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.image_toggle {
  display: none;
}

.modal-content {
  border: 1px solid white;
  border-radius: 10px;
  height: 675px;
  width: 600px;
  margin-left: -3.5rem;
}
.modal-header {
  height: 60px;
  @include flexCenter;
  justify-content: flex-start;
  position: relative;
  &_close {
    cursor: pointer;
    margin: 0 45px 0 0;
    .fa-xmark {
      font-size: 20px;
      color: $orange;
    }
  }
  &_title {
    font-size: 19px;
    font-weight: 700;
  }
  &_save {
    position: absolute;
    right: 15px;
    .btn {
      width: 66px;
      height: 28px;
      @include flexCenter;
      border: 1px solid;
      border-radius: 50px;
      background: $orange;
      color: white;
      font-size: 18px;
    }
  }
}
.user_image {
  position: relative;
  &_background {
    height: 200px;
    overflow: hidden;
    background: $mid-gray;
    opacity: 75%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  &_avatar {
    width: 140px;
    height: 140px;
    border: 4px solid white;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    bottom: -35%;
    left: 15px;
    background: $light-gray;
    img {
      object-fit: cover;
      opacity: 75%;
      width: 100%;
      height: 100%;
    }
  }
  &_edit_icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    display: flex;
    .fa-camera {
      font-size: 20px;
      margin-right: 36.5px;
      color: white;
      cursor: pointer;
    }
    .fa-xmark {
      font-size: 20px;
      cursor: pointer;
    }
  }
  &_edit_avatar_icon {
    position: absolute;
    bottom: -10px;
    left: 73px;
    color: white;
    .fa-camera {
      color: white;
      font-size: 20px;
      margin-right: 36.5px;
      cursor: pointer;
    }
  }
}
.form {
  input {
    background: $light-gray;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid $mid-gray;
    width: 100%;
    height: 52px;
    margin-top: 30px;
  }
  textarea {
    background: $light-gray;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid $mid-gray;
    width: 100%;
    height: 52px;
    margin-top: 30px;
    resize: none;
  }
  label {
    color: $mid-gray;
  }
  .text {
    height: 150px;
  }
}
.form-floating {
  margin: 80px 15px 0px 15px;
  position: relative;
  span {
    position: absolute;
    right: 0;
    font-size: 15px;
    color: $mid-gray;
  }
}
.form-textarea {
  margin-top: 42px;
}
.image_toggle {
  color: white;
}
</style>
