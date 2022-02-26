import Swal from "sweetalert2";
import axios from "axios";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});

export const ToastWarning = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: true,
  timer: 3000,
});
// axios
const baseURL = "https://protected-springs-71103.herokuapp.com/";

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

export const apiHelper = axiosInstance;
