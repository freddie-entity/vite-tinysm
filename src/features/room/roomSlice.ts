import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generalRoomStateDefault, namespace } from './default';
import { GeneralRoomState } from './inteface';
import { GetRoomsByUsername, SendMessageInRoomChat } from './roomAction';

const initialState: GeneralRoomState = generalRoomStateDefault;
const roomSlice = createSlice({
  name: `${namespace}`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetRoomsByUsername.pending, (state) => {
      state.userRoom.loading = true;
    });
    builder.addCase(
      GetRoomsByUsername.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.userRoom.loading = false;
        state.userRoom.userRooms = action.payload;
      }
    );
    builder.addCase(
      GetRoomsByUsername.rejected,
      (state, action: PayloadAction<any>) => {
        state.userRoom.loading = false;
        state.userRoom.error = action.payload;
      }
    );
  },
});

export const {} = roomSlice.actions;
export default roomSlice.reducer;
