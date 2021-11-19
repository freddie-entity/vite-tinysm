import { RootState } from '../../app/store';

export const selectCurrentUser = (state: RootState) => state.user.authUser;
export const selectUserRecommendation = (state: RootState) =>
  state.user.recommendation;
export const selectUserProfile = (state: RootState) => state.user.profile;
