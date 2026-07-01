import axios from "axios"

const Api = axios.create({
  baseURL: "http://localhost:7001",
  withCredentials: true
})
export default Api;