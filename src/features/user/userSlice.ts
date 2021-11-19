import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GeneralUserState, User } from './interface';
import { tokenDefault, generalUserState, userDefault } from './default';
import { GetMe, GetProfile, GetRecommendation, UserLogin } from './userAction';
import { namespace } from './default';
import cookie from 'js-cookie';

const initialState: GeneralUserState = generalUserState;

const userSlice = createSlice({
  name: `${namespace}`,
  initialState,
  reducers: {
    UserLogout(state) {
      state.authUser.token = tokenDefault;
      state.authUser.user = userDefault;
      state.authUser.isAuth = false;
      cookie.remove('token');
    },
  },
  extraReducers: (builder) => {
    // ### Login
    builder.addCase(UserLogin.pending, (state) => {
      state.authUser.loading = true;
      state.authUser.isAuth = false;
    });
    builder.addCase(
      UserLogin.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.authUser.token = action.payload;
        state.authUser.isAuth = true;
        state.authUser.loading = false;
        cookie.set('token', action.payload.access_token);
      }
    );
    builder.addCase(UserLogin.rejected, (state, action: PayloadAction<any>) => {
      state.authUser.loading = false;
      state.authUser.isAuth = false;
      state.authUser.error = action.payload.message;
    });
    // ### GetMe
    builder.addCase(GetMe.pending, (state) => {
      state.authUser.loading = true;
    });
    builder.addCase(GetMe.fulfilled, (state, action: PayloadAction<User>) => {
      state.authUser.loading = false;
      state.authUser.isAuth = true;
      state.authUser.user = action.payload;
    });
    builder.addCase(GetMe.rejected, (state) => {
      state.authUser.loading = false;
      state.authUser.isAuth = false;
      state.authUser.user = userDefault;
      cookie.remove('token');
    });
    // ### GetRecommendation
    builder.addCase(GetRecommendation.pending, (state) => {
      state.recommendation.loading = true;
    });
    builder.addCase(
      GetRecommendation.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.recommendation.recommendation = payload;
        state.recommendation.loading = false;
      }
    );
    builder.addCase(
      GetRecommendation.rejected,
      (state, { payload }: PayloadAction<any>) => {
        state.recommendation.error = payload;
        state.recommendation.loading = false;
      }
    );
    // ### GetProfile
    builder.addCase(GetProfile.pending, (state) => {
      state.profile.loading = true;
    });
    builder.addCase(
      GetProfile.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.profile.profile = payload;
        state.profile.loading = false;
      }
    );
    builder.addCase(
      GetProfile.rejected,
      (state, { payload }: PayloadAction<any>) => {
        state.profile.error = payload;
        state.profile.loading = false;
      }
    );
  },
});

export const { UserLogout } = userSlice.actions;
export default userSlice.reducer;
