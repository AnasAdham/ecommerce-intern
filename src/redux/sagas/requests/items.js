import axios from "axios";
// const url = "https://fakestoreapi.com/products";

export function requestGetItems() {
  return axios.request({
    method: "get",
    url: "https://fakestoreapi.com/products",
  });
}
