import userActionTypes from "./user-action-types";
export const setUserState = (userState) => ({
  payload: userState,
  type: userActionTypes.SET_CURRENT_USER_STATE,
});
export const setCurrentUser = (currentUser) => ({
  payload: currentUser,
  type: userActionTypes.SET_CURRENT_USER,
});
