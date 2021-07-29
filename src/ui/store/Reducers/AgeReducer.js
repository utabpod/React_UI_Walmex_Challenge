const initialState = {
  ages: [],
};
const AgeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BIND_AGES_DATA": {
      return {
        ...state,
        ages: action.ages,
      };
    }
    default: {
      return state;
    }
  }
};

export default AgeReducer;
