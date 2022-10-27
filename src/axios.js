import axios from "axios";
// import env from "react-dotenv";

const instance = axios.create({
  baseURL: "https://abandoned-checkout-recovery.herokuapp.com",
  // baseURL: "https://8000-ygpalta-abandonedchecko-pg4fp3cx4k1.ws-us73.gitpod.io",
  headers: {'Access-Control-Allow-Origin': '*'}
});

export default instance;