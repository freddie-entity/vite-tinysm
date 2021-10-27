import { createSelector } from 'reselect';
import { RootState } from '../../app/store';

export const selectCurrentUser = createSelector(
  (state: RootState) => state.user,
  (user) => {
    return user;
  }
);
