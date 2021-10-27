export interface Post {
  _id: string;
  user_id: string;
  comment_count: number;
  content: string;
  location: string;
  tags: string[];
  archived: boolean;
  like_count: number;
  images: string[];
  at: string;
}

export interface PostState {
  post: Array<Post>;
  loading: boolean;
  error: string;
}
