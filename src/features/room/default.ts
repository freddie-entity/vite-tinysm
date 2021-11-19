import { GeneralRoomState, Room, UserRoomState } from './inteface';

export const namespace = 'room';

export const roomDefault: Room = {
  cover: '',
  name: '',
  at: '',
  id: '',
  last_active: '',
};

export const userRoomStateDefault: UserRoomState = {
  userRooms: [],
  loading: false,
  error: '',
};

export const generalRoomStateDefault: GeneralRoomState = {
  userRoom: userRoomStateDefault,
};
