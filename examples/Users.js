import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export class Users {
  static getAll() {
    return axios.get(`${BASE_URL}/users`).then((res) => res.data);
  }
}
