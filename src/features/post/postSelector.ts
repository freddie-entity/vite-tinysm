import { createSelector } from 'reselect';
import { RootState } from '../../app/store';

export const selectUserPosts = createSelector(
  (state: RootState) => state.post.post,
  (post) => {
    return post;
  }
);
