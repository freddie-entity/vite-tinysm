import { User, UserState, UserToken } from '../interfaces';
import cookie from 'js-cookie';

export const userDefault: User = {
  _id: '',
  username: '',
  email: '',
  password: '',
  is_verified: false,
};

export const tokenDefault: UserToken = {
  access_token: cookie.get('token') || '',
  token_type: 'Bearer',
  exp: 0,
};

export const user: UserState = {
  user: userDefault,
  loading: false,
  token: tokenDefault,
  isAuth: false,
  error: '',
};
