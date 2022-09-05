import userActionTypes from "./user-action-types";
export const setUserState = (userState) => ({
  payload: userState,
  type: userActionTypes.SET_CURRENT_USER_STATE,
});
