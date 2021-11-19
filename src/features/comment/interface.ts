export interface Comment {
  at: string;
  post_id: string;
  id: string;
  content: string;
  username: string;
  comment_like_count: number;
}

export interface PostCommentState {
  postComments: Array<Comment>;
  loading: boolean;
  error: string;
}

export interface GeneralCommentState {
  postComment: PostCommentState;
}
