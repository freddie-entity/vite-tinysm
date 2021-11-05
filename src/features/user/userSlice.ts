import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '../../helpers/interfaces';
import { tokenDefault, user, userDefault } from '../../helpers/default/user';
import { GetMe, UserLogin } from './userAction';
import { namespace } from './ns';
import cookie from 'js-cookie';

const initialState: UserState = user;

const userSlice = createSlice({
  name: `${namespace}`,
  initialState,
  reducers: {
    UserLogout(state) {
      state.token = tokenDefault;
      state.user = userDefault;
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    // ### Login
    builder.addCase(UserLogin.pending, (state) => {
      state.loading = true;
      state.isAuth = false;
    });
    builder.addCase(
      UserLogin.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.token = action.payload;
        state.isAuth = true;
        state.loading = false;
        cookie.set('token', action.payload.access_token);
      }
    );
    builder.addCase(UserLogin.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.isAuth = false;
      state.error = action.payload.message;
    });
    // ### GetMe
    builder.addCase(GetMe.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetMe.fulfilled, (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.isAuth = true;
      state.user = action.payload;
    });
    builder.addCase(GetMe.rejected, (state) => {
      state.loading = false;
      state.isAuth = false;
      state.user = userDefault;
      cookie.remove('token');
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
