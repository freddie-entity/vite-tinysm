export interface Post {
  comment_count: number;
  archived: boolean;
  images: string[];
  like_count: number;
  at: string;
  location: string;
  id: string;
  content: string;
  username: string;
  tags: string[];
  // previewComments: Array<Comment>;
}

export interface FeedPostState {
  feedPosts: Array<Post>;
  loading: boolean;
  error: string;
  more: boolean;
}

export interface ProfilePostState {
  profilePosts: Array<Post>;
  loading: boolean;
  error: string;
  more: boolean;
}

export interface DetailPostState {
  detailPost: Post;
  loading: boolean;
  error: string;
}

export interface GeneralPostState {
  feedPost: FeedPostState;
  profilePost: ProfilePostState;
  detailPost: DetailPostState;
}
