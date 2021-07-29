const initialState = {
  userData: []
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BIND_USER_DATA": {
      return {
        ...state,
        userData: action.userData,
      };
    }
    default:{
        return state;
    }
  }
};

export default UserReducer;
