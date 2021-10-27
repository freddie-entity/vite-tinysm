import { Post, PostState } from '../interfaces';

export const postDefault: Post = {
  _id: '',
  user_id: '',
  comment_count: 0,
  content: '',
  location: '',
  tags: [],
  archived: false,
  like_count: 5,
  images: [],
  at: '',
};

export const post: PostState = {
  post: [postDefault],
  loading: false,
  error: '',
};
