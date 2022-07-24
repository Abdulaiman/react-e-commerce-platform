import { createSelector } from "reselect";
const userMemoizer = (state) => state.user;
export const selectCurrentUser = createSelector(
  [userMemoizer],
  (user) => user.currentUser
);
