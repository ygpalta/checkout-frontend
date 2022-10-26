import axios from "axios";
// import env from "react-dotenv";

const instance = axios.create({
  baseURL: "https://abandoned-checkout-recovery.herokuapp.com",
  headers: {'Access-Control-Allow-Origin': '*'}
});

export default instance;