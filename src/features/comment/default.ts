export const namespace = 'comment';

import { Comment, GeneralCommentState, PostCommentState } from './interface';

export const commentDefault: Comment = {
  at: '',
  post_id: '',
  id: '',
  content: '',
  username: '',
  comment_like_count: 0,
};

export const commentsDefault: PostCommentState = {
  postComments: [],
  loading: false,
  error: '',
};

export const generalCommentState: GeneralCommentState = {
  postComment: commentsDefault,
};
