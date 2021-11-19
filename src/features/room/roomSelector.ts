import { RootState } from '../../app/store';

export const selectUserRooms = (state: RootState) => state.room.userRoom;
