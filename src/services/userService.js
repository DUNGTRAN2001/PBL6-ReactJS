import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("/api/User/UserLogin", { email, password });
};
const getAllUser = () => {
  return axios.get("api/UserInfo/GetUserInfos");
};
export { handleLoginApi, getAllUser };
