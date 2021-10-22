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
  _id: string;
  username: string;
  email: string;
  password: string;
  is_verified: boolean;
}

export interface UserState {
  user: User;
  loading: boolean;
  token: UserToken;
  isAuth: boolean;
  error: string;
}

export interface UserLoginType {
  username: string;
  password: string;
}
