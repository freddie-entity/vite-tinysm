export const namespace = 'user';
import {
  AuthUserState,
  GeneralUserState,
  ProfileState,
  RecommendationState,
  User,
  UserToken,
} from './interface';
import cookie from 'js-cookie';

export const userDefault: User = {
  username: '',
  email: '',
  password: '',
  is_verified: false,
  bio: '',
  avatar: '',
  name: '',
  following: 0,
  follower: 0,
};

export const tokenDefault: UserToken = {
  access_token: cookie.get('token') || '',
  token_type: 'Bearer',
  exp: 0,
};

export const user: AuthUserState = {
  user: userDefault,
  loading: false,
  token: tokenDefault,
  isAuth: false,
  error: '',
};

export const profile: ProfileState = {
  profile: userDefault,
  loading: false,
  error: '',
};

export const recommendation: RecommendationState = {
  recommendation: [],
  loading: false,
  error: '',
};

export const generalUserState: GeneralUserState = {
  authUser: user,
  profile: profile,
  recommendation: recommendation,
};
