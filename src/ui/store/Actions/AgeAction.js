import { getUserByAge } from "../../contants/ApiEndpoints";
import { httpRequest } from "../../httpClient/HttpClient";

export const bindAgesData = (ages) => {
  return {
    type: "BIND_AGES_DATA",
    ages,
  };
};

export const fetchUserDataByItem = (selectedItem) => {
  return (dispatch) => {
    return httpRequest(getUserByAge(selectedItem), "GET", {}, {}, undefined)
      .then((res) => {
        if (res.status === 200) {
          dispatch(bindAgesData(res?.data?.length > 0 ? res.data : []));
        }
      })
      .catch((err) => {
        dispatch(console.log(err));
      });
  };
};
