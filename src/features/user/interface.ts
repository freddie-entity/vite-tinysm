export interface UserMessage {
  status: number;
  message: string;
}

export interface UserToken {
  access_token: string;
  token_type: string;
  exp: number;
}

export interface User {
  username: string;
  email: string;
  password: string;
  is_verified: boolean;
  bio: string;
  avatar: string;
  name: string;
  following: number;
  follower: number;
}

export interface RecommendationUser {
  username: string;
  avatar: string;
  name: string;
}

export interface ProfileUser {
  username: string;
  bio: string;
  avatar: string;
  name: string;
  following: number;
  follower: number;
}

export interface AuthUserState {
  user: User;
  loading: boolean;
  token: UserToken;
  isAuth: boolean;
  error: string;
}
export interface RecommendationState {
  recommendation: Array<RecommendationUser>;
  loading: boolean;
  error: string;
}
export interface ProfileState {
  profile: ProfileUser;
  loading: boolean;
  error: string;
}

export interface GeneralUserState {
  authUser: AuthUserState;
  recommendation: RecommendationState;
  profile: ProfileState;
}

export interface UserLoginType {
  username: string;
  password: string;
}
