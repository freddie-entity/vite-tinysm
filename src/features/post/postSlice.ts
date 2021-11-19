import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generalPostState } from './default';
import { GeneralPostState } from './interface';
import { GetPosts, GetPostsByUsername } from './postAction';

const initialState: GeneralPostState = generalPostState;

const postSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetPosts.pending, (state) => {
      state.feedPost.loading = true;
    });
    builder.addCase(
      GetPosts.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        if (payload.length === 0) state.feedPost.more = false;
        else
          state.feedPost.feedPosts = state.feedPost.feedPosts.concat(payload);
        state.feedPost.loading = false;
      }
    );
    builder.addCase(
      GetPosts.rejected,
      (state, { payload }: PayloadAction<any>) => {
        state.feedPost.error = payload;
      }
    );
    builder.addCase(GetPostsByUsername.pending, (state) => {
      state.profilePost.loading = true;
    });
    builder.addCase(
      GetPostsByUsername.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        console.log(payload);
        if (payload.length === 0) state.profilePost.more = false;
        else {
          state.profilePost.profilePosts =
            state.profilePost.profilePosts.concat(payload);
        }
        state.profilePost.loading = false;
      }
    );
    builder.addCase(
      GetPostsByUsername.rejected,
      (state, { payload }: PayloadAction<any>) => {
        state.profilePost.error = payload;
      }
    );
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
