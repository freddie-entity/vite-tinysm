import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { post } from '../../helpers/default/post';
import { Post, PostState } from '../../helpers/interfaces';
import { namespace } from '../user/ns';
import { GetUserPosts } from './postAction';

const initialState: PostState = post;

const postSlice = createSlice({
  name: `${namespace}`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ### GetUserPosts
    builder.addCase(GetUserPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      GetUserPosts.fulfilled,
      (state, { payload }: PayloadAction<Array<Post>>) => {
        state.loading = false;
        state.post = payload;
      }
    );
    builder.addCase(
      GetUserPosts.rejected,
      (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
