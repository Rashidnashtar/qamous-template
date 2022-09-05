import userActionTypes from "./user-action-types";

const INITIAL_STATE = {
  userState: "guest",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER_STATE:
      return {
        ...state,
        userState: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
