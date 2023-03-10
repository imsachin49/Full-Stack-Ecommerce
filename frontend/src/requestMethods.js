import axios from "axios";
import { json } from "react-router-dom";

const BASE_URL = "https://full-stack-ecommerce-mu.vercel.app/api";
// const TOKEN='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjVhNGFlYTc5NDMyNjFkM2JiNDM1NiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzI4NDg1ODEsImV4cCI6MTY3MzQ1MzM4MX0.ZWUd7r-ZZBR4gmeDGKFO--CiTjO_YG71xdkUWisyeVs'
// const token=(JSON.parse(localStorage.getItem("persist:root")));
// const token=JSON.parse(localStorage.getItem("persist:root"));

// const token=(localStorage.getItem("persist:root"));
// console.log("mytoken="+token);

// const TOKEN=JSON.parse(localStorage.getItem("persist:root"));
// console.log("fuck="+TOKEN);
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

// console.log(user)
// console.log("first")
// console.log(currentUser)
// console.log(TOKEN)

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest= axios.create({
    baseURL: BASE_URL,
    headers:{ authorization: `Bearer ${TOKEN}` }
})

// Path: frontend\src\requestMethods.js
