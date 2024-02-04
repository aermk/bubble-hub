import axios from "axios";

const mockApi = axios.create({
  baseURL: "/",
});

export default mockApi;
