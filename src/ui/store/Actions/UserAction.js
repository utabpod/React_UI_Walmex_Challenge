import { getUsersUrl } from "../../contants/ApiEndpoints";
import { httpRequest } from "../../httpClient/HttpClient";
import store from "../Store";

export const bindUserData = (userData) => {
  return {
    type: "BIND_USER_DATA",
    userData,
  };
};
export const fetchUserData = () => {
  return (dispatch) => {
    return httpRequest(getUsersUrl, "GET", {}, {}, undefined)
      .then((res) => {
        if (res.status === 200) {
          dispatch(bindUserData(res?.data?.length > 0 ? res.data : []));
        }
      })
      .catch((err) => {
        dispatch(console.log(err));
      });
  };
};
