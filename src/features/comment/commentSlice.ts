import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generalCommentState } from './default';
import { GeneralCommentState } from './interface';
import { CreateComment, GetCommentByPostId } from './commentAction';

const initialState: GeneralCommentState = generalCommentState;

const commentSlice = createSlice({
  initialState,
  name: 'comments',
  reducers: {},
  extraReducers: (builder) => {
    // CreateComment
    builder.addCase(CreateComment.pending, (state) => {
      state.postComment.loading = true;
    }),
      builder.addCase(
        CreateComment.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          state.postComment.postComments =
            state.postComment.postComments.concat(payload);
          state.postComment.loading = false;
        }
      ),
      builder.addCase(
        CreateComment.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.postComment.loading = false;
        }
      );
    // GetCommentByPostId
    builder.addCase(GetCommentByPostId.pending, (state) => {
      state.postComment.loading = true;
    }),
      builder.addCase(
        GetCommentByPostId.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          state.postComment.loading = false;
        }
      ),
      builder.addCase(
        GetCommentByPostId.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.postComment.loading = false;
        }
      );
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
