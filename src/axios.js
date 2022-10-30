import axios from "axios";
// import env from "react-dotenv";

const instance = axios.create({
  baseURL: "https://abandoned-checkout-recovery.herokuapp.com",
  // baseURL: "https://8000-ygpalta-abandonedchecko-z6i4s0nglq2.ws-us73.gitpod.io/",
  headers: {'Access-Control-Allow-Origin': '*'}
});

export default instance;