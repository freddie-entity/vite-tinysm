import { RootState } from '../../app/store';

export const selectCommentsByPostId = (state: RootState) =>
  state.comment.postComment;
