import axios from "axios";

const BASE_URL = "https://httpbin.dev/status";

export function successfullRequest() {
  return axios.get(`${BASE_URL}/200`);
}

export function failedRequest() {
  return axios.get(`${BASE_URL}/403`);
}
