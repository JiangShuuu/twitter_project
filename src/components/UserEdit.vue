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
        <form @submit.stop.prevent="testForm">
          <div class="modal-header">
            <li
              class="modal-header_close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="deleteChange"
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
                  name="image"
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
                <li class="change_image">
                  <i class="fa-solid fa-camera"></i>
                </li>
              </div>
            </div>

            <div class="form-floating">
              <input
                type="text"
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
export default {
  name: "userEdit",
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  watch: {
    initialUser: function () {
      this.fetchUserData();
    },
  },
  data() {
    return {
      userdetail: {
        id: "1",
        name: "John Doe",
        avatar: "",
        cover: "",
        introduction: "",
      },
      coverFile: {},
      isUsers: true,
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      this.userdetail = {
        ...this.initialUser,
      };
    },
    deleteChange() {
      console.log("hi");
    },
    deleteImage() {
      this.userdetail.cover = "";
    },
    changeCover(e) {
      // console.log(e);
      const { files } = e.target;
      // console.log(files[0]);
      if (files.length === 0) return;
      const imageURL = window.URL.createObjectURL(files[0]);
      // console.log(imageURL);
      this.userdetail.cover = imageURL;
    },
    testForm(e) {
      // const form = {};
      // const formData = new FormData(form);
      // console.log(`name: ${this.userInfo.name}`);
      // console.log(`avatar: ${this.userInfo.avatar}`);
      // console.log(`cover: ${this.coverFile}`);
      // console.log(`introduction: ${this.userInfo.introduction}`);
      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }
      const form = e.target;
      const formData = new FormData(form);
      console.log(formData);

      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
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
</style>
